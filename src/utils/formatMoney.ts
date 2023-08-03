export function FormatMoney(value: number){
    return value.toLocaleString("pt-Br", {
       minimumFractionDigits:2,
        
    });

}