"use client";

import { cn } from "@/lib/utils";
import { skillsConfig } from "@/config/skills";

import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Skills = () => {
  const groupTitles = skillsConfig.skillList.map((group) => group.title);

  return (
    <div className="space-y-6">
      <Heading>Skills</Heading>
      <div>
        <Tabs defaultValue="Technology">
          <TabsList>
            {groupTitles.map((group) => {
              return (
                <TabsTrigger value={group.text} key={group.text}>
                  <div
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "sm" }),
                    )}
                  >
                    <span className="mr-2">{group.emoji}</span>
                    {group.text}
                  </div>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {groupTitles.map((contentGroupTitle) => {
            const group = skillsConfig.skillList.find(
              (group) => group.title.text === contentGroupTitle.text,
            );
            return (
              <TabsContent
                value={group?.title.text || ""}
                className="grid gap-4 sm:grid-cols-2"
                key={group?.title.text}
              >
                {group?.skills.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex w-full items-center gap-4 rounded-[4px] border  bg-secondary p-[10px]"
                  >
                    <Icon className="h-5 w-5" />
                    <div className="font-medium">{label}</div>
                  </div>
                ))}
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
};
