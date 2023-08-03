import { useState } from "react";
import { Quantityinput } from "../../../../components/Quantityinput";
import { RegularText, TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hook/useCart";
import { FormatMoney } from "../../../../utils/formatMoney";
import { CardFooter, CoffeCardContainer, Description, Name, Tags, AddCartWrapper } from "./style";
import { ShoppingCart } from 'phosphor-react'


export interface Coffee {
    id: number;
    tags: string[];
    name: string;
    description: string;
    photo: string;
    price: number;

}


interface CoffeProps {
    coffee: Coffee;
}

export function CoffeCard({ coffee }: CoffeProps) {

    const [quantity, setQuantity] = useState(1);

    function handleIncrease(){
        setQuantity(state=> state + 1);
    }

    function handleDecrease(){
        setQuantity(state=> state - 1);
    }
    const { addCoffeeToCart } = useCart();

    function handleAddToCart() {
        const coffeeToAdd = {
            ...coffee, 
            quantity,
         };

        addCoffeeToCart(coffeeToAdd);
    }

    const formattedPrice = FormatMoney(coffee.price);

    return (
        <CoffeCardContainer>
            
            <img src={`/coffes/${coffee.photo}`} alt="" />
            <Tags>
                {coffee.tags.map(tag => (
                    <span key={`${coffee.id}${tag}`}>
                        {tag}
                    </span>
                ))}
            </Tags>
            <Name>
                {coffee.name}
            </Name>
            <Description>
                {coffee.description}
            </Description>

            <CardFooter>
                <div>
                    <RegularText size="s">R$</RegularText>
                    <TitleText size="m" color="text" as="strong">
                        {formattedPrice}
                    </TitleText>
                </div>

                <AddCartWrapper>
                    <Quantityinput 

                        onIncrease={handleIncrease}
                        OnDecrease={handleDecrease}
                        quantity={quantity}
                    />
                    <button onClick={handleAddToCart}>
                        <ShoppingCart size={22} weight="fill" />
                    </button>
                </AddCartWrapper>

            </CardFooter>
        </CoffeCardContainer>
    )

} 