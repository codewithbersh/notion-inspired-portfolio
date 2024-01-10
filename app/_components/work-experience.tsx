import { workExperienceConfig } from "@/config/work-experience";

import { Heading } from "@/components/ui/heading";

export const WorkExperience = () => {
  return (
    <div className="space-y-6">
      <Heading>Work Experience</Heading>
      <div className="flex flex-col gap-6">
        {workExperienceConfig.workExperienceList.map((work) => (
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
