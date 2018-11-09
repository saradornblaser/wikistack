const router = require("express").Router();

router.get("/", (req, res) => {
  try {
    res.send("you are here: get /");
  } catch (err) {



  }

});


router.post("/", (req, res) => {
  try {
    res.send("you are here: post /");
  } catch (err) {



  }

});

router.get("/add", (req, res) => {
  try {
    res.send("you are here: get /add");
  } catch (err) {



  }

});





module.exports = router;
