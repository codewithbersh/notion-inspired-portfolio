import Image from "next/image";
import Link from "next/link";

import { CgWebsite } from "react-icons/cg";
import { SiGithub } from "react-icons/si";

import { Button } from "@/components/ui/button";

import { TPRoject } from "./projects";

interface ProjectProps {
  project: TPRoject;
}

export const Project = ({ project }: ProjectProps) => {
  return (
    <div className="group relative flex cursor-pointer flex-col overflow-hidden rounded-[4px] bg-neutral-100">
      <div className="absolute left-0 top-0 z-10 flex h-full w-full flex-col bg-black/30 p-4 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
        <div className="mt-auto flex justify-between">
          {project.websiteLink && (
            <Button
              variant="secondary"
              className="rounded-full hover:bg-neutral-200"
              size="sm"
              asChild
            >
              <Link href={project.websiteLink}>
                <CgWebsite className="mr-2 h-4 w-4" />
                Website
              </Link>
            </Button>
          )}
          {project.githubLink && (
            <Button
              variant="secondary"
              className="w-fit rounded-full hover:bg-neutral-200"
              size="sm"
              asChild
            >
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
      </div>
    </div>
  );
};
