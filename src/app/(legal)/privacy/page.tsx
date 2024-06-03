import Footer from "@/components/ui/footer";
import React from "react";

const Page = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="flex justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold py-10 mt-[10rem]">
          Privacy Policy
        </h1>
      </div>
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 py-10">
        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-6 border-b-2 border-gray-700 pb-2">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            We collect various types of information in connection with the
            services we provide, including:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
            <li>
              Personal identification information (Name, email address, phone
              number, etc.)
            </li>
            <li>Usage data (pages visited, time spent on the site, etc.)</li>
            <li>Cookies and IP Addresses (not precise location)</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-6 border-b-2 border-gray-700 pb-2">
            2. How We Use Your Information
          </h2>
          <p className="mb-4">
            We use the information we collect in the following ways:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
            <li>To provide, operate, and maintain our website</li>
            <li>To improve, personalize, and expand our website</li>
            <li>To understand and analyze how you use our website</li>
            <li>
              To develop new products, services, features, and functionality
            </li>
            <li>
              To communicate with you, either directly or through one of our
              partners, including for customer service, to provide you with
              updates and other information relating to the website, and for
              marketing and promotional purposes
            </li>
            <li>To process your transactions</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-6 border-b-2 border-gray-700 pb-2">
            3. Sharing Your Information
          </h2>
          <p className="mb-4">
            We may share your information with third parties in the following
            situations:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
            <li>With service providers to perform services on our behalf</li>
            <li>
              For legal purposes, such as complying with laws and regulations or
              responding to lawful requests and legal process
            </li>
            <li>With your consent or at your direction</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-6 border-b-2 border-gray-700 pb-2">
            4. Your Rights
          </h2>
          <p className="mb-4">
            You have certain rights regarding your personal information,
            including:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
            <li>
              The right to access – You have the right to request copies of your
              personal data.
            </li>
            <li>
              The right to rectification – You have the right to request that we
              correct any information you believe is inaccurate or complete
              information you believe is incomplete.
            </li>
            <li>
              The right to erasure – You have the right to request that we erase
              your personal data, under certain conditions.
            </li>
            <li>
              The right to restrict processing – You have the right to request
              that we restrict the processing of your personal data, under
              certain conditions.
            </li>
            <li>
              The right to object to processing – You have the right to object
              to our processing of your personal data, under certain conditions.
            </li>
            <li>
              The right to data portability – You have the right to request that
              we transfer the data that we have collected to another
              organization, or directly to you, under certain conditions.
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-6 border-b-2 border-gray-700 pb-2">
            5. Contact Us
          </h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <p className="text-lg text-center">
            <a href="mailto:admin@lockscript.dev" className="text-blue-400">
              admin@lockscript.dev
            </a>
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
