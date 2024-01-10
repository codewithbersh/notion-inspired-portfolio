import Image from "next/image";

import { bannerConfig } from "@/config/banner";

export const Banner = () => {
  return (
    <div className="relative h-[30vh]">
      <Image
        alt="header-background"
        fill
        className="object-cover"
        src={bannerConfig.imageUrl}
        sizes="100vw"
      />
    </div>
  );
};
