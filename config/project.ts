export type TPRoject = {
  websiteLink?: string;
  githubLink?: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies?: string[];
};

export const projectConfig = {
  projectList: [
    {
      title: {
        text: "Selected",
        emoji: "🚨",
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
        emoji: "⚠️",
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
  ],
};
