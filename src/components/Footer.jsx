import React from 'react';
import "./Footer.css";
import FooterCol from "./footer_col"; // Correctly import the component

function Footer() {
    const FooterElements = [
        {
            header: "Product",
            links: ["Overview", "Feature", "Solutions", "Tutorials", "Pricing", "Releases"],
        },
        {
            header: "Company",
            links: ["About Us", "Careers", "Press", "News", "Media Kit", "Contact"],
        },
        {
            header: "Resources",
            links: ["Blog", "News Letter", "Events", "Help Center", "Tutorials", "Support"],
        },
        {
            header: "Use Cases",
            links: ["Startups", "Enterprise", "Government", "Saas Center", "Marketplaces", "ECommerce"],
        },
        {
            header: "Social",
            links: ["Twitter", "Linkedin", "Facebook", "GitHub", "AngelList", "Dribble"],
        },
        {
            header: "Legal",
            links: ["Terms", "Privacy", "Cookies", "Licenses", "Settings", "Contact"],
        },
    ];

    return (
        <footer>
            <div className="footer-container">
                {FooterElements.map((data, index) => (
                    <FooterCol key={index} data={data} />
                ))}
            </div>
            <div className='copyright'>
                <h6>Untitled UI</h6>
                <p>&#169; 2077 Untitled UI. All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
