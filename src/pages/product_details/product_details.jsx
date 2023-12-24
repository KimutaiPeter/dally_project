import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//Shared components
import Nav_bar from "../shared_components/nav_bar/nav_bar";
import Account_menue from "../popups/accunt_menue/account_menue";

export default function Product_details() {
    const [popup, set_popup] = useState('none')
    const navigate = useNavigate()
    function nav(url) {
        navigate(url);
    }

    return (
        <>
            <div class="mv_main">

                <Nav_bar set_popup={set_popup} />

                <div class="section6_item_images">
                    <div class="images_content_container">
                        <img src="./assets/item_sample2.png" alt="" />
                        <span>1 of 2</span>
                    </div>
                </div>


                <div class="section7_product_titlen_variants">
                    <div class="title_price_container">
                        <span class="title">MOHAN</span>
                        <span class="item_description">
                            Recycle Boucle Knit Cardigan Pink
                        </span>
                        <span class="item_price">KES 120</span>
                    </div>
                </div>


                <div class="section8_add_to_cart_button">
                    <div class="add_to_cart_button">
                        <img src="./assets/Plus.svg" alt="" />
                        <span>ADD TO CART</span>
                    </div>
                </div>


                <div class="section9_item_description">
                    <div>
                        <p>
                            We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.
                        </p>
                    </div>
                </div>


                <div class="section4_shopitems">
                    <span class="suggestion">You may also like</span>
                    <div class="items_container">

                        <div class="item_container">
                            <div class="item_image_container">
                                <img src="./assets/item_sample1.png" alt="" />
                            </div>
                            <div class="item_short_description_container">
                                <div class="description_content">
                                    <p class="item_name">lamerei</p>
                                    <p class="item_description">reversible angora cardigan</p>
                                </div>
                                <span class="item_price">Ksh 120</span>
                            </div>
                        </div>


                        <div class="item_container">
                            <div class="item_image_container">
                                <img src="./assets/item_sample1.png" alt="" />
                            </div>
                            <div class="item_short_description_container">
                                <div class="description_content">
                                    <p class="item_name">lamerei</p>
                                    <p class="item_description">reversible angora cardigan</p>
                                </div>
                                <span class="item_price">Ksh 120</span>
                            </div>
                        </div>

                        <div class="item_container">
                            <div class="item_image_container">
                                <img src="./assets/item_sample1.png" alt="" />
                            </div>
                            <div class="item_short_description_container">
                                <div class="description_content">
                                    <p class="item_name">lamerei</p>
                                    <p class="item_description">reversible angora cardigan</p>
                                </div>
                                <span class="item_price">Ksh 120</span>
                            </div>
                        </div>

                        <div class="item_container">
                            <div class="item_image_container">
                                <img src="./assets/item_sample1.png" alt="" />
                            </div>
                            <div class="item_short_description_container">
                                <div class="description_content">
                                    <p class="item_name">lamerei</p>
                                    <p class="item_description">reversible angora cardigan</p>
                                </div>
                                <span class="item_price">Ksh 120</span>
                            </div>
                        </div>

                    </div>
                    <div class="content_pagination">
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