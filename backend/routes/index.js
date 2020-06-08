const express = require('express');

const router = express.Router();



router.get("/", (req, res) => {
    console.log("This is home");
    res.json({ message : `testing index root ${process.env.PORT}`});
});





module.exports = router;
