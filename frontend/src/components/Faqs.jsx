import React from "react";

const Faqs = () => {
  return (
    <div>
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl text-center">
            Frequently Asked Questions
          </h2>

          <div className="flow-root mt-12 sm:mt-16">
            <div className="divide-y divide-gray-200 -my-9">
              <div className="py-9">
                <p className="text-xl font-semibold text-black">
                  How to create an account?
                </p>
                <p className="mt-3 text-base text-gray-600">
                  Creating an account is simple. Click on the "Sign Up" button,
                  fill in your details, and confirm your email address to get
                  started.
                </p>
              </div>

              <div className="py-9">
                <p className="text-xl font-semibold text-black">
                  What payment method do you support?
                </p>
                <p className="mt-3 text-base text-gray-600">
                  We support multiple payment methods, including credit/debit
                  cards, UPI, net banking, and popular digital wallets like
                  PayPal and Google Pay.
                </p>
              </div>

              <div className="py-9">
                <p className="text-xl font-semibold text-black">
                  How do you provide support?
                </p>
                <p className="mt-3 text-base text-gray-600">
                  We offer 24/7 customer support via email, live chat, and
                  phone. For further assistance, reach out to us at{" "}
                  <a
                    href="#"
                    title=""
                    className="text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
                  >
                    support@celebration.com.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faqs;
