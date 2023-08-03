import { RegularText } from "../Typography";
import { InputStyleContainer, InputStyled, InputWraper, RightText } from "./styles";
import {forwardRef, InputHTMLAttributes} from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement> &{

    error?: string;
    rightText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({error,className, rightText,...props}, ref)=>{
    return(
        <InputWraper className={className}>
           <InputStyleContainer hasError={!!error}>
            <InputStyled {...props} ref={ref} />
                    {rightText && <RightText>{rightText}</RightText>}
            </InputStyleContainer>
            {error && (
                <RegularText size="s">{error}</RegularText>
            )}
        </InputWraper>
    ) 
})