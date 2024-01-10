import { cn } from "@/lib/utils";
import { IBM_Plex_Serif } from "next/font/google";

const font = IBM_Plex_Serif({
  weight: "700",
  subsets: ["latin"],
});

interface HeadingProps {
  className?: string;
  children?: React.ReactNode;
}

export const Heading = ({ className, children }: HeadingProps) => {
  return (
    <h1 className={cn("text-2xl", font.className, className)}>{children}</h1>
  );
};
