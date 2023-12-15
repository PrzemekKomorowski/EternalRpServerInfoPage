import {Routes,Route} from "react-router-dom";
import {HomePage} from "../pages/homePage/HomePage";
import {Navbar} from "../components/navbar/Navbar";
import {PostList} from "../components/postlist/PostList";
import {ElementContainer} from "../components/ElementContainer";
import {ContactUs} from "../components/contactUs/ContactUs";
export const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={
                <ElementContainer/>
            }>
                <Route path="/" element={
                    <HomePage/>
                }>
                </Route>
                <Route path="/post" element={
                    <PostList/>
                }>
                </Route>
                <Route path="/contact" element={
                    <ContactUs/>
                }>
                </Route>
            </Route>
        </Routes>
    )
}