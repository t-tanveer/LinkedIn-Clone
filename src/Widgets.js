import React, { forwardRef } from 'react'
import "./Widgets.css"
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widget__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widget__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

        <h1>hello</h1>
            {newsArticle("King TT is Back?!", "Top React Programmer makes a shocking reappearance in the public sphere")}
            {newsArticle("Could B.C. face further COVID-related restrictions? Here's the top doctor's answer", "VANCOUVER -- British Columbia is currently under sweeping restrictions meant to slow the spread of the novel coronavirus, including strict rules surrounding socialization.")}
            {newsArticle("UWaterloo Ranks Among Top 10 Schools", "Latest reports from KingTT Polling suggest UWaterloo will dominate the world in engineering")}
            {newsArticle("New Chess GrandMaster Announced, you won't believe who it is", "Tayyaab Tanveer, a prodigy from Mississauga, Ontario has knocked off top contenders for the title of FIDE International's GrandMaster Position")}
        
        
        </div>
    )
}
export default Widgets
