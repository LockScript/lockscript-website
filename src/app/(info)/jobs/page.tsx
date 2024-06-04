/**
 * v0 by Vercel.
 * @see https://v0.dev/t/U2jQnV14CMM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Footer from "@/components/ui/footer";

export default function Page() {
  const jobs = [
    {
      title: "Software Engineer",
      description: "Coming soon",
      link: "#",
    },
    {
      title: "Product Manager",
      description: "Coming soon",
      link: "#",
    },
    {
      title: "Marketing Specialist",
      description: "Coming soon",
      link: "#",
    },
    {
      title: "Customer Support Specialist",
      description: "Coming soon",
      link: "#",
    },
    {
      title: "Data Analyst",
      description: "Coming soon",
      link: "#",
    },
    {
      title: "Sales Representative",
      description: "Coming soon",
      link: "#",
    },
  ];
  return (
    <div className="bg-black min-h-screen">
      <div className="flex justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold py-10 mt-[10rem]">
          Open Positions
        </h1>
      </div>

      <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
        We&apos;re always looking for talented individuals to join our
        mission-driven company. Check out our open positions below.
      </p>

      <section
        id="jobs"
        className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center"
      >
        <div className="container px-4 md:px-6 text-center">
          <div className="grid gap-6 pt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
            {jobs.map((job, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{job.title}</CardTitle>
                  <CardDescription>{job.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center">
                    <Link
                      href="#"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      prefetch={false}
                    >
                      Coming Soon
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
