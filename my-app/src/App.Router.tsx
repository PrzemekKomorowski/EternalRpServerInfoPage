import {Routes,Route} from "react-router-dom";
import {HomePage} from "./HomePage";
export const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={
                <HomePage/>
            }></Route>
        </Routes>
    )
}