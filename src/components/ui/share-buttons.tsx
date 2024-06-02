"use client"

import React, { useState, useEffect } from "react";

const ShareButtons: React.FC = () => {
  const [articleUrl, setArticleUrl] = useState("");
  const [articleTitle, setArticleTitle] = useState("");

  useEffect(() => {
    setArticleUrl(encodeURIComponent(window.location.href));
    setArticleTitle(encodeURIComponent(document.title));
  }, []);

  const handleShareClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Share this article</h2>
      <div className="flex space-x-4 justify-center">
        <button
          onClick={() =>
            handleShareClick(
              `https://www.facebook.com/sharer/sharer.php?u=${articleUrl}`
            )
          }
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Facebook
        </button>
        <button
          onClick={() =>
            handleShareClick(
              `https://twitter.com/intent/tweet?url=${articleUrl}&text=${articleTitle}`
            )
          }
          className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded"
        >
          Twitter
        </button>
        <button
          onClick={() =>
            handleShareClick(
              `https://pinterest.com/pin/create/button/?url=${articleUrl}&description=${articleTitle}`
            )
          }
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
        >
          Pinterest
        </button>
      </div>
    </div>
  );
};

export default ShareButtons;
