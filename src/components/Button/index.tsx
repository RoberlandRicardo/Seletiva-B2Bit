import { ButtonProps } from "./model";

const Button = ({text, className, onClick, ...rest}: ButtonProps) => {
    return (
        <button className={` 
            w-[200px]
            h-[54px]
            font-bold
            text-[18px]
            text-background
            rounded-[9px]
            bg-primary
            ${className}
        `} 
        onClick={(e) => {
            e.preventDefault();
            onClick && onClick(e);
        }}
        {...rest} >
            {text}
        </button>
    )
}

export default Button;