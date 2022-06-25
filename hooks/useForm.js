import { useEffect, useState } from "react";
import validateInfo from "../validators/validate.js";

const useForm = () => {
  const [values, setValues] = useState({
    cardName: "",
    cardNumber: "",
    cardExpiration: "",
    cardSecurityCode: "",
    focus: "",
  });

  const [errors, setErrors] = useState({});

  const handleFocus = (e) => {
    setValues({
      ...values,
      focus: e.target.name === "cardSecurityCode" ? "cvc" : e.target.name,
    });
  };

  useEffect(() => {
    setErrors(validateInfo(values));
  }, [values]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return { handleChange, handleFocus, handleSubmit, values, errors };
};

export default useForm;
