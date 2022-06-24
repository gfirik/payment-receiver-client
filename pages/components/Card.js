import React, { useEffect, useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  InputAdornment,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import styles from "../../styles/Card.module.css";
import Cards from "react-credit-cards";
import useForm from "../hooks/useForm.js";
import "react-credit-cards/es/styles-compiled.css";
import useStyles from "../mui/customStyle.js";

export default function Card() {
  const [amount, setAmount] = useState(1);
  const { handleChange, handleFocus, handleSubmit, values, errors } = useForm();
  const classes = useStyles();
  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmitPayment = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.wrapper}>
      <Cards
        className={styles.card}
        cvc={values.cardSecurityCode}
        expiry={values.cardExpiration}
        focused={values.focus}
        name={values.cardName}
        number={values.cardNumber}
      />
      <form onSubmit={handleSubmit} className={styles.formsgroup} method="POST">
        <FormControl fullWidth variant="outlined" className={styles.formchild}>
          <InputLabel htmlFor="card-number">Cardholder Number</InputLabel>
          <Input
            placeholder="Cardholder Number"
            id="card-number"
            name="cardNumber"
            type="number"
            inputProps={{ maxLength: 16 }}
            onChange={handleChange}
            onFocus={handleFocus}
            defaultValue={values.cardNumber}
            isvalid={errors.cnumber ? "true" : "false"}
          />
        </FormControl>
        <FormControl fullWidth variant="outlined" className={styles.formchild}>
          <InputLabel htmlFor="card-name">Cardholder Name</InputLabel>
          <Input
            placeholder="Cardholder Name"
            id="card-name"
            type="text"
            onChange={handleChange}
            onFocus={handleFocus}
            name="cardName"
            defaultValue={values.cardName}
            isvalid={errors.cname ? "true" : "false"}
          />
        </FormControl>
        <FormControl fullWidth variant="outlined" className={styles.formchild}>
          <InputLabel htmlFor="card-expiration">Cardholder Exp</InputLabel>
          <Input
            placeholder="mm / yyyy"
            id="card-expiration"
            name="cardExpiration"
            onChange={handleChange}
            onFocus={handleFocus}
            defaultValue={values.cardExpiration}
            isvalid={errors.cexp ? "true" : "false"}
          />
        </FormControl>
        <FormControl fullWidth variant="outlined" className={styles.formchild}>
          <InputLabel htmlFor="card-cvv">Cardholder CVV</InputLabel>
          <Input
            placeholder="Cardholder CVV"
            id="card-cvv"
            name="cardSecurityCode"
            onChange={handleChange}
            onFocus={handleFocus}
            defaultValue={values.cardSecurityCode}
            isvalid={errors.ccvv ? "true" : "false"}
          />
        </FormControl>
        {errors.show && (
          <Alert
            severity={errors.variant ? errors.variant : "error"}
            className={styles.alert}
          >
            {errors.message}
          </Alert>
        )}
        <FormControl fullWidth variant="outlined" className={styles.formchild}>
          <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
          <Input
            id="standard-adornment-amount"
            type="number"
            value={amount}
            onChange={handleChangeAmount}
            startAdornment={<InputAdornment position="end">$</InputAdornment>}
            disabled={errors.variant === "success" ? false : true}
          />
        </FormControl>
        <Button
          variant="outlined"
          disabled={amount === 1 || amount < 1 ? true : false}
          type="submit"
          color="primary"
          className={amount === 1 || amount < 1 ? null : classes.root}
          onClick={handleSubmitPayment}
        >
          Proceed
        </Button>
      </form>
    </div>
  );
}
