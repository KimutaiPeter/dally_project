
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/checkout.css'
import Account_menue from "../popups/accunt_menue/account_menue"
//shared components
import Nav_bar from "../shared_components/nav_bar/nav_bar"

export default function Checkout() {
    const [popup, set_popup] = useState('none')
    const navigate = useNavigate()
    function nav(url) {
        navigate(url);
    }

    return (
        <>
            <div class="mv_main">

                <Nav_bar set_popup={set_popup} />

                <div class="section1_cart">
                    <div class="cart_label_container">
                        <span class="cart_label">CHECK OUT</span>
                    </div>


                    <div class="cart_items_container">

                        <div class="cart_item_container">
                            <div class="item_image_container">
                                <img src="./assets/item_sample1.png" alt="" />
                            </div>

                            <div class="item_description_container">
                                <div class="item_label_container">
                                    <span class="title">lamerei</span>
                                    <span class="item_description">Recycle Boucle Knit Cardigan Pink</span>
                                </div>

                                <div class="item_amount_controls">
                                    <img src="./assets/min_black.svg" alt="" />
                                    <span>1</span>
                                    <img src="./assets/plus_black2.svg" alt="" />
                                </div>

                                <div class="item_price">
                                    <span>KES 120</span>
                                </div>
                            </div>
                        </div>


                        <div class="cart_item_container">
                            <div class="item_image_container">
                                <img src="./assets/item_sample1.png" alt="" />
                            </div>

                            <div class="item_description_container">
                                <div class="item_label_container">
                                    <span class="title">lamerei</span>
                                    <span class="item_description">Recycle Boucle Knit Cardigan Pink</span>
                                </div>

                                <div class="item_amount_controls">
                                    <img src="./assets/min_black.svg" alt="" />
                                    <span>1</span>
                                    <img src="./assets/plus_black2.svg" alt="" />
                                </div>

                                <div class="item_price">
                                    <span>KES 120</span>
                                </div>
                            </div>
                        </div>

                        {/* <!-- <div class="cart_empty_notification">
        <h2>Cart is empty</h2>
        <span>Continue shopping</span>
    </div> --> */}

                    </div>
                </div>

                <div class="section3_additional_charges">
                    <div class="charge_item_container">
                        <div class="charge_item_label">
                            <img src="./assets/Door_to_Door_Delivery.svg" alt="" />
                            <span>Delivery</span>
                        </div>
                        <div class="charge_amount">
                            <span>Free</span>
                        </div>
                    </div>
                </div>


                <div class="section2_subtotals">
                    <div class="subtotal_content">
                        <span class="title">TOTALS</span>
                        <span class="item_price">KES 120</span>
                    </div>
                </div>


                <div class="section8_add_to_cart_button">
                    <div class="add_to_cart_button">
                        <img src="./assets/Plus.svg" alt="" />
                        <span>Request Mpesa STK</span>
                    </div>
                </div>


                <div class="section3_pay_with_paybill">
                    <span class="title">Pay via Mpesa paybill</span>
                    <ul>
                        <li>Enter PayBill Number 400222</li>
                        <li>Enter Account No: 123456#AWSTSDF</li>
                        <li>Enter amount: 120</li>
                        <li>Enter M-Pesa PIN and confirm the transaction.</li>
                    </ul>
                </div>


                <div class="section8_add_to_cart_button">
                    <div class="add_to_cart_button">
                        <img src="./assets/Plus.svg" alt="" />
                        <span>Confirm Payment</span>
                    </div>
                </div>


                <div class="section5_footer">
                    <div class="social_media">
                        <img src="./assets/IG.svg" alt="" />
                        <img src="./assets/x.svg" alt="" />
                        <img src="./assets/youtube.svg" alt="" />
                    </div>

                    <div class="contact_details">
                        <p>+91 12345 67890</p>
                        <p>Apple view,Limuru Road</p>
                        <p>support@gmail.com</p>
                    </div>
                </div>
            </div>
            {((() => {
                if (popup === 'account_menue') {
                    return (<Account_menue close_popup={set_popup} />)
                }
            })())}
        </>
    )
}