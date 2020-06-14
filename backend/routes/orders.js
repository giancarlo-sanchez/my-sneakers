const express = require('express');
const router = express.Router();
const db = require("../db/models");

const {check, validationResult} = require('express-validator');
const {
    asyncHandler,
    handleValidationErrors
} = require('./utils')
const { requireAuth } = require("../auth");

//router.use(requireAuth);



router.get("/", asyncHandler(async (req, res) => {
    const orders = await db.Order.findAll({
        include: [db.User]
    });
    res.json({
        orders
    });
}));

router.post("/", asyncHandler(async (req, res)=>{
     console.log("this is the request",req.body)
    // const userId = req.body
    // console.log("this is userId",userId, "and this is the request body",userId);
    const  userId = parseInt(req.body.userId, 10)
    const arrayIds = req.body.arrayIds;
    const shippingDetails = req.body.shippingDetails;
    const paymentDetails = req.body.paymentDetails;
    const itemsPrice= parseFloat(req.body.itemsPrice, 10)
    const shippingPrice= parseFloat(req.body.shippingPrice, 10)
    const taxPrice= parseFloat(req.body.taxPrice, 10)
    const totalPrice= parseFloat(req.body.totalPrice, 10)

    const newOrder = { userId, arrayIds, shippingDetails, paymentDetails, itemsPrice, shippingPrice, taxPrice,  totalPrice};
    try{
        const created = await db.Order.create(newOrder);
        res.status(201).json({created});
    }catch(err){
        console.error(err);
        throw err;
    }
}));



router.get("/:id(\\d+)", asyncHandler(async(req, res)=>{
    const orderId = parseInt(req.params.id,10);
    let order = await db.Order.findAll({
      where: { id: orderId },
      include: [db.User],
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
