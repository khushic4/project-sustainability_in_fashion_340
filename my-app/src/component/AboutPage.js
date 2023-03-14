import React from 'react';
import { Link, useLocation } from 'react-router-dom';


export function AboutPage(props) {

    return (
        <main>
            <div className="container">
                <h1>Mission Statement</h1>
                <p>Our mission is to combat fast fashion and show consumers that there are
                    more ethical clothing options for them. In contrast to fast fashion,
                    sustainable fashion is a term that is used to describe fashion that is
                    both ethically made and environmentally friendly. This means that the
                    clothing garments that are created reduces the impact on the environment
                    and is mindful of the workers who produce these clothing garments. We aim
                    to offer multiple store options at different price points, to accomodate
                    all of our users price preferences.</p>
            </div>
            <div className="container">
                <h1>Facts About Consumerism</h1>
                <p>With an increase in social media usage over the last years, trends come
                    and go faster than ever. Social media influencers encourage their viewers
                    to participate in these trends by endorsing brands, granting the brands
                    more popularity while also benefiting the influencer through portions of
                    the profits. This results in mass consumerism; people want to keep up with
                    trends but don't want to spend a lot on new pieces of clothing that will
                    ultimately go out of style in a couple weeks. Consumerism can be ready
                    about{" "}
                    <Link to="https://www.cambridge.org/core/books/abs/america-in-the-world/us-mass-consumerism-in-transnational-perspective/C87883D798FBA090A8FB47F0C8E473D1"
                        target="_blank"> {" "} here {" "}
                    </Link> and {" "}
                    <Link to="https://www.bbc.com/future/article/20210120-how-the-world-became-consumerist"
                        target="_blank"> {" "} here.
                    </Link>
                    There are a number of issues with fast fashion, such as water pollution,
                    waste management, greenhouse gas emissions, and more. People can also be
                    unaware that they are actually consumers of fast fashion, or they don't
                    know what alternate options there are out there and don't know where to
                    start. Our team wants to create a shopping website that promotes and
                    encourages partaking in sustainable fashion.
                </p>
            </div>
        </main>
    );
}