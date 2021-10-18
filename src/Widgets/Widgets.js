import React from 'react'
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{ subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Linkedin News</h2>
                <InfoIcon />
            </div>

            {newsArticle("Fall, just take our wallets ", "- 4,380 readers")}
            {newsArticle("Netflix staff plan Chappelle walkout", "- 141,304 readers")}
            {newsArticle("How to quit and find a better job ", "- 23,587 readers")}

        </div>
    );
}

export default Widgets;
