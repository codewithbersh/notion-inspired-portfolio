import Image from "next/image";
import Link from "next/link";

import { Mail, Phone } from "lucide-react";

import { aboutConfig } from "@/config/about";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";

export const About = () => {
  return (
    <div className="relative flex flex-col gap-10">
      <div className="absolute left-0 top-0 aspect-square w-[124px] -translate-y-[62px] overflow-hidden rounded-md">
        <Image
          alt="User avatar"
          fill
          className="object-cover"
          src="/avatar.jpg"
          sizes="100vw"
          priority
        />
      </div>

      <div className="flex h-[124px] items-end sm:h-[62px] sm:items-center">
        <div className="flex w-fit gap-2 text-muted-foreground sm:ml-auto">
          <Button size="icon" variant="outline" asChild>
            <Link href={`mailto:${aboutConfig.email}`}>
              <Mail className="h-4 w-4" />
            </Link>
          </Button>

          <Button size="icon" variant="outline" asChild>
            <Link href={`tel:${aboutConfig.tel}`}>
              <Phone className="h-4 w-4" />
            </Link>
          </Button>

          {aboutConfig.social.map(({ url, icon: Icon, name }) => (
            <Button key={name} size="icon" variant="outline" asChild>
              <Link href={url} target="_blank">
                <Icon className="h-4 w-4" />
              </Link>
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <Heading className=" text-2xl sm:text-[40px]">
          {aboutConfig.name}
        </Heading>
        <p className=" font-mono font-medium leading-loose text-muted-foreground">
          {aboutConfig.description}
        </p>

        <Link
          passHref
          href="https://www.google.com/maps?q=berlin+germany&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMgcIARAuGIAEMgYIAhBFGDkyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyDAgGEAAYFBiHAhiABDINCAcQLhjHARjRAxiABDITCAgQLhivARjHARiABBiYBRiZBTIHCAkQABiABKgCALACAA&um=1&ie=UTF-8"
          target="_blank"
          className="w-fit"
        >
          📍{" "}
          <Button
            variant="link"
            className="px-0 font-mono text-muted-foreground"
          >
            Berlin, Germany
          </Button>
        </Link>
      </div>
    </div>
  );
};
