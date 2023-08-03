import { SelectedCoffees } from "./SelectedCoffees";
import { CompleteOrderForm } from "./components/CompleteOrderForm/CompleteOrderForm";
import { CompleteOrderContainer } from "./styles";
import * as zod from  'zod';
import {zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider} from 'react-hook-form'
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hook/useCart";

enum PaymentMethods{
    credit="credit",
    debit="debit",
    money="money",
}

const confirmedOrderFormValidationSchema = zod.object({
    cep: zod.string().min(1, "Informe o CEP"),
    street: zod.string().min(1, "Informe o Rua"),
    number: zod.string().min(1, "Informe o Número"),
    complement: zod.string(),
    district: zod.string().min(1, "Informe o Bairro"),
    city: zod.string().min(1, "Informe a Cidade"),
    uf: zod.string().min(1, "Informe a UF"),
    paymentMethod: zod.nativeEnum(PaymentMethods, {
        errorMap:()=> {
            return{message: "Informe o método de pagamento"};
        }
    })
  });

export type OrderData = zod.infer<typeof confirmedOrderFormValidationSchema>;

type ConfirmOrderFormData = OrderData;

export function CompleteOrderPage(){
    const confirmeOrderForm = useForm<ConfirmOrderFormData>({
        resolver:zodResolver(confirmedOrderFormValidationSchema)
    });
     
    const {handleSubmit} = confirmeOrderForm;

    const navigate = useNavigate();
    const {cleanCart} = useCart();

    function handleConfirmedOrder(data: ConfirmOrderFormData){
       navigate("/orderConfirmed",{
        state: data,
       });
       cleanCart();
    }

    return(
        <FormProvider {...confirmeOrderForm}>
            <CompleteOrderContainer 
                className="container" 
                onSubmit={handleSubmit(handleConfirmedOrder)} 
            >
            <CompleteOrderForm />
            <SelectedCoffees />
            </CompleteOrderContainer>
        </FormProvider>
    )
}