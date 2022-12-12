// import React from 'react';

// import styled from 'styled-components';

// import { useNavigate } from 'react-router-dom';

// const Checkout = () => {
//   const navigate = useNavigate();
//   const [form, setForm] = React.useState({
//     name: '',
//     email: '',
//     shippingAddress1: '',

//     touched: {
//       email: false,
//       password: false,
//       shippingAddress1: false,
//     },
//   });

//   const errors = {
//     name: form.name.length === 0,
//     email: form.email.length === 0,
//     shippingAddress1: form.shippingAddress1.length === 0,
//   };
//   const disabled = Object.keys(errors).some((x) => errors[x]);

//   const handleChange = (ev) => {
//     const { name, value } = ev.target;

//     setForm((prevState) => {
//       return {
//         ...prevState,
//         [name]: value,
//       };
//     });
//   };

//   const handleBlur = (ev) => {
//     const { name } = ev.target;
//     setForm((prevState) => {
//       return {
//         ...prevState,
//         touched: { ...form.touched, [name]: true },
//       };
//     });
//   };

//   const handleSubmit = (ev) => {
//     if (disabled) {
//       ev.preventDefault();
//       return;
//     }
//     navigate('/orderconfirmation');
//   };

//   const showError = (field) => (errors[field] ? form.touched[field] : false);

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className='checkout'>
//         <CheckoutContainer>
//           <CheckoutTitle>Shopping Checkout</CheckoutTitle>

//           <CheckoutHeader>
//             <h4>Your Details</h4>
//           </CheckoutHeader>

//           <CheckoutHeaderLine />

//           <CheckoutTable>
//             <CheckoutFormLabel>Name</CheckoutFormLabel>
//             <CheckoutInput
//               type='text'
//               name='name'
//               invalid={showError('name')}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               placeholder='Enter name'
//             />
//           </CheckoutTable>
//           <CheckoutTable>
//             <CheckoutFormLabel>Email</CheckoutFormLabel>
//             <CheckoutInput
//               type='text'
//               name='email'
//               invalid={showError('email')}
//               onChange={handleChange}
//               placeholder='Enter email'
//             />
//           </CheckoutTable>

//           <CheckoutHeader>
//             <h4>Address Details</h4>
//           </CheckoutHeader>
//           <CheckoutHeaderLine />

//           <CheckoutTable>
//             <CheckoutFormLabel>Shipping Address</CheckoutFormLabel>

//             <CheckoutAddress>
//               <CheckoutInput
//                 type='text'
//                 name='shippingAddress1'
//                 invalid={showError('shippingAddress1')}
//                 placeholder='Enter first address line'
//               />
//               <input type='text' name='shippingAddress2' />
//               <input type='text' name='shippingCity' />
//             </CheckoutAddress>
//           </CheckoutTable>

//           <CheckoutHeader>
//             <h4>Payment</h4>
//           </CheckoutHeader>
//           <CheckoutHeaderLine />

//           <CheckoutTable>
//             <CheckoutFormLabel>Payment</CheckoutFormLabel>

//             <CheckoutAddress>
//               <CheckoutInput
//                 type='text'
//                 name='creditCartNumber'
//                 invalid={showError('shippingAddress1')}
//                 placeholder='Enter your credit card'
//               />

//               <input type='text' name='expiryDate' />
//               <input type='text' name='cvv' />
//             </CheckoutAddress>
//           </CheckoutTable>

//           <CancelButton onClick={() => navigate('/')}>Cancel</CancelButton>

//           <CheckoutButton disabled={disabled}>Confirm Order</CheckoutButton>
//         </CheckoutContainer>
//       </div>
//     </form>
//   );
// };

// export default Checkout;

// const CheckoutContainer = styled.div`
//   display: grid;
//   width: 50%;
//   border: 5px solid black;
//   padding: 5px;
//   margin: auto;
//   margin-top: 100px;
//   text-align: center;
//   grid-template-rows: 0.25fr 1fr 0.25fr 0.25fr 0.25fr 0.5fr;
//   grid-template-columns: 0.1fr 1fr 0.1fr;
//   background-color: whitesmoke;
//   font-family: system-ui, -apple-system, sans-serif;
//   border-radius: 15px;
// `;
// const CheckoutTable = styled.div`
//   grid-column: 1 / span 3;
//   display: grid;
//   grid-template-rows: 0.25fr 0.25fr 0.25fr 0.25fr;
//   grid-template-columns: 0.1fr 0.1fr 0.1fr 0.1fr;
//   column-gap: 10px;
//   text-align: center;
//   padding-left: 10px;
// `;

// const CheckoutHeader = styled.div`
//   grid-column: 1 / span 3;
//   padding-top: 10px;
//   font-size: x-large;
//   font-family: 'Courier New', Courier, monospace;
//   grid-template-columns: 0.5fr;
// `;
// const CheckoutHeaderLine = styled.hr`
//   grid-column: 1 / span 3;
//   margin-bottom: 10px;
//   border: 1px solid gray;
//   font-family: 'Courier New', Courier, monospace;
// `;
// const CheckoutTitle = styled.h2`
//   grid-column: 1 / span 2;
//   padding-bottom: 10px;
//   text-align: center;
//   font-size: xx-large;
//   font-family: 'Courier New', Courier, monospace;
// `;

// const CheckoutAddress = styled.div`
//   display: grid;
//   grid-template-rows: 0.25fr 0.25fr 0.25fr 0.25fr;
//   grid-template-columns: 0.5fr;
//   grid-row-gap: 5px;
// `;

// const CheckoutFormLabel = styled.label`
//   justify-self: end;
// `;

// const CheckoutInput = styled.input`
//   border-width: 0.1px;
//   border: 0.1rem black solid;
//   border-radius: 5px;
//   grid-template-columns: 0.5fr;
//   ${(props) =>
//     props.invalid &&
//     `
//         border-color: red;
//         border-width: 3px;
//     `}
// `;

// const CheckoutButton = styled.button`
//   border-radius: 10px;
//   height: 40px;
//   color: black;
//   grid-column: 3;
//   border: 0.1rem black solid;
// `;

// const CancelButton = styled.button`
//   border-radius: 15px;
//   height: 40px;
//   grid-column: 1;
// `;
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
