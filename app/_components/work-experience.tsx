import { Heading } from "@/components/ui/heading";

const WORK_EXPERIENCE = [
  {
    company: "Tech Solutions",
    from: "2019",
    to: "Present",
    position: "Senior Frontend Developer",
    description:
      "Leading the frontend team at TechSolutions Inc., I oversee the migration of legacy systems to modern JavaScript frameworks, ensuring improved performance and maintaining high standards of code quality.",
  },
  {
    company: "Digital Dynamics",
    from: "2016",
    to: "2018",
    position: "Frontend Engineer",
    description:
      "In my role at Digital Dynamics, I was responsible for designing and implementing responsive web interfaces, collaborating seamlessly with UX/UI designers, and upholding rigorous coding standards for consistency across projects.",
  },
  {
    company: "Code Crafters",
    from: "2014",
    to: "2016",
    position: "Web Developer",
    description:
      "As a Web Developer at CodeCrafters LLC, I played a key role in developing and maintaining web applications, ensuring effective collaboration with cross-functional teams, and providing valuable technical support during client meetings.",
  },
  {
    company: "Byte Builders",
    from: "2013",
    to: "2014",
    position: "Junior Frontend Developer",
    description:
      "As a Web Developer at CodeCrafters LLC, I played a key role in developing and maintaining web applications, ensuring effective collaboration with cross-functional teams, and providing valuable technical support during client meetings.",
  },
];

export const WorkExperience = () => {
  return (
    <div className="space-y-6">
      <Heading>Work Experience</Heading>
      <div className="flex flex-col gap-6">
        {WORK_EXPERIENCE.map((work) => (
          <div className="space-y-4" key={work.company}>
            <div>
              <div className="flex items-center justify-between gap-4">
                <h1 className="font-bold">{work.company}</h1>
                <div className="shrink-0 text-muted-foreground">
                  {work.from} — {work.to}
                </div>
              </div>
              <div>{work.position}</div>
            </div>
            <p className="font-mono leading-loose text-muted-foreground">
              {work.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
