import React from "react";
import '../css/register.css'

export default function Register() {
    return (
        <div className="mv_main">

            <div className="section1_the_introtab">
                <div className="column1_options">
                    <img src="./assets/Menu.svg" alt="" />
                </div>
                <div className="column2_logo">
                    <img src="./assets/DALLY.svg" alt="" />
                </div>
                <div className="column3_search_cart_container">
                    <img src="./assets/Search.svg" alt="" />
                    <img src="./assets/shoppingbag.svg" alt="" />
                </div>
            </div>

            <div className="cart_label_container">
                <span className="cart_label">Registration</span>
            </div>


            <div className="section10_registration_content_container">
                <div className="registration_details_container">
                    <span className="registration_section_title">Identification Details</span>

                    <div className="registration_detail_input_container">
                        <input type="text" placeholder="First name" />
                    </div>

                    <div className="registration_detail_input_container">
                        <input type="text" placeholder="Last name" />
                    </div>
                </div>




                <div className="registration_details_container">
                    <span className="registration_section_title">Contact Details</span>

                    <div className="registration_detail_input_container">
                        <input type="text" placeholder="Email" />
                    </div>

                    <div className="registration_detail_input_container">
                        <input type="text" placeholder="Phone" />
                    </div>
                </div>


                <div className="registration_details_container">
                    <span className="registration_section_title">Default shipping method</span>

                    <select className="registration_detail_select_input_container" name="" id="">
                        <option value="">Pickup Station</option>
                        <option value="">Door to door delivery</option>
                    </select>

                    <button className="registration_section_button">Select pickup Station</button>

                    <div className="registration_pickupstation_details">
                        <span className="pickup_station_title">Iris Watson</span>
                        <span className='pickup_station_description'>606-3727 Ullamcorper. Street
                            Roseville NH 11523
                        </span>
                        <span className="pickup_station_description">0713-8616</span>
                        <a href="">View</a>
                    </div>

                </div>


                <div className="registration_details_container">
                    <span className="registration_section_title">Default Payment method</span>

                    <select className="registration_detail_select_input_container" name="" id="">
                        <option value="">M-PESA</option>
                        <option value="">VISA</option>
                    </select>

                    <div className="registration_detail_input_container">
                        <input type="text" placeholder="M-PESA Phone Number" />
                    </div>
                </div>

            </div>

            <div className="section8_add_to_cart_button">
                <div className="add_to_cart_button">
                    <img src="./assets/Plus.svg" alt="" />
                    <span>Register</span>
                </div>
            </div>

            <div className="section5_footer">
                <div className="social_media">
                    <img src="./assets/IG.svg" alt="" />
                    <img src="./assets/x.svg" alt="" />
                    <img src="./assets/youtube.svg" alt="" />
                </div>

                <div className="contact_details">
                    <p>+91 12345 67890</p>
                    <p>Apple view,Limuru Road</p>
                    <p>support@gmail.com</p>
                </div>
            </div>
        </div>
    )
}