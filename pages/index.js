import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {FaInstagram, FaTelegram, FaYoutube, FaDiscord, FaTwitter} from "react-icons/fa"
import {NextSeo} from "next-seo";

export default function Home() {
    return (
        <div className="bg-black text-white">
            <NextSeo
                title="DIGITVL"
                description="Hub for independent creators"
                openGraph={{
                    url: 'https://www.digitvl.com/',
                    title: 'DIGITVL',
                    description: 'Hub for independent creators',
                    site_name: 'DIGITVL',
                    type: 'website'
                }}
                additionalMetaTags={[
                    {
                        property: "twitter:image",
                        content: 'https://www.digitvl.com/images/landing_bg_img.png'
                    },
                    {
                        property: "twitter:image:src",
                        content: 'https://www.digitvl.com/images/landing_bg_img.png'
                    },
                    {
                        property: "og:image",
                        content: 'https://www.digitvl.com/images/landing_bg_img.png'
                    },
                    {
                        property: "og:image:width",
                        content: 800
                    },
                    {
                        property: "og:image:height",
                        content: 500
                    }
                ]}
                twitter={{
                    handle: '@digitvl',
                    site: '@digitvl',
                    cardType: 'summary_large_image',
                    image: 'https://www.digitvl.com/images/landing_bg_img.png'
                }}
            />
            {/*<Head>*/}
            {/*    <title>Create Next App</title>*/}
            {/*    <meta name="description" content="Generated by create next app"/>*/}
            {/*    <link rel="icon" href="/favicon.ico"/>*/}
            {/*</Head>*/}
            <div className="container height-100vh">
                {/*<div className="row mt-4" align="center">*/}
                {/*    <div className="col-md-3">*/}
                {/*        <b>Built on Algorand</b>*/}
                {/*    </div>*/}
                {/*    <div className="col-md-3">*/}
                {/*        <b>Token ID: 462629820</b>*/}
                {/*    </div>*/}
                {/*    <div className="col-md-3">*/}
                {/*        <b>Unit Name: DGL: 462629820</b>*/}
                {/*    </div>*/}
                {/*    <div className="col-md-3">*/}
                {/*        <b>Total Supply: 10,000,000</b>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="row mt-3" align="right">*/}
                {/*    <div className="col-md-12">*/}
                {/*        <div className="btn btn-bg-yellow">*/}
                {/*            <a href="https://digitvl.org/how-to-buy-dgl-token/" rel="noreferrer" target="_blank">Buy*/}
                {/*                $DGL</a>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="row" align="center">
                    <div className="col-md-12 col-sm-12">
                        <img
                            className="digitvl-main-logo-img"
                            src="https://digitvl.org/wp-content/uploads/2021/12/DIGITVL-LOGO-improved-150x150.png"
                            alt="digitvl logo"/>
                    </div>
                </div>
                <div className="row pt-2" align="center">
                    <div className="col-md-3">
                        <a href="https://app.digitvl.com/" rel="noreferrer" target="_blank"><b>Stream</b></a>
                    </div>
                    <div className="col-md-3">
                        <a href="https://digitvl.shop/" rel="noreferrer" target="_blank"><b>Shop</b></a>
                    </div>
                    <div className="col-md-3">
                        <a href="https://digitvl.org/white-paper/" rel="noreferrer" target="_blank"><b>White
                            Paper</b></a>
                    </div>
                    <div className="col-md-3">
                        <a href="https://digitvl.org/how-to-buy-dgl-token/" rel="noreferrer" target="_blank"><b>Buy
                            $DGL</b></a>
                    </div>
                </div>

                <div className="row pt-4" align="center">
                    <div className="col-md-8 col-sm-12 my-auto">
                        <div className="row" align="center">
                            <div className="col-md-12">
                                <span className="custom-text1">For Creators By Creators</span>
                            </div>
                        </div>
                        {/*<div className="row" align="center">*/}
                        {/*    <div className="col-md-12 col-sm-12">*/}
                        {/*        <img*/}
                        {/*            className="digitvl-text-logo-img"*/}
                        {/*            src="https://digitvl.org/wp-content/uploads/2021/12/Digitvl-Logo-Transparent-02-1-e1639133591755-1024x110.png"*/}
                        {/*            alt="digitvl second logo"/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="row" align="center">
                            <div className="col-md-12">
                                <span className="custom-text2 text-accent">Where Creators monetize more effectively using web3</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100"
                                         src="https://digitvl.org/wp-content/uploads/2022/01/REACH-2-nft.jpeg"
                                         alt="First slide"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="https://digitvl.org/wp-content/uploads/2022/01/IMG_3892.jpeg" alt="Second slide"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="https://digitvl.org/wp-content/uploads/2022/03/EXODUS-ESSENTIALS-BEIGE.jpg" alt="Third slide"/>
                                </div>
                            </div>
                        </div>
                        {/*<img className="digitvl-text-logo-img"*/}
                        {/*     src="https://digitvl.org/wp-content/uploads/2021/12/1digitvl-shop-iphone-img.jpg" alt=""/>*/}
                    </div>
                </div>
            </div>
            {/*<div className="row mt-5 bg-black text-white">*/}
            {/*    <div className="col-md-12 col-sm-12" align="center">*/}
            {/*        <span className="custom-heading-section1"><b>What Is Digitvl?</b></span>*/}
            {/*    </div>*/}
            {/*    <div className="col-md-12 col-sm-12" align="center">*/}
            {/*        <span className="custom-text-section2"><b>We turn artists into businesses.</b></span>*/}
            {/*    </div>*/}
            {/*    <div className="col-md-12 col-sm-12" align="center">*/}
            {/*            <span className="custom-text-section2">DIGITVL is an ecosystem serving as a platform to help creators monetize easier. We offer an*/}
            {/*            e-commerce marketplace where creators can sell their digital and physical products (or bundle*/}
            {/*            them!) and a streaming aspect where they can earn $DGL for their streams. Creators use $DGL to*/}
            {/*            unlock more features they can use to grow their brands.</span>*/}
            {/*    </div>*/}
            {/*    <div className="col-md-12 col-sm-12" align="center">*/}
            {/*        <img src="https://digitvl.org/wp-content/uploads/2021/12/DIGITVL-LOGO-improved-300x238.png"*/}
            {/*             alt=""/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="row bg-rosewood text-white p-2">*/}
            {/*    <div className="col-md-12 col-sm-12" align="center">*/}
            {/*        <span className="custom-heading-section1"><b>NFTs x Utility</b></span>*/}
            {/*    </div>*/}
            {/*    <div className="col-md-6 col-sm-12" align="right">*/}
            {/*        <img className="digitvl-nft-utility-img"*/}
            {/*             src="https://digitvl.org/wp-content/uploads/2022/01/SHINE-rev-768x768.png" alt=""/>*/}
            {/*    </div>*/}
            {/*    <div className="col-md-6 col-sm-12 my-auto" align="left">*/}
            {/*            <span className="custom-text-section2">Artists will be able to mint NFTs and allow fans to take digital ownership of their works. They*/}
            {/*            can create collectible items or sell pieces of their copyright through NFTs and sell it in the*/}
            {/*                marketplace??? this includes audio, video and physical NFTs.</span>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="row bg-blue text-white p-2">*/}
            {/*    <div className="col-md-12 col-sm-12" align="center">*/}
            {/*        <span className="custom-heading-section1"><b>Creator Retail</b></span>*/}
            {/*    </div>*/}
            {/*    <div className="col-md-6 col-sm-12" align="right">*/}
            {/*        <img className="digitvl-nft-utility-img"*/}
            {/*             src="https://digitvl.org/wp-content/uploads/2022/03/EXODUS-ESSENTIALS-BEIGE-768x768.jpg"*/}
            {/*             alt=""/>*/}
            {/*    </div>*/}
            {/*    <div className="col-md-6 col-sm-12 my-auto" align="left">*/}
            {/*            <span className="custom-text-section2 ">Mercantilism is one of the fundamental concepts behind our platform. We make it easy for*/}
            {/*            creators to create their own merchandise and sell it in our marketplace. This includes bundling*/}
            {/*                digital/audio files, tokenizing merch and getting print on demand services.</span>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="row bg-purple text-white p-2">*/}
            {/*    <div className="col-md-12 col-sm-12" align="center">*/}
            {/*        <span className="custom-heading-section1"><b>Retail Distribution (Coming Soon)</b></span>*/}
            {/*    </div>*/}
            {/*    <div className="col-md-6 col-sm-12" align="right">*/}
            {/*        <img className="digitvl-nft-utility-img"*/}
            {/*             src="https://i.pinimg.com/originals/93/4d/5e/934d5ec57c21a1dd6b168a0a244b3651.webp"*/}
            {/*             alt=""/>*/}
            {/*    </div>*/}
            {/*    <div className="col-md-6 col-sm-12 my-auto" align="left">*/}
            {/*            <span className="custom-text-section2">Not only can creators create their own merch/have it created it for them and sell it in our marketplace ??? but they will also be able to have their products sold in physical boutique stores around the U.S. by purchasing shelf space in $DGL.*/}
            {/*                Currently some creators offer local pickup in our marketplace.</span>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="row bg-white pt-3 text-black">
                <div className="col-md-12 col-sm-12" align="center">
                    <img
                        className="digitvl-text-logo-img"
                        src="https://digitvl.org/wp-content/uploads/2021/12/Digitvl-Logo-Transparent-02-1-e1639133591755-1024x110.png"
                        alt="digitvl second logo"/>
                </div>
                <div className="col-md-12 col-sm-12" align="center">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <iframe src="https://www.youtube.com/embed/jRyzdwuglT4"
                                    title="YouTube video player" frameBorder="0"
                                    className="digitvl-iframe"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen/>
                        </div>
                        <div className="col-md-12 col-sm-12">
                            <span className="custom-heading-section1 pt-3"><b>Services</b></span>
                        </div>
                        <div className="col-md-12 col-sm-12" align="center">
                            <span className="custom-text-section2 pt-3"><b>E-Commerce/Marketplace Solutions</b></span>
                        </div>
                        <div className="col-md-12 col-sm-12 pt-3" align="center">
                            <span className="custom-text-section2"><b>Retail & Distribution</b></span>
                        </div>
                        <div className="col-md-12 col-sm-12 pt-3" align="center">
                            <span className="custom-text-section2"><b>Create & Sell NFTs (Coming Soon)</b></span>
                        </div>
                        <div className="col-md-12 col-sm-12 pt-3" align="center">
                            <span className="custom-text-section2"><b>Advertising</b></span>
                        </div>
                        <div className="col-md-12 col-sm-12 pt-3" align="center">
                            <span className="custom-text-section2"><b>SMS Marketing</b></span>
                        </div>
                        {/*<div className="col-md-12 col-sm-12" align="center">*/}
                        {/*    <span className="custom-text-section2"><b>Mwosa Speaks On Why He Created DIGITVL</b></span>*/}
                        {/*</div>*/}
                    </div>

                </div>
                {/*<div className="col-md-6 col-sm-12 my-auto" align="center">*/}
                {/*    <span className="custom-text-section2">The days of selling your soul for a deal ends in this new era. Greedy corporations exploit the soul of creators because creators don???t have leverage ??? but the blockchain will dismantle completely. In a world where people are governed by money and algorithms, we seek to put the power back in the hands of the people, brick by brick.</span>*/}
                {/*</div>*/}
            </div>
            <div className="row mt-3" align="center">
                <div className="col-md-12 col-sm-12">
                    <a href="https://algoexplorer.io/asset/462629820" rel="noreferrer"
                       target="_blank"> <img src="https://digitvl.org/wp-content/uploads/2021/12/DIGITVL-COIN-e1639264782437-150x150.png" alt=""/></a>
                </div>
                <div className="col-md-12 col-sm-12 mt-3">
                    <a href="https://www.instagram.com/digitvl_/" rel="noreferrer" target="_blank">
                        <FaInstagram size={30} color="purple"/>
                    </a>
                    <a href="https://t.me/+kj4Io4IfarQzMWMx" rel="noreferrer" target="_blank">
                        <FaTelegram size={30} className="ml-2" color="#2DA4DC"/>
                    </a>
                    <a href="https://www.youtube.com/channel/UCN1wXU0U4hWa-AoOBqrViEg" rel="noreferrer"
                       target="_blank">
                        <FaYoutube size={30} className="ml-2" color="#FE0000"/>
                    </a>
                    <a href="https://discord.com/invite/3gEZMcN9" rel="noreferrer" target="_blank">
                        <FaDiscord size={30} className="ml-2" color="#5964F2"/>
                    </a>
                    <a href="https://twitter.com/digitvl_" rel="noreferrer" target="_blank">
                        <FaTwitter size={30} className="ml-2" color="#1DA1F2"/>
                    </a>
                </div>

            </div>
        </div>
    )
}
