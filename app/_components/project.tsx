import Image from "next/image";
import Link from "next/link";

import { CgWebsite } from "react-icons/cg";
import { SiGithub } from "react-icons/si";

import { TPRoject } from "@/config/project";

import { Button } from "@/components/ui/button";

interface ProjectProps {
  project: TPRoject;
}

export const Project = ({ project }: ProjectProps) => {
  return (
    <div className="group relative flex cursor-pointer flex-col overflow-hidden rounded-[4px] bg-neutral-100 dark:bg-neutral-800">
      <div className="absolute left-0 top-0 z-10 flex h-full w-full flex-col bg-white/30 p-4 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:backdrop-blur-sm dark:bg-black/30">
        <div className="mt-auto flex justify-between">
          {project.websiteLink && (
            <Button className="rounded-full" size="sm" asChild>
              <Link href={project.websiteLink}>
                <CgWebsite className="mr-2 h-4 w-4" />
                Website
              </Link>
            </Button>
          )}
          {project.githubLink && (
            <Button className="rounded-full" size="sm" asChild>
              <Link href="/">
                <SiGithub className="mr-2 h-4 w-4" />
                Github
              </Link>
            </Button>
          )}
        </div>
      </div>
      <div className="relative aspect-[16/6] overflow-hidden">
        <Image
          alt="Project Image"
          fill
          className="object-cover object-top transition-all delay-100 duration-300 ease-in-out group-hover:scale-105"
          src={project.imageUrl}
          sizes="100vw"
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <h1 className="font-bold">{project.title}</h1>
        <p className="text-muted-foreground">{project.description}</p>
        <div className="flex flex-wrap gap-4">
          {project.technologies?.map((tech) => (
            <div
              key={tech}
              className="rounded-[4px] bg-neutral-600 px-2 py-1 font-mono font-medium leading-none text-primary-foreground dark:text-primary"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
