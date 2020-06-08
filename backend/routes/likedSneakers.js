const express = require('express');
const router = express.Router();
const db = require("../db/models");

const {check, validationResult} = require('express-validator');
const {
    asyncHandler,
    handleValidationErrors
} = require('./utils')
const { requireAuth } = require("../auth");

router.use(requireAuth);



router.get("/liked-sneakers", asyncHandler(async (req, res) => {
    const likedSneaker = await db.LikedSneaker.findAll({
        include: [db.User, db.Sneaker]
    });
    res.json({
        likedSneaker
    });
}));

module.exports = router;
