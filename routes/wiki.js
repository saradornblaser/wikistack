const router = require("express").Router();
const addPage = require('../views/addPage');


router.get("/", (req, res) => {
  try {
    res.send("you are here: get /");
  } catch (err) {



  }

});


router.post("/", (req, res) => {
  try {
    res.json(req.body);
    /*res.send("you are here: post /");
    const page = pages*/

    //   const userId = userData.rows[0].id;
    //   const postData = await client.query(`INSERT INTO posts (userId, title, content) VALUES ($1, $2, $3) RETURNING *`, [userId, req.body.title, req.body.content]);

    //   const postId = postData.rows[0].id;
    //   const upvoteData = await client.query('INSERT INTO upvotes (userId, postId) VALUES ($1, $2) RETURNING *', [userId, postId]);

    //   res.redirect(`/posts/${postId}`);
    // } catch (error) {
    //   res.status(500).send(`Something went wrong: ${error}`);
    // }




  } catch (err) {



  }

});

router.get("/add", (req, res) => {
  try {
    res.send(addPage());
  } catch (err) {



  }

});





module.exports = router;
