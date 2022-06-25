import { Schema, model, models } from "mongoose";

const paymentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  expiration: {
    type: String,
    required: true,
  },
  cvv: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

const Payment = models.Payment || model("Payment", paymentSchema);

export default Payment;
