import express from 'express'
import { placeOrderCod } from '../controllers/orderController.js';

const orderRouter= express.Router();

orderRouter.post('/cod',authUser,placeOrderCod);