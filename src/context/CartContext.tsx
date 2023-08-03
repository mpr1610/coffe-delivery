import { ReactNode, createContext, useEffect, useState } from "react";
import { Coffee } from "../pages/Home/components/CoffeeCard";
import { produce } from "immer";



export interface CartItem extends Coffee {
    quantity:number;

}

interface CartContextType {
    CartItems: CartItem[];
    cartQuantity: number;
    cartItemsTotal:number;
    addCoffeeToCart: (Coffee: CartItem) => void;
    changeCartItemQuantity:(cartItemId: number,type: "increase" | "decrease") => void;
    removeCartItem: (CartItemId: number ) => void;
    cleanCart:() => void;
}

interface CartContextProviderProps{
    children: ReactNode;
}


const COFFE_ITEMS_STORAGE_KEY = "coffeeDelivery:cartItems";

export const CartContext = createContext({} as CartContextType);


export function CartContextProvider({ children}: CartContextProviderProps){
    const [CartItems, setCartItems] = useState<CartItem[]>(()=>{
        const storedCartItems = localStorage.getItem(COFFE_ITEMS_STORAGE_KEY);
        if(storedCartItems){
            return JSON.parse(storedCartItems);
        }
        return [];
    });

    const cartQuantity = CartItems.length;

    const cartItemsTotal = CartItems.reduce((total, CartItem)=>{
        return total + CartItem.price * CartItem.quantity;
    }, 0);

    function addCoffeeToCart(coffee: CartItem){
        const coffeAlreadyExistInCart = CartItems.findIndex(
            (cartItem)=> cartItem.id == coffee.id  
        );

        const newCart = produce(CartItems, (draft)=> {
            if(coffeAlreadyExistInCart < 0){
                draft.push(coffee);

            }else{
                draft[coffeAlreadyExistInCart].quantity += coffee.quantity;
            }
        });

        setCartItems(newCart);
    }

    function changeCartItemQuantity(
        cartItemId: number, 
        type: 'increase' | 'decrease'
    ){
        const newCart = produce(CartItems, (draft)=>{
            const coffeeExistsInCart = CartItems.findIndex(
                (cartItem)=> cartItem.id === cartItemId
            );

            if(coffeeExistsInCart >= 0){
                const item = draft[coffeeExistsInCart];
                draft[coffeeExistsInCart].quantity =
                 type === "increase" ? item.quantity + 1 : item.quantity -1;
            }
        });

        setCartItems(newCart);
    }

    function removeCartItem(cartItemId: number){
        const newCart = produce(CartItems, (draft)=>{
            const coffeeExistsInCart = CartItems.findIndex(
                (cartItem)=> cartItem.id === cartItemId
            );
        
            if( coffeeExistsInCart >= 0){
                draft.splice(coffeeExistsInCart, 1);
            }
        });
        setCartItems(newCart);
    }


    function cleanCart(){
        setCartItems([]);
    }

    useEffect(()=>{
      localStorage.setItem(COFFE_ITEMS_STORAGE_KEY, JSON.stringify(CartItems));
    }, [CartItems])

    return (
        <CartContext.Provider 
            value={{
             CartItems,
             cartQuantity,
             addCoffeeToCart,
             changeCartItemQuantity,
             removeCartItem,
             cartItemsTotal,
             cleanCart,
            }}>
            {children}
        </CartContext.Provider>
    )
}