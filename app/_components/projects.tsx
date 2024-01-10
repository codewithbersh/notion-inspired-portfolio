"use client";

import { cn } from "@/lib/utils";
import { projectConfig } from "@/config/project";

import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Project } from "./project";

export const Projects = () => {
  const groupTitles = projectConfig.projectList.map((group) => group.title);
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
            const group = projectConfig.projectList.find(
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
