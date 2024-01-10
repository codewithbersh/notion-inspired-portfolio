import Link from "next/link";
import { Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { LuGithub } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";

const CONTACT = {
  tel: "+97412344321",
  email: "hello@brucesalcedo.com",
  social: [
    {
      name: "Github",
      url: "https://github.com/codewithbersh",
      icon: LuGithub,
    },
    {
      name: "Linkedin",
      url: "https://github.com/codewithbersh",
      icon: Linkedin,
    },
    {
      name: "X",
      url: "https://x.com/codewithbersh",
      icon: BsTwitterX,
    },
  ],
};

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
        />
      </div>

      <div className="flex h-[62px] items-center">
        <div className="ml-auto flex w-fit gap-2 text-muted-foreground">
          <Button size="icon" variant="outline" asChild>
            <Link href={`mailto:${CONTACT.email}`}>
              <Mail className="h-4 w-4" />
            </Link>
          </Button>

          <Button size="icon" variant="outline" asChild>
            <Link href={`tel:${CONTACT.tel}`}>
              <Phone className="h-4 w-4" />
            </Link>
          </Button>

          {CONTACT.social.map(({ url, icon: Icon, name }) => (
            <Button key={name} size="icon" variant="outline" asChild>
              <Link href={url} target="_blank">
                <Icon className="h-4 w-4" />
              </Link>
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <Heading className=" text-[40px]">Jonathan Turner</Heading>
        <p className=" font-mono font-medium leading-loose text-muted-foreground">
          Experienced Senior Frontend Developer with over 6 years of proficiency
          in crafting seamless user interfaces. Specialized in modern JavaScript
          technologies and web design. Committed to excellence in code
          development and mentoring.
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
