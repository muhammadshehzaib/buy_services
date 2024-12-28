import React from "react";
import File from '../Reusablefile/File';
import { title, minititle, subtitle,tabsData,features} from './tabsdata';

export default function tabsecs (){
    return(
        <div>
        <File 
        title={title}
        minititle={minititle}
        subtitle={subtitle}
        tabsData={tabsData}
       features={features}
        />
        </div>
    )
}