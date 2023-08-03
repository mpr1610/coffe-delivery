import { Coffee } from "phosphor-react";
import { TitleText } from "../../../../components/Typography";
import { CoffeCard } from "../CoffeeCard";
import { CoffeList, OurCoffeesContainer } from "./style";
import { coffees } from "../../../../data/coffees";

export function OurCoffees(){
    return(
        <OurCoffeesContainer className="container">
            <TitleText size="l" color="subtitle">
                Nossos Cafés
            </TitleText>

            <CoffeList>
            {coffees.map((coffee)=> (
                <CoffeCard key={coffee.id} coffee={coffee} />
            ))}
            </CoffeList>
        </OurCoffeesContainer>
    )

}