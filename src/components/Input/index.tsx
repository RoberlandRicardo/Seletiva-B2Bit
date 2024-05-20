
import { InputProps } from './model';

const Input = ({labelText, className, labelProps, labelRegular ="", ...rest}: InputProps) => {
    return (
        <div className="
            flex
            flex-col
            gap-[9px]
            w-full
        ">
            <div>
                <label className="
                    text-[18px]
                " {...labelProps}>
                    {labelRegular}
                </label>
                <label className="
                    font-bold
                    text-[18px]
                " {...labelProps} >{labelText}</label>
            </div>
            <input className={` 
                px-[18px]
                pt-[18px]
                pb-[20.25px]
                text-[15px]
                placeholder-gray6
                rounded-[9px] 
                bg-white3
                ${className}
            `}  {...rest} />
        </div>
    )
}

export default Input;