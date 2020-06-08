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



router.get("/", asyncHandler(async (req, res) => {
    const orders = await db.Order.findAll({
        include: [db.User, db.Sneaker]
    });
    res.json({
        orders
    });
}));

router.post("/", asyncHandler(async (req, res)=>{
    const userId = parseInt(req.body.userId, 10)
    const sneakerId = parseInt(req.body.sneakerId, 10)
    const newOrder = { userId, sneakerId};
    try{
        const success = await db.Order.create(newOrder);
    }catch(err){
        console.error(err);
        throw err;
    }
    res.status(201).end();
}));


router.get("/:id(\\d+)", asyncHandler(async(req, res)=>{
    const orderId = parseInt(req.params.id,10);
    let order = await db.Order.findAll({
      where: { id: orderId },
      include: [
        db.User,
        {
          model: db.Sneaker,
          include: db.Brand,
        },
      ],
    });
    order = order[0];
    order= order.toJSON();
    order.id = orderId;
    res.json({order});

}));

router.delete("/:id(\\d+)",
    asyncHandler(async (req, res) => {
        const orderId = parseInt(req.params.id, 10);
        const order = await db.Order.findByPk(orderId);

        console.log(order);
        const deletedOrder = await order.destroy();
        res.json({msg: "The record is no longer available 😞!",deletedOrder});
}));

module.exports = router;
