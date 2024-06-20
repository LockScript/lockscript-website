import Footer from '@/components/ui/footer';

const Page = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="flex justify-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold py-10 mt-32">
          Governance
        </h1>
      </div>
      <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-24 py-10">
        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-6 border-b-2 border-gray-700 pb-2">About Us</h2>
          <p className="text-lg mb-4">
            We are a small, dedicated team of two individuals committed to ensuring transparency, accountability, and efficiency in our operations.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-6 border-b-2 border-gray-700 pb-2">Our Team</h2>
          <p className="text-lg mb-4">
            <strong>cvs0</strong>: Developer, Customer Service, and Quality Assurance Advisor.
          </p>
          <p className="text-lg mb-4">
            <strong>5skn</strong>: Graphic Designer, Customer Service, and Quality Assurance Advisor.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-6 border-b-2 border-gray-700 pb-2">Our Mission</h2>
          <p className="text-lg mb-4">
            Our mission is to provide the highest quality security / privacy solutions while maintaining integrity and transparency in all that we do.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-6 border-b-2 border-gray-700 pb-2">Contact Us</h2>
          <p className="text-lg mb-4">
            If you have any questions or need more information, please contact us:
          </p>
          <p className="text-lg text-center"><a href="mailto:admin@lockscript.dev" className="text-blue-400">admin@lockscript.dev</a></p>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
