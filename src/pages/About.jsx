import React from 'react';
import InnerPageHead from '../component/InnerPageHead';

const About = () => {
  return (
    <>
    <InnerPageHead heading="About Us" />
    <div className="container py-5">

      <p className="lead mb-4">
        Welcome to <strong>FreshNest</strong> — your trusted destination for fresh and high-quality <strong>fish, meat, fruits, and vegetables</strong>.
      </p>

      <p>
        At FreshNest, we are committed to delivering farm-fresh groceries straight to your doorstep. Whether you're looking for premium cuts of meat, freshly caught fish, or hand-picked seasonal produce, we ensure top-notch quality and hygiene in everything we deliver.
      </p>

      <hr className="my-5" />

      <h3 className="mb-3">What We Offer</h3>
      <ul className="list-group mb-4">
        <li className="list-group-item">🐟 Fresh and locally sourced fish</li>
        <li className="list-group-item">🥩 Tender, clean, and premium meat</li>
        <li className="list-group-item">🍎 Hand-picked seasonal fruits</li>
        <li className="list-group-item">🥬 Organic and pesticide-free vegetables</li>
      </ul>

      <h3 className="mb-3">Why Choose Us?</h3>
      <ul className="list-group mb-4">
        <li className="list-group-item">✅ 100% Freshness Guarantee</li>
        <li className="list-group-item">✅ Reliable and fast home delivery</li>
        <li className="list-group-item">✅ Easy and secure online ordering</li>
        <li className="list-group-item">✅ Customer-first support team</li>
      </ul>

      <p className="mt-4">
        We are proud to serve thousands of happy customers and families who trust FreshNest for their daily needs. Thank you for being part of our journey!
      </p>

      <p className="mt-3 fw-bold">FreshNest – Freshness you can trust.</p>
    </div>
    </>
  );
};

export default About;
