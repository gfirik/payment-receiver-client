import connectMongo from "../../../utils/connectMongoDB";
import Payment from "../../../models/paymentModel";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function proceedPayment(req, res) {
  try {
    console.log("CONNECTING TO MONGODB");
    await connectMongo();
    console.log("CONNECTED TO MONGODB");
    console.log("CREATING PAYMENT");
    const payment = await Payment.create(req.body);
    console.log("PAYMENT CREATED");
    res.status(200).json({
      message: "Payment created",
      RequestedId: payment._id,
      Amount: payment.amount,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
}
