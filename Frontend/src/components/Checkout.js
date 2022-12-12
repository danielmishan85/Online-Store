import { useNavigate } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import './Checkout.module.css';

function Checkout() {
  const history = useNavigate();

  function onConfirmOrderHandler(userData) {
    fetch('https://localhost:5000/checkout', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      history('/');
    });
  }

  return (
    <section>
      <h1>Checkout</h1>
      <CheckoutForm onConfirmOrder={onConfirmOrderHandler} />
    </section>
  );
}

export default Checkout;
