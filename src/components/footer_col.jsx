import "./footer_col.css"
import React from 'react';

function FooterCol({ data }) {
    return (
        <div className="footer-col">
            <h4>{data.header}</h4>
            <ul>
                {data.links.map((link, index) => (
                    <li key={index}>{link}</li>
                ))}
            </ul>
        </div>
    );
}

export default FooterCol;
