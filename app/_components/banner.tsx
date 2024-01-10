import Image from "next/image";

export const Banner = () => {
  return (
    <div className="relative h-[30vh]">
      <Image
        alt="header-background"
        fill
        className="object-cover"
        src="/refargotohp-unsplash.jpg"
        sizes="100vw"
      />
    </div>
  );
};
