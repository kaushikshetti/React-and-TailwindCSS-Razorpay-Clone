import React from "react";

function Hero() {
  return (
    <div>
      {
       <section class="bg-blue-900 text-white py-20">
        <div class="container mx-auto">
          <div class="text-center">
            <h2 class="text-4xl font-semibold mb-4">
              Simple Payments for Busy People
            </h2>
            <p class="text-lg">
              Make online payments and manage your finances effortlessly with
              Razorpay.
            </p>
            <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 mt-6 rounded-full font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </section> 
      }

      
    </div>
  );
}

export default Hero;
