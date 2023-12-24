import React from "react";


import '../../../css/popup-login.css'

export default function Login_account_menue(props) {
    return (
        <div className="popup_content_container2">
            <div className="back_button_container" onClick={e=>{props.set_current_content('main');console.log('going to main')}}>
                <img src="./assets/Back_Arrow.svg" alt="" />
                <span>Back</span>
            </div>

            <div className="cart_label_container">
                <span className="cart_label">LOGIN</span>
            </div>

            <span>Email or password missmatch</span>

            <div className="login_input_container">
                <div className="registration_detail_input_container">
                    <input type="text" placeholder="Email" />
                </div>

                <div className="registration_detail_input_container">
                    <input type="password" placeholder="Password" />
                </div>

                <div className="popup_login_button" >
                    <span>LOGIN</span>
                </div>

                <div>
                    <span>Forgot Password?</span>
                    <span>Register</span>
                </div>
            </div>

            <hr />

            <div className="login_input_container">
                <div className="popup_login_button_google">
                    <img src="./assets/gooogle.svg" alt="" />
                    <span>Continue with Google</span>
                </div>
            </div>


        </div>
    )
}