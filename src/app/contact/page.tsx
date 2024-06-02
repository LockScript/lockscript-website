"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { sendMessageToDiscordWebhook } from "@/lib/discord";
import { RedirectToSignIn, SignedOut } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import { useState } from "react";
import { useQuery } from "react-query";

const fetchUser = async () => {
  const res = await fetch("/api/user");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

const Contact = () => {
  const { data: user, isLoading, isError } = useQuery<User>("user", fetchUser);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessageToDiscordWebhook(message, name, user?.imageUrl || '', email);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 rounded shadow z-20"
      >
        <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-sky-500 via-purple-400 to-purple-600 text-transparent bg-clip-text">
          Contact Us
        </h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <Button type="submit" className="w-full">
            Send
          </Button>
        </div>
      </form>
      <BackgroundBeams />
    </div>
  );
};

export default Contact;
