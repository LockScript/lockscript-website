"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CircleDotIcon, StarIcon } from "lucide-react"; // Import Lucide icons
import { useEffect, useState } from "react";

type RepoData = {
  name: string;
  description: string;
  html_url: string;
  open_issues_count: number;
  stargazers_count: number;
  language: string;
  updated_at: string;
};

type Issue = {
  title: string;
  html_url: string;
  created_at: string;
  state: string;
};

const Page = () => {
  const [repoData, setRepoData] = useState<RepoData | null>(null);

  useEffect(() => {
    // Function to fetch repository data from GitHub API
    const fetchRepoData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/LockScript/LockScript-Issues"
        );
        if (response.ok) {
          const data = await response.json();
          setRepoData(data);
        } else {
          throw new Error("Failed to fetch repository data");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchRepoData();
  }, []);

  const [recentIssues, setRecentIssues] = useState<Issue[]>([]);

  useEffect(() => {
    const fetchRecentIssues = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/LockScript/LockScript-Issues/issues?state=all&sort=created&direction=desc&per_page=3"
        );
        if (response.ok) {
          const data = await response.json();
          setRecentIssues(data);
        } else {
          throw new Error("Failed to fetch recent issues");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecentIssues();
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <h2 className="text-6xl font-bold pb-[3rem] text-center bg-gradient-to-r from-sky-500 via-purple-400 to-purple-600 text-transparent bg-clip-text pt-[10rem] ">
        Report a Bug
      </h2>
      <div className="container mx-auto max-w-4xl py-12 px-4 sm:px-6 lg:px-8 bg-black">
        {repoData && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="w-full">
              <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
                <div className="space-y-1">
                  <CardTitle>{repoData.name}</CardTitle>
                  <CardDescription className="pt-10">
                    {repoData.description}
                  </CardDescription>
                </div>
                <div className="flex items-center space-x-1 rounded-md bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50">
                  <a href={repoData.html_url}>
                    <Button variant="secondary" className="px-3 shadow-none">
                      <StarIcon className="mr-2 h-4 w-4" />
                      Star
                    </Button>
                  </a>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <CircleDotIcon className="mr-1 h-3 w-3 fill-gray-900 text-gray-900" />
                    {repoData.language ? repoData.language : "Markdown"}
                  </div>
                  <div className="flex items-center">
                    <StarIcon className="mr-1 h-3 w-3" />
                    {repoData.stargazers_count}
                  </div>
                  <div>{new Date(repoData.updated_at).toLocaleString()}</div>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardContent>
                <div className="space-y-4">
                  <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
                    <CardTitle>Recent Issues</CardTitle>
                  </CardHeader>
                  {recentIssues.map((issue, index) => (
                    <div key={index}>
                      <div className="flex items-center mb-2">
                        <CircleDotIcon
                          className={cn("h-3 w-3 mr-1", {
                            "text-green-400": issue.state === "open",
                            "text-gray-400": issue.state === "closed",
                            "text-blue-400": issue.state === "resolved",
                            "text-purple-500": issue.state === "completed",
                          })}
                        />{" "}
                        <a
                          href={issue.html_url}
                          className="text-blue-500 hover:underline"
                        >
                          {issue.title}
                        </a>
                      </div>
                      <div className="text-sm text-gray-500">
                        Created:{" "}
                        {new Date(issue.created_at).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
