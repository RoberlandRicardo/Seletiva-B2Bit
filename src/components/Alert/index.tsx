import { useEffect, useRef, useState } from "react";
import { AlertProps } from "./model";

const Alert = ({className, title, description, ...rest}: AlertProps) => {

    return (
        <div 
            className={`
                px-[14px]
                py-[8px]
                bg-red-regular
                rounded-[18px] 
                ${className}
            `}
            {...rest} >
            <span
                className="
                    text-white
                    font-bold
                    text-[14px]
                "
            >
                {title}
            </span>
            <p
                className="
                    text-white
                    text-[12px]
                    text-justify
                "
            >
                {description}
            </p>
        </div>
    )
}

export default Alert;