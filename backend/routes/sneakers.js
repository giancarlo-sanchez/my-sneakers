const express = require('express');
const router = express.Router();
const db = require("../db/models");
const Op = require('sequelize').Op;

const {check, validationResult} = require('express-validator');
const {
    asyncHandler,
    handleValidationErrors
} = require('./utils')
const { requireAuth } = require("../auth");

//router.use(requireAuth);


router.get("/", asyncHandler(async(req, res)=>{
    const sneakers =  await db.Sneaker.findAll({
        include: [db.Brand, db.SneakerType]
    });
    res.json({sneakers})
}));

// router.get("/top", asyncHandler(async(req, res)=>{
//         const topsneakers = await db.Checkin.findAll({
//             include: [db.sneaker],
//             order: [["rating", "DESC"]],

//         });
//         res.json({topsneakers});
//     }));

router.get("/:id(\\d+)", asyncHandler(async(req, res)=>{
    const sneakerId = parseInt(req.params.id,10);
    const sneaker = await db.Sneaker.findByPk(sneakerId);
    res.json({
        sneaker,
    });
}));

router.delete("/:id(\\d+)",
    asyncHandler(async (req, res) => {
        const sneakerId = parseInt(req.params.id, 10);
        const sneaker = await db.Sneaker.findByPk(sneakerId);

        const deletedsneaker = await sneaker.destroy();

        res.json({msg: "The sneaker is no longer available 😞!",deletedsneaker});
}));

router.get("/brand/:id(\\d+)", asyncHandler(async(req, res)=>{
    const brandId = parseInt(req.params.id,10);
    const sneakers = await db.Sneaker.findAll({
        where: {brandId: brandId},
        include: [db.Brand, db.SneakerType]
    });
    res.json({ sneakers });
}));


router.post("/search", asyncHandler(async (req,res)=>{
    const query = req.body.query;
    console.log(req.body)
    try{
        let results = await db.Sneaker.findAll(
            {
          where: {
            name: {
              [Op.iLike]: `%${query}%`,
            },
          },
          include: [db.Brand, db.SneakerType]
        }
        );
        console.log(results)
        res.json({results});
    } catch(err){
        console.log(err)
    }

}));


module.exports = router;
