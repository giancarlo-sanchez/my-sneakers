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
    const brands =  await db.Brand.findAll();
    res.json({brands});
}));


router.get("/:id(\\d+)", asyncHandler(async(req, res)=>{
    const brandId = parseInt(req.params.id,10);
    const brand = await db.Brand.findByPk(brandId);
    const brandSneakers = await db.Sneaker.findAll({where: {
        brandId: brandId
    }})
    const brandSneakersIds = brandSneakers.map(sneaker => sneaker.id);
    const orders = await db.Order.findAll({
        where: {
            sneakerId: {[Op.or]: brandSneakersIds}
        },
        include: [db.User, {
            model: db.Sneaker,
            include: db.Brand
        }]
    });
    const sneaker = await db.Sneaker.findAll({
        where: {
            brandId: brandId
        },
        include: [{
            model: db.Brand
        }]
    });
    res.json({
        brand,
        orders,
        sneaker
    });
}));


router.post("/search", asyncHandler(async (req,res)=>{
    const query = req.body.query;
    try{
        let results = await db.Brand.findAll(
            {
          where: {
            name: {
              [Op.iLike]: `%${query}%`,
            },
          },
          include: {model: db.Sneaker, include: db.Order}
        }
        );
        res.json({results});
    } catch(err){
        console.log(err)
    }

}));




router.delete("/:id(\\d+)",
    asyncHandler(async (req, res) => {
        const brandId = parseInt(req.params.id, 10);
        const brand = await db.Brand.findByPk(brandId);

        const deletedBrand = await brand.destroy();

        res.json({msg: "The brewery is no longer available 😞!",deletedBrand});
}));





module.exports = router;
