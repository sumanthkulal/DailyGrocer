import express from 'express'
import { getAllOrders, getUsersOrders, placeOrderCod } from '../controllers/orderController.js';

import authUser from "../middlewares/authUser.js";
import authSeller from "../middlewares/authSeller.js";


const orderRouter= express.Router();

orderRouter.post('/cod',authUser,placeOrderCod);
orderRouter.get('/user',authUser,getUsersOrders);
orderRouter.get('/user',authSeller,getAllOrders);

export default orderRouter;
