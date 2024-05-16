// DonationForm.js
import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const DonationForm = ({ handleCloseForm }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      handleCloseForm(); // Close the form on successful payment
    }
  };

  return (
    <div className="donation-form">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 w-96">
        <div className="mb-4">
          <CardElement className="border p-4 rounded" />
        </div>
        {paymentError && <div className="text-red-500 mb-4">{paymentError}</div>}
        <button
          type="submit"
          disabled={!stripe}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">
          Donate $5
        </button>
      </form>
    </div>
  );
};

export default DonationForm;
