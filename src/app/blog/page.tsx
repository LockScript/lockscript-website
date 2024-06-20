import { allDocs } from "contentlayer/generated";
import { ArrowRightIcon } from "lucide-react";

const Page = () => {
  const truncateString = (str: string | undefined, num: number) => {
    if (!str) return "...";

    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  };

  return (
    <div className="bg-black min-h-screen">
      <h1 className="md:text-7xl text-6xl lg:text-9xl font-bold text-center text-white relative z-20 pt-40">
        Blog Posts
      </h1>
      {/* Main Content */}
      <main className="container mx-auto pt-[10rem]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {allDocs.map((doc, index) => (
            <a
              key={index}
              href={doc.slug}
              className="block bg-gray-800 text-white rounded-lg shadow-md overflow-hidden h-96 flex flex-col transition-transform transform hover:scale-105"
            >
              {doc.featuredImage && (
                <img
                  src={doc.featuredImage}
                  alt={doc.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-2">{doc.title}</h2>
                <p className="text-gray-300 mb-4">
                  {truncateString(doc.description, 100)}
                </p>
                <div className="mt-auto text-blue-400 inline-flex items-center">
                  Read more
                  <ArrowRightIcon className="ml-2" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Page;
