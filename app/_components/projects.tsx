"use client";

import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Project } from "./project";

export type TPRoject = {
  websiteLink?: string;
  githubLink?: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies?: string[];
};

const PROJECTS = [
  {
    title: {
      text: "Selected",
      emoji: "🤯",
    },
    projects: [
      {
        websiteLink: "/",
        githubLink: "/",
        title: "📕 Kanban",
        description:
          "A curated e-commerce experience, seamlessly connecting consumers with a diverse range of unique products.",
        imageUrl: "/kanban.png",
        technologies: ["NextJS", "Django", "Tailwind"],
      },

      {
        websiteLink: "/",
        githubLink: "/",
        title: "📳 Feedback App",
        description:
          "A curated e-commerce experience, seamlessly connecting consumers with a diverse range of unique products.",
        imageUrl: "/feedback-app.png",
        technologies: ["NextJS", "Django", "Tailwind"],
      },
      {
        websiteLink: "/",
        githubLink: "/",
        title: "🔔 Audiophile",
        description:
          "A curated e-commerce experience, seamlessly connecting consumers with a diverse range of unique products.",
        imageUrl: "/audiophile.png",
        technologies: ["NextJS", "Django", "Tailwind"],
      },
    ] as TPRoject[],
  },
  {
    title: {
      text: "Archived",
      emoji: "🥺",
    },
    projects: [
      {
        websiteLink: "/",
        githubLink: "/",
        title: "💯 Quiz App",
        description:
          "A curated e-commerce experience, seamlessly connecting consumers with a diverse range of unique products.",
        imageUrl: "/quiz-app.jpeg",
        technologies: ["NextJS", "Django", "Tailwind"],
      },
    ] as TPRoject[],
  },
];

export const Projects = () => {
  const groupTitles = PROJECTS.map((group) => group.title);
  return (
    <div className="space-y-6">
      <Heading>Projects</Heading>
      <div>
        <Tabs defaultValue={groupTitles[0].text}>
          <TabsList>
            {groupTitles.map((group) => (
              <TabsTrigger value={group.text} key={group.text} className="">
                <div
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                  )}
                >
                  <span className="mr-2">{group.emoji}</span>
                  {group.text}
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {groupTitles.map((contentGroupTitle) => {
            const group = PROJECTS.find(
              (group) => group.title.text === contentGroupTitle.text,
            );

            return (
              <TabsContent
                value={group?.title.text || ""}
                className="grid gap-4 sm:grid-cols-2"
                key={group?.title.text}
              >
                {group?.projects?.map((project) => (
                  <Project project={project} key={project.title} />
                ))}
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
};
