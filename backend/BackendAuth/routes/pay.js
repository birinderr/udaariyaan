import express from 'express';

import{createorder,getpayment} from'../controllers/pay.controller.js'

const router=express.Router()
router.post('/order',createorder);
router.get('/payment/:paymentId',getpayment);

export default router;