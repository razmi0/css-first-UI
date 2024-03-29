import { forwardRef } from "react";

type BackgroundType =
  | "Charcoal Smudge"
  | "Mathematics"
  | "Dots"
  | "Snow"
  | "Dust"
  | "Speckles"
  | "Grunge"
  | "Squares"
  | "Lines"
  | "Stars"
  | "Math"
  | "Wood"
  | "Cotton"
  | "Mosaic"
  | "Cubes"
  | "Paper Fibers"
  | "Denim"
  | "Paper"
  | "Pinstripe"
  | "Diag";
interface BackgroundProps {
  className?: string;
  type: BackgroundType;
}

const Background = forwardRef<HTMLImageElement, BackgroundProps>(({ className, type, ...rest }, ref) => {
  return (
    <div className="bg-black">
      <img
        ref={ref}
        aria-hidden="true"
        src={`./${type}.png`}
        alt=""
        className={`m-auto absolute inset-[1px] w-full h-full pointer-events-none object-cover ${className}`}
        {...rest}
      />
    </div>
  );
});

export default Background;
