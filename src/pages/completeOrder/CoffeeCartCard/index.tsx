import { Quantityinput } from "../../../components/Quantityinput";
import { RegularText } from "../../../components/Typography";
import { CartItem } from "../../../context/CartContext";
import { useCart } from "../../../hook/useCart";
import { FormatMoney } from "../../../utils/formatMoney";
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";
import { Trash } from "phosphor-react";

interface CoffeeCartCardProps{
    coffee: CartItem;
}


export function CoffeCartCard ({coffee}: CoffeeCartCardProps){
    const {changeCartItemQuantity, removeCartItem} = useCart();

    function handleIncrease() {
        changeCartItemQuantity(coffee.id, "increase");
    }
    function handleDecrease() {
        changeCartItemQuantity(coffee.id, "decrease");
    }

    function handleRemove() {
        removeCartItem(coffee.id);
    }

    const coffeeTotal = coffee.price * coffee.quantity;
    
    const formattedPrice = FormatMoney(coffeeTotal);

    return(
        <CoffeeCartCardContainer>
            <div>
                <img src={`/coffes/${coffee.photo}`} />
                <div>
                    <RegularText color="subtitle">{coffee.name}</RegularText>
                    <ActionsContainer>
                    <Quantityinput
                        onIncrease={handleIncrease}
                        OnDecrease={handleDecrease}
                        quantity={coffee.quantity}
                        size="small"
                    />
                    <RemoveButton onClick={handleRemove}>
                        <Trash size={16}/>
                        Remover
                    </RemoveButton>
                    </ActionsContainer>
                </div>
            </div>
            <p>R$ {formattedPrice}</p>
        </CoffeeCartCardContainer>
    )
}