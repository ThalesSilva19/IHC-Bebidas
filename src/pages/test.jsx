import React from 'react';

import Checkout from '../components/checkout';
import Login from '../components/login';
import Register from '../components/register';

export default function Test() {
  return (
    <>
        <Checkout/>
        {/* print 10 new lines to separate components */}
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Login/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Register/>
    </>
  )
}
