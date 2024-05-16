import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import DonationForm from './DonationForm';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const DonationButton = ({ className }) => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      handleCloseForm();
    }
  };

  useEffect(() => {
    if (showForm) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showForm]);

  return (
    <div className={className}>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
        Buy us a coffee
      </button>
      {showForm && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          onClick={handleCloseForm}>
          <div className="bg-white p-6 rounded-lg" onClick={(e) => e.stopPropagation()}>
            <Elements stripe={stripePromise}>
              <DonationForm handleCloseForm={handleCloseForm} />
            </Elements>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonationButton;
