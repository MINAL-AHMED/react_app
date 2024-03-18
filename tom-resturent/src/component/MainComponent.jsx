import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Body from "./body/Body";

function MainComponent(){
    return(
        <div>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

export default MainComponent;