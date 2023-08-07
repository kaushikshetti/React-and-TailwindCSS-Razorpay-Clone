import React from "react";

function Features() {
  return (
    <div>
      <section class="bg-gray-100 py-16">
        <div class="container mx-auto">
          <h2 class="text-2xl font-semibold text-gray-800 text-center mb-8">
            Why Choose Razorpay?
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div class="bg-white p-6 shadow-md rounded-lg">
              <h3 class="text-xl font-semibold mb-2">Easy to Use</h3>
              <p class="text-gray-700">
                Our intuitive interface makes payments a breeze for everyone.
              </p>
            </div>

            <div class="bg-white p-6 shadow-md rounded-lg">
              <h3 class="text-xl font-semibold mb-2">Secure Transactions</h3>
              <p class="text-gray-700">
                Rest assured that your financial data is safe and protected.
              </p>
            </div>

            <div class="bg-white p-6 shadow-md rounded-lg">
              <h3 class="text-xl font-semibold mb-2">24/7 Support</h3>
              <p class="text-gray-700">
                Our dedicated support team is available around the clock.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
