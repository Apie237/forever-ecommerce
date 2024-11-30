import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/shopContext';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Verify = () => {
  const { token, navigate, backendUrl, setCartItems } = useContext(ShopContext);
  const [searchParams] = useSearchParams();

  const success = searchParams.get('success');
  const orderId = searchParams.get('orderId');

  const verifyPayment = async () => {
    try {
      if (!token) {
        console.log('No token available');
        return null;
      }

      console.log('Verifying payment with:', { success, orderId, token });

      const response = await axios.post(
        `${backendUrl}/api/order/verifystripe`,
        { success, orderId },
        { headers: { token } }
      );

      console.log('Verify Payment Response:', response.data);

      if (response.data.success) {
        console.log('Payment verified successfully');
        // Clear cart only on successful payment
        setCartItems({});
        console.log('Cart cleared');
        navigate('/orders');
      } else {
        console.log('Payment verification failed');
        toast.error('Payment verification failed');
        navigate('/cart');
      }
    } catch (error) {
      console.log('Error verifying payment:', error);
      toast.error(error.message);
      navigate('/cart');
    }
  };

  useEffect(() => {
    verifyPayment();
  }, [token]);

  return <div>Verifying payment, please wait...</div>;
};

export default Verify;


