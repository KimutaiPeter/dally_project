import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Nav_bar(props){
    const navigate = useNavigate()
    function nav(url) {
        navigate(url);
    }

    return (
        <div className="section1_the_introtab">
                    <div className="column1_options">
                        <img src="assets/Menu.svg" alt="" onClick={(e) => { props.set_popup('account_menue') }} />
                    </div>
                    <div className="column2_logo">
                        <img src="./assets/DALLY.svg" alt="" onClick={e=>{nav('/')}} />
                    </div>
                    <div className="column3_search_cart_container">
                        <img src="./assets/Search.svg" alt="" />
                        <img src="./assets/shoppingbag.svg" alt="" onClick={e => { nav('/cart') }} />
                    </div>
                </div>
    )
}
