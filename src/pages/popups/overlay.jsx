import React from "react";

export default function Overlay( props){
    return (
        <div id="overlay" onClick={e=>{props.close_popup() }}></div>
    )
}