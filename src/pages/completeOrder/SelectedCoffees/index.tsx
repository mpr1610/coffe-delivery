import { TitleText } from "../../../components/Typography";
import { useCart } from "../../../hook/useCart";
import { CoffeCardContainer } from "../../Home/components/CoffeeCard/style";
import { CoffeCartCard } from "../CoffeeCartCard";

import { ConfirmationSection } from "./ConfirmationSection";
import { DatailContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees(){
    const { CartItems } = useCart();

    return(
        <SelectedCoffeesContainer>
            <TitleText  size="xs" color="subtitle">
                Cafés Selecionados
            </TitleText>
            <DatailContainer>
                
                 {CartItems.map((item)=>(
                    <CoffeCartCard key={item.id} coffee={item} />
                 ))}
                <ConfirmationSection/>
            </DatailContainer>
        </SelectedCoffeesContainer>
    )
}