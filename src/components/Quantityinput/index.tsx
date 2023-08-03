import { Minus, Plus } from "phosphor-react";
import { IconWrappper, QuantityInputContainer } from "./style";

interface  QuantityInputProps{
    size?: "medium" | "small";
    quantity: number,
    onIncrease: ()=> void;
    OnDecrease: ()=> void;
}

export function Quantityinput({ onIncrease, OnDecrease, quantity, size = 'medium'}: QuantityInputProps){
    return(
        <QuantityInputContainer size={size}>
            <IconWrappper  disabled={quantity <= 1} onClick={OnDecrease}>
                <Minus size={14} weight="fill"/>
            </IconWrappper>
            <input type="number" readOnly  value={quantity}/>
            <IconWrappper onClick={onIncrease}>
                <Plus size={14} weight="fill"/>
            </IconWrappper>
        </QuantityInputContainer>
    )
} 