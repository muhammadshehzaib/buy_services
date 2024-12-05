import React from "react";
import File from '../Reusablefile/File';
import { title, minititle, subtitle,tabs,features } from './tabsdata';

export default function tabsecs (){
    return(
        <div>
        <File 
        title={title}
        minititle={minititle}
        subtitle={subtitle}
        tabs={tabs}
        features={features}
        />
        </div>
    )
}