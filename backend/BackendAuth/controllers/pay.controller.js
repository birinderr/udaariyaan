import Razorpay from "razorpay";
const razorpay=new Razorpay({
    key_id:"1234@axis",
    key_secret:"1234" })
     export const createorder=async(req,res)=>{
        const {amount,currency}=req.query;
        const option=req.body
        try{
            const response= await razorpay.orders.create(option)
            res.json(response);
             
        }catch(error)
        {
            res.status(400).json("internal server error");
        }
     }
     export const getpayment=async(req,res)=>{
        const{paymentId}=req.params;
        const razorpay=new Razorpay({
            key_id:"1234@axis",
            key_secret:"1234" })
    try{
    const payment=await razorpay.payments.fetch(paymentId);
    if(!payment)
        res.status(400).json("error loading")
            
            res.json({
          status:payment.status,
          method:payment.method,
          amount:payment.amount ,
          currency:payment.currency
            })
        }catch(error)
        {
            res.status(400).json("failed to fetch")
        }
     }