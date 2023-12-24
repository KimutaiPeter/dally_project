import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// css
import '../../../src/style.css'
//Components
import Account_menue from "../popups/accunt_menue/account_menue";

//Shared components
import Nav_bar from "../shared_components/nav_bar/nav_bar";

export default function Index() {
    const [popup,set_popup]= useState('none')

    const navigate = useNavigate()
    function nav(url) {
        navigate(url);
    }

    return (
        <>
            <div className="mv_main">

                <Nav_bar set_popup={set_popup}/>

                <div className="section2_filterstab">
                    <div className="color_filter_container">
                        <span>Color</span>
                        <img src="./assets/color.svg" alt="" />
                    </div>

                    <img src="./assets/Tags.svg" alt="" />

                    <img src="./assets/Filter.svg" alt="" />
                </div>


                <div className="section3_searchbox">
                    <div className="search_content_container">
                        <div className="search_input_container">
                            <input type="text" value="Dress" />
                        </div>
                        <div className="search_controlls_container">
                            <img src="./assets/Delete.svg" alt="" />
                            <img src="./assets/Search.svg" alt="" />
                        </div>
                    </div>
                </div>


                <div className="section4_shopitems">
                    <div className="items_container">

                        <div className="item_container">
                            <div className="item_image_container">
                                <img src="./assets/item_sample1.png" alt="" />
                            </div>
                            <div className="item_short_description_container">
                                <div className="description_content">
                                    <p className="item_name">lamerei</p>
                                    <p className="item_description">reversible angora cardigan</p>
                                </div>
                                <span className="item_price">Ksh 120</span>
                            </div>
                        </div>


                        <div className="item_container">
                            <div className="item_image_container">
                                <img src="./assets/item_sample1.png" alt="" />
                            </div>
                            <div className="item_short_description_container">
                                <div className="description_content" onClick={e=>{nav('/product')}}>
                                    <p className="item_name" >lamerei</p>
                                    <p className="item_description">reversible angora cardigan</p>
                                </div>
                                <span className="item_price">Ksh 120</span>
                            </div>
                        </div>

                        <div className="item_container">
                            <div className="item_image_container">
                                <img src="./assets/item_sample1.png" alt="" />
                            </div>
                            <div className="item_short_description_container">
                                <div className="description_content">
                                    <p className="item_name">lamerei</p>
                                    <p className="item_description">reversible angora cardigan</p>
                                </div>
                                <span className="item_price">Ksh 120</span>
                            </div>
                        </div>

                        <div className="item_container">
                            <div className="item_image_container">
                                <img src="./assets/item_sample1.png" alt="" />
                            </div>
                            <div className="item_short_description_container">
                                <div className="description_content">
                                    <p className="item_name">lamerei</p>
                                    <p className="item_description">reversible angora cardigan</p>
                                </div>
                                <span className="item_price">Ksh 120</span>
                            </div>
                        </div>

                    </div>
                    <div className="content_pagination">
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

            {((()=>{
                if(popup==='account_menue'){
                    return (<Account_menue close_popup={set_popup}/>)
                }
            })())}
        </>
    )
}