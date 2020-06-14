import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listMyOrders, deleteOrder } from '../actions/orderActions';

function OrdersPage(props) {
  const myOrderList = useSelector(state => state.myOrderList);
  console.log("this is order list",myOrderList)
  const { loading, orders, error } = myOrderList;



  const dispatch = useDispatch();

  let index =  props.match.params.id;
  console.log("this is index",index);
  console.log("this is orders",orders);



  useEffect(() => {
    dispatch(listMyOrders(index));
    return () => {
    };
  }, []);

  const deleteHandler = (order) => {
    dispatch(deleteOrder(order.id));
  }
  return loading ? <div>Loading...</div> :
    <div className="content content-margined">

      <div className="order-header">
        <h3>Your orders</h3>
      </div>
      <div className="order-list">

        <table className="table">
          <thead>
            <tr>
              <th>ORDER ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>SNEAKER IDS</th>
              <th>PAID VIA</th>

            </tr>
          </thead>
          <tbody>
            {orders.map(order => (<tr key={order._id}>
              <td>{order.id}</td>
              <td>{order.createdAt.split("T").join(" ")}</td>
              <td>${order.totalPrice}</td>
              <td>{order.arrayIds}</td>
              <td>{order.paymentDetails}</td>
              {/* <td>{order.isDelivered.toString()}</td>
              <td>{order.deliveredAt}</td> */}

            </tr>))}
          </tbody>
        </table>

      </div>
    </div>
}
export default OrdersPage;
