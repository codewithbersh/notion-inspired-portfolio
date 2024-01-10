"use client";

import { Heading } from "@/components/ui/heading";
import { FaReact } from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiCanva,
  SiDjango,
  SiFigma,
  SiPrisma,
  SiPython,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const SKILLS = [
  {
    title: "Technology",
    icon: "👷‍♂️",
    skills: [
      {
        label: "React",
        icon: FaReact,
      },
      {
        label: "NextJS",
        icon: TbBrandNextjs,
      },
      {
        label: "TypeScript",
        icon: SiTypescript,
      },
      {
        label: "Tailwind",
        icon: SiTailwindcss,
      },
      {
        label: "Python",
        icon: SiPython,
      },
      {
        label: "Django",
        icon: SiDjango,
      },
      {
        label: "Prisma",
        icon: SiPrisma,
      },
      {
        label: "Vercel",
        icon: SiVercel,
      },
    ],
  },
  {
    title: "Design",
    icon: "🎨",
    skills: [
      {
        label: "Figma",
        icon: SiFigma,
      },
      {
        label: "Photoshop",
        icon: SiAdobephotoshop,
      },
      {
        label: "Canva",
        icon: SiCanva,
      },
    ],
  },
];

export const Skills = () => {
  const tabHeadings = SKILLS.map((skill) => skill.title);

  return (
    <div className="space-y-6">
      <Heading>Skills</Heading>
      <div>
        <Tabs defaultValue="Technology">
          <TabsList>
            {tabHeadings.map((heading) => {
              const tab = SKILLS.find((skill) => skill.title === heading);
              return (
                <TabsTrigger value={heading} key={heading} className="">
                  <Button size="sm" variant="ghost">
                    <span className="mr-2">{tab?.icon}</span>
                    {tab?.title}
                  </Button>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {tabHeadings.map((heading) => {
            const tab = SKILLS.find((skill) => skill.title === heading);
            return (
              <TabsContent
                value={heading}
                className="grid gap-4 sm:grid-cols-2"
                key={heading}
              >
                {tab?.skills.map(({ icon: Icon, label }) => (
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
