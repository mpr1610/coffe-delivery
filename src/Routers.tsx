import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { CompleteOrderPage } from "./pages/completeOrder";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { OrderConfirmedPage } from "./pages/OrderConfirmed";

export function Router(){
    return (
        <Routes>
            <Route 
            path="/" 
            element={<DefaultLayout />}>
                <Route 
                    path="/"
                    element={<HomePage />}
                />
                <Route 
                    path="/completeOrder"
                    element={<CompleteOrderPage />}
                />
                <Route
                    path="/OrderConfirmed" 
                    element={<OrderConfirmedPage/>}
                />

            </Route>
            
        </Routes>
    )
}