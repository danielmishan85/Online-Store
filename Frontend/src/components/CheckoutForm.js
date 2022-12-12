import { useRef } from 'react';

import Card from './Card';
import classes from './CheckoutForm.module.css';

function CheckoutForm(props) {
  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const shippingAddressInputRef = useRef();
  const emailInputRef = useRef();
  const creditCardNumberInputRef = useRef();
  const expiryDateInputRef = useRef();
  const cvvInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredShippingAddress = shippingAddressInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredCreditCardNumbers = creditCardNumberInputRef.current.value;
    const enteredExpiryDate = expiryDateInputRef.current.value;
    const enteredCVV = cvvInputRef.current.value;

    const userData = {
      fullName: enteredName,
      address: enteredAddress,
      shippingAddress: enteredShippingAddress,
      email: enteredEmail,
      creditCardNumber: enteredCreditCardNumbers,
      expiryDate: enteredExpiryDate,
      cvv: enteredCVV,
    };
    console.log(userData);
    props.onConfirmOrder(userData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='fullName'>Full Name</label>
          <input type='text' required id='fullName' ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='shippingAddress'>Shipping Address</label>
          <input
            type='text'
            required
            id='shippingAddress'
            ref={shippingAddressInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='email'>Email</label>
          <input type='text' required id='email' ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='creditCardNumber'>Credit Card Number</label>
          <input
            type='text'
            required
            id='creditCardNumber'
            ref={creditCardNumberInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='expiryDate'>Expiry Date</label>
          <input
            type='text'
            required
            id='expiryDate'
            ref={expiryDateInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='cvv'>CVV</label>
          <input type='text' required id='cvv' ref={cvvInputRef} />
        </div>
        <div className={classes.actions}>
          <button onClick={submitHandler}>Confirm Order</button>
        </div>
      </form>
    </Card>
  );
}

export default CheckoutForm;
