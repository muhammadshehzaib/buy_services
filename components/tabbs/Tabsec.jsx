import React from "react";
import File from '../Reusablefile/File';
import { title, minititle, subtitle ,pricingData,features} from './tabsdata';

export default function tabsecs (){
    return(
        <div>
        <File 
        title={title}
        minititle={minititle}
        subtitle={subtitle}
      
       pricingData={pricingData}
       features={features}
        />
        </div>
    )
}