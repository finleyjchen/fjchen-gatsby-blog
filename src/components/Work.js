import React from 'react'
import { FiMapPin } from 'react-icons/fi'
import { IoMdHourglass } from 'react-icons/io'
const Work = () => (
    <div>

        <div className="post">
            <h3><a href="https://colonymedia.us" className="post-link">
                Colony Media
        </a></h3>
            <p className="text-muted">
                <FiMapPin /> San Luis Obispo, CA
            </p>
            <p className="text-muted">
                <IoMdHourglass />May 2018 – Present
</p>
            <p>
                Completing WordPress website work contracts, maintenance and server management for 10+ websites.</p>
        </div>
        <div className="post">
            <h3><a href="https://yourchristmasstore.com" className="post-link">
                Canterbury Gardens & Gifts
        </a></h3>
            <p className="text-muted">
                <FiMapPin /> San Diego, CA
        </p>
            <p className="text-muted">
                <IoMdHourglass />April 2016 – Present
        </p>
            <p>
                Creating a new WP/WooCommerce website with 2000+ products, managing eCommerce database entries and batch product uploads, doing SEO work, and managing orders, shipments, and invoices.
        </p>
        </div>
        <div className="post">
            <h3><span className="post-link">
                Freelance web developer
        </span></h3>
            <p className="text-muted">
                <FiMapPin /> Remote
        </p>
            <p className="text-muted">
                <IoMdHourglass />January 2017 – Present
        </p>
            <p>
                Creating pure HTML/CSS/JS websites, WordPress websites (vanilla WordPress and Genesis Framework websites), custom child theme development, and custom WordPress plugin development. Also doing SEO work to increase websites’ online web presence.
            </p>
        </div>


    </div>
)

export default Work