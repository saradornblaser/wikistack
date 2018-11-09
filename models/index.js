const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');



const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
      allowNull: false //,
      /*validate: {
        notEmpty: true
      }*/
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }

  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  }
});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
});

module.exports.db = db;
module.exports.Page = Page;
module.exports.User = User;

// module.exports = { db };
// module.exports = { Page, User };
