import React from "react";
import Files from '../Reusablefile/Files';
import {title, minititle, subtitle,inputone,btn,para,heading,name,data} from "./Buydata.js"
const Buy = ({
}) => {
    return (
        <div>
           <Files 
           title={title}
           minititle={minititle}
           subtitle={subtitle}
           inputone={inputone}
           btn={btn}
           para={para}
           heading={heading}
           name={name}
           features={data}
           />
        </div>
    );
}
export default Buy;
