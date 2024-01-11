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

export const skillsConfig = {
  skillList: [
    {
      title: {
        text: "Technology",
        emoji: "👷‍♂️",
      },
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
      title: {
        text: "Design",
        emoji: "🎨",
      },
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
  ],
};
