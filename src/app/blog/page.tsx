import ShareButtons from "@/components/ui/share-buttons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Verified } from "lucide-react";
import React from "react";

const post = {
  title: "Are wifi cameras secure?",
  author: "cvs0",
  publicationDate: "May 28, 2024",
  updatedDate: "June 15, 2024",
  tags: ["Security", "Technology", "Privacy"],
  featuredImage: "https://via.placeholder.com/1200x600",
  authorBio: {
    name: "cvs0",
    bio: "cvs0 is a technology enthusiast with a keen interest in cybersecurity and home automation. With years of experience in the tech industry, they share insights on the latest trends and best practices.",
    image: "https://via.placeholder.com/150",
  },
  content: [
    {
      type: "text",
      content:
        "As a homeowner concerned about security, I invested in a wifi camera to monitor my residence remotely during my absence. With its advanced features and convenience, I felt reassured about the safety of my home while I was away.",
    },
    {
      type: "text",
      content:
        "However, recent discussions about the vulnerability of wifi cameras to hacking have left me feeling uneasy. Reports suggest that these devices may not be as secure as initially believed. This revelation has sparked questions about the safety of my own wifi camera and its potential susceptibility to unauthorized access.",
    },
    {
      type: "text",
      content:
        "Now, I find myself grappling with doubts and uncertainties. Is my wifi camera truly at risk of being hacked? If so, what measures can I take to enhance its security and safeguard my privacy? These concerns weigh heavily on my mind as I strive to protect my home and loved ones from potential threats.",
    },
    {
      type: "image",
      src: "https://via.placeholder.com/800x400",
      alt: "Wifi Camera",
      width: 800,
      height: 400,
    },
    {
      type: "text",
      content:
        "In my quest for answers, I've explored various strategies to bolster the security of my wifi camera. From enabling two-factor authentication to regularly updating firmware, I've taken proactive steps to mitigate potential risks.",
    },
    {
      type: "text",
      content:
        "Despite these efforts, lingering doubts persist. Are these measures truly effective in safeguarding my privacy? Is there more I can do to fortify my home security system against cyber threats?",
    },
    {
      type: "text",
      content:
        "As I navigate this ongoing journey to secure my wifi camera and protect my home, I remain vigilant and proactive. With each new development and security update, I strive to stay informed and implement best practices to ensure the safety and privacy of my household.",
    },
    {
      type: "text",
      content:
        "In conclusion, the question of whether wifi cameras are secure remains a complex and evolving issue. While advancements in technology offer convenience and peace of mind, they also introduce new challenges and vulnerabilities. As users, it is essential to stay informed, remain vigilant, and take proactive measures to safeguard our privacy and security in an increasingly interconnected world.",
    },
  ],
  relatedArticles: [
    { title: "How to Choose a Secure Wifi Camera", link: "#" },
    {
      title: "The Importance of Privacy Settings in Home Security Devices",
      link: "#",
    },
    { title: "Top Cybersecurity Threats for Smart Home Devices", link: "#" },
  ],
};

const Page = () => {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center p-8">
      <div className="text-center max-w-4xl w-full mt-20">
        <h1 className="font-extrabold text-5xl mb-2 bg-gradient-to-r from-sky-500 via-purple-400 to-purple-600 text-transparent bg-clip-text p-2 rounded">
          {post.title}
        </h1>
        <div className="flex flex-col sm:flex-row sm:justify-between items-center text-gray-400 text-sm mb-4">
          <div className="flex flex-col sm:flex-row items-center mb-2 sm:mb-0">
            <span className="mr-2 flex items-center">
              by {post.author}
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
            <span className="mr-2">{post.publicationDate}</span>
            <span className="hidden sm:inline mx-2">|</span>
            <span>Updated: {post.updatedDate}</span>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-start mt-2 sm:mt-0">
            {post.tags.map((tag, index) => (
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
          src={post.featuredImage}
          alt="Featured"
          className="rounded-lg shadow-md mb-8"
        />
        {post.content.map((item, index) => (
          <React.Fragment key={index}>
            {item.type === "text" && (
              <p className="mb-6 max-w-2xl mx-auto text-lg leading-relaxed text-left">
                {item.content}
              </p>
            )}
            {item.type === "image" && (
              <img
                src={item.src}
                alt={item.alt}
                className="mt-8 rounded-lg shadow-md"
                width={item.width}
                height={item.height}
              />
            )}
          </React.Fragment>
        ))}
        <div className="mt-8 flex items-center flex-col sm:flex-row sm:items-start sm:space-x-4 bg-neutral-900 p-6 rounded-lg shadow-md">
          <img
            src={post.authorBio.image}
            alt="Author"
            className="w-24 h-24 rounded-full shadow-md mb-4 sm:mb-0"
          />
          <div className="text-left">
            <h3 className="text-2xl font-semibold text-white mb-2">
              {post.authorBio.name}
            </h3>
            <p className="text-gray-300">{post.authorBio.bio}</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
          <ul>
            {post.relatedArticles.map((article, index) => (
              <li key={index} className="mb-2">
                <a
                  href={article.link}
                  className="text-blue-400 hover:underline"
                >
                  {article.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <ShareButtons />

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Comments</h2>
          <div className="bg-neutral-900 p-4 rounded-lg">
            <p className="text-gray-400">Comments section coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
