
import { Intro } from "./components/Introducao"
import { IntroContent } from "./components/Introducao/styles"
import { OurCoffees } from "./components/OurCoffees"
import { HomeContainer } from "./styles"


export function HomePage(){
    
    return(
       <HomeContainer>
            <IntroContent className="container">
                <Intro />
                
            </IntroContent>
            <OurCoffees/>
       </HomeContainer>
    )
}