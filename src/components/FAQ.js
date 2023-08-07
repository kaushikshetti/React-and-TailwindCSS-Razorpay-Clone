import React from "react";

function FAQ() {
  return (
    <div>
      <section class="bg-gray-100 py-16">
        <div class="container mx-auto">
          <h2 class="text-2xl font-semibold text-gray-800 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div class="max-w-md mx-auto">
            <div class="accordion">
              <div class="accordion-item">
                <button class="accordion-header">
                  How do I create an account?
                </button>
                <div class="accordion-content">
                  <p>
                    Creating an account is easy! Just visit our website and
                    click on the "Sign Up" button. Follow the instructions to
                    set up your account.
                  </p>
                </div>
              </div>

              <div class="accordion-item">
                <button class="accordion-header">
                  How can I contact customer support?
                </button>
                <div class="accordion-content">
                  <p>
                    You can reach our customer support team via email, phone, or
                    our online chat. We're available 24/7 to assist you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
