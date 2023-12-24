import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import '../../css/popup.css'

//Componenets
import Overlay from "../overlay";
import Main_account_menue from "./components/main";
import Login_account_menue from "./components/login";


export default function Account_menue(props) {
    const navigate = useNavigate()
    function nav(url) {
        navigate(url);
    }

    useEffect((() => {
        console.log('Iv been rendered')
    }), [])

    const [current_content,set_current_content]=useState('main')

    function close_popup(){
        props.close_popup('none')
    }

    return (

        <>
            {<Overlay close_popup={close_popup} />}
            <div id="popup">
                {(()=>{
                    if(current_content === 'login'){
                        return (<Login_account_menue set_current_content={set_current_content} />)
                    }else{
                        return (<Main_account_menue set_current_content={set_current_content}/>)
                    }
                })()}
            </div>
        </>
    )
}