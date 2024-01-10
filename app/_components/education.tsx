import { educationConfig } from "@/config/education";

import { Heading } from "@/components/ui/heading";

export const Education = () => {
  return (
    <div className="space-y-6">
      <Heading>Education</Heading>
      <div className="flex flex-col gap-6">
        {educationConfig.educationList.map((education) => (
          <div key={education.institution}>
            <div className="flex items-center justify-between gap-4">
              <h1 className="font-bold">{education.institution}</h1>
              <div className="shrink-0 text-muted-foreground">
                {education.from} — {education.to}
              </div>
            </div>

            <p className="font-mono text-muted-foreground">
              {education.qualification}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
