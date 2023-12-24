import React from "react";
import { useNavigate } from "react-router-dom";

export default function Main_account_menue(props) {
    const navigate = useNavigate()
    function nav(url) {
        navigate(url);
    }
    return (
        <div className="popup_content_container1">
            <div className="menue_item_container">
                <img src="./assets/u_user-circle.svg" alt="" />
                <span>Profile</span>
            </div>

            <div className="menue_item_container">
                <img src="./assets/u_box.svg" alt="" />
                <span>Orders</span>
            </div>

            <div className="menue_item_container">
                <img src="./assets/Voucher.svg" alt="" />
                <span>Coupons</span>
            </div>


            <div className="menue_item_container" onClick={(e) => { nav('/register') }}>
                <img src="./assets/u_clipboard-notes.svg" alt="" />
                <span>Register</span>
            </div>

            <div className="menue_item_container" onClick={e=>{props.set_current_content('login');console.log('going to login')}}>
                <img src="./assets/u_sign-in-alt.svg" alt="" />
                <span>Sign In</span>
            </div>

            <div className="menue_item_container">
                <img src="./assets/u_sign-out-alt.svg" alt="" />
                <span>Logout</span>
            </div>
        </div>
    )
}