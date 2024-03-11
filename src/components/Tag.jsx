import { cva } from "class-variance-authority";

const base = "text-white text-center p-1 font-bold absolute top-0 right-0"

const tag = cva(base, {
  variants: {
    intent: {
      free: [
        "bg-green-700",
        "w-32",
      ],
      sub: [
        "bg-yellow-600",
        "w-40",
      ],
      rent: [
        "bg-red-500",
        "w-32",
      ]
    },
  }
});



export default function Tag({ intent, text, className, ...rest }) {
    return (
    <div {...rest} className={tag({ intent, className })}>
        <p>{text}</p>
    </div>  
    ) 
}