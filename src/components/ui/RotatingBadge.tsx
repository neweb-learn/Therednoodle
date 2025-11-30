import { motion } from "motion/react";

interface RotatingBadgeProps {
  text: string;
  className?: string;
}

export function RotatingBadge({ text, className = "" }: RotatingBadgeProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-current flex items-center justify-center bg-[#FFF8E1] text-black"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full absolute top-0 left-0">
          <defs>
            <path
              id="circlePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text className="text-[10px] uppercase font-bold tracking-widest" fill="currentColor">
            <textPath xlinkHref="#circlePath" startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>
        <div className="w-2 h-2 bg-current rounded-full" />
      </motion.div>
    </div>
  );
}
