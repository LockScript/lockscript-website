import { FC } from "react";
import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/ui/mdx";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Verified } from "lucide-react";
import ShareButtons from "@/components/ui/share-buttons";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getDocFromParams(slug: string) {
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) notFound();

  return doc;
}

const Page: FC<PageProps> = async ({ params }: PageProps) => {
  const doc = await getDocFromParams(params.slug);
  const tags = doc.tags.trim().split(", ");

  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center p-8">
      <div className="text-center max-w-4xl w-full mt-20">
        <h1 className="font-extrabold text-5xl mb-2 bg-gradient-to-r from-sky-500 via-purple-400 to-purple-600 text-transparent bg-clip-text p-2 rounded">
          {doc.title}
        </h1>
        <div className="flex flex-col sm:flex-row sm:justify-between items-center text-gray-400 text-sm mb-4">
          <div className="flex flex-col sm:flex-row items-center mb-2 sm:mb-0">
            <span className="mr-2 flex items-center">
              by {doc.publisher}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Verified className="ml-2 text-sky-400" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-neutral-900 border-none border-0 text-white">
                    <p>Verified Owner</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </span>
            <span className="hidden sm:inline mx-2">|</span>
            <span className="mr-2">{doc.uploadedDate}</span>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-start mt-2 sm:mt-0">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-600 text-xs px-2 py-1 rounded-full mr-2 mb-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <img
          src={doc.featuredImage}
          alt="Featured"
          className="rounded-lg shadow-md mb-8"
        />
        <Mdx code={doc.body.code} />

        <ShareButtons />
      </div>
    </div>
  );
};

export default Page;
