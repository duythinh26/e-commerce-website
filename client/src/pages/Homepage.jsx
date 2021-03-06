import React from "react";
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import News from "../components/News";
import Footer from "../components/Footer";

const Homepage = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <News/>
            <Footer/>
        </div>
    )
}

export default Homepage;