import { products } from "@/constants";
import { Separator } from "./separator";

const ProductsSection = () => {
  return (
    <div className="relative mt-12 min-h-[600px] bg-black py-8 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl mt-8 lg:mt-16 tracking-wide text-white font-extrabold">
          <span className="bg-gradient-to-r from-sky-500 via-purple-400 to-purple-600 text-transparent bg-clip-text">
            Products
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center mt-8 lg:mt-16 gap-4 sm:gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4"
          >
            <a
              href={product.href}
              className="block bg-neutral-800 hover:bg-neutral-900 rounded-xl p-4 transition duration-300 ease-in-out"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 p-2 sm:h-12 sm:w-12 sm:p-3 bg-neutral-900 text-sky-500 flex justify-center items-center rounded-full">
                  {product.icon}
                </div>
                <div className="ml-3 sm:ml-4">
                  <h5 className="text-lg sm:text-xl text-white font-semibold">
                    {product.text}
                  </h5>
                  <p className="text-sm sm:text-md text-neutral-500 mt-1 sm:mt-2">
                    {product.description}
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      <Separator className="bg-gray-800 mt-12 sm:mt-16" />
    </div>
  );
};

export default ProductsSection;
