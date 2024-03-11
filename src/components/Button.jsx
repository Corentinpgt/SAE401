import { cva } from "class-variance-authority";

// Base definition
const base = "text-white text-center mt-2"

const button = cva(base, {
  variants: {
    intent: {
      free: [
        "bg-green-700",
        "p-2",
        "rounded-md",
        "font-bold",
        "hover:bg-green-800",
      ],
      sub: [
        "bg-yellow-600",
        "p-2",
        "rounded-md",
        "font-bold",
        "hover:bg-yellow-700",
      ],
      rent: [
        "bg-red-500",
        "p-2",
        "rounded-md",
        "font-bold",
        "hover:bg-red-700",
      ],
      simple: [

      ],
    },
    border : {
      none: [""],
      solid: ["border-2", "border-white"]
    }
  }
});



export default function Button({ intent, border, className, ...rest }) {
  return <button {...rest} className={button({ intent, border, className })} />;
}
