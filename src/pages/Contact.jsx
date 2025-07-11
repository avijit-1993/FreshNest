import React from 'react';

import InnerPageHead from '../component/InnerPageHead';

const Contact = () => {
  return (

    <>

    <InnerPageHead heading="Conatct US" />
    
    
    <div className="container py-5">
      
      

      <p className="text-center mb-5 lead">
        Have questions, feedback, or need support? We’re here to help!
      </p>

      <div className="row">
        {/* Contact Form */}
        

        {/* Contact Info */}
        <div className="col-md-5">
          <h4 className="mb-3">Get in Touch</h4>
          <p><strong>📍 Address:</strong> 123 Fresh Street, Green City, India</p>
          <p><strong>📞 Phone:</strong> +91 98765 43210</p>
          <p><strong>📧 Email:</strong> support@freshnest.com</p>

          <h5 className="mt-4">Working Hours</h5>
          <p>Monday - Saturday: 8:00 AM – 8:00 PM</p>
          <p>Sunday: 9:00 AM – 5:00 PM</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
