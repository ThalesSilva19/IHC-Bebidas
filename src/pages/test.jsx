import React from 'react';

import Checkout from '../components/checkout';
import Login from '../components/login_card';
import Register from '../components/register_card';
import Cart from '../components/cart_card';

export default function Test() {
  return (
    <>
        <Checkout/>
        {/* print 10 new lines to separate components */}
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Login/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Register/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Cart/>
    </>
  )
}
