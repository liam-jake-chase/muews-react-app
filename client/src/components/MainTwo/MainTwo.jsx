import React, { Component } from 'react';
import NewsSection from '../NewsAPI/NewsSection';
import ConcertAPI from '../ConcertAPI/ConcertAPI';
import Header from '../Header/Header';
import { motion } from 'framer-motion';
import VideoList from '../VideoPlayer/VideoList';
import VideoDetail from '../VideoPlayer/VideoDetail';
import { uuid } from 'uuidv4';
import './MainTwo.scss';




export default class MainTwo extends Component {



    render() {
        const pageTransition = {
            in: {
                opacity: 1,

            },
            out: {
                opacity: 0,


            }
        };



        return (
            <motion.div initial="out" animate="in" exit="out" variants={pageTransition} transition={{ ease: "easeOut", duration: 2 }}>
                <div>
                    <Header
                        name={this.props.artistInfo.name}
                        image={this.props.artistInfo.thumb_url}
                        facebook={this.props.artistInfo.facebook_page_url}
                    />
                    <div className="card__wrapper">

                        <motion.div className="card__one" initial="out" animate="in" exit="out" variants={pageTransition} whileHover={{ scale: 1.03 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                            <VideoDetail video={this.props.selectedVideo} />
                            <VideoList handleVideoSelect={this.props.handleVideoSelect} videos={this.props.videos} />


                        </motion.div>

                        <div className="card__wrapper-two">
                            <motion.button className="card__two" whileHover={{ scale: 1.03 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>

                                <img src={this.props.audioDB.strArtistBanner} className="hero__image" alt="Band hero image" />
                                <div className="hero__wrapper">
                                    <h1 className="hero__bio">BIOGRAPHY:</h1>
                                    <hr />
                                    <div className="hero__bio-text">{this.props.audioDB.strBiographyEN}</div>
                                </div>


                            </motion.button>


                            <div className="card__wrapper-three">
                            <motion.button className="card__three" whileHover={{ scale: 1.03 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                                <h2>Concert Listings</h2>
                                {this.props.concertInfo && this.props.concertInfo.map(concert =>
                                    <ConcertAPI
                                        dateTime={concert.datetime}
                                        onSale={concert.on_sale_datetime}
                                        venueName={concert.venue.name}
                                        venueLocation={concert.venue.location}
                                    />
                                )}

                                {/* {this.props.newsResults.map(data =>
                                    <NewsSection
                                        key={uuid()}
                                        title={data.title}
                                        url={data.url}
                                    />)} */}

                            </motion.button>
                            <motion.div className="card__five" initial="out" animate="in" exit="out" variants={pageTransition} whileHover={{ scale: 1.03 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                            


                            </motion.div>
                        </div>
                        </div>

                        
                            <motion.button className="card__four" whileHover={{ scale: 1.03 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                                <div className="band">
                                    <h1 className="band__header">BAND DETAILS</h1>
                                    <h2 className="band__header-two">MEMBERS:</h2>
                                    {this.props.discogsInfo.members && this.props.discogsInfo.members.map(member => {
                                        return <ul className="band__ul"><li className="band__member-name">{member.name}</li></ul>
                                    })}
                                    <h2 className="band__header-two">YEAR FORMED:</h2>
                                    <ul className="band__ul"><li className="band__member-name">{this.props.audioDB.intFormedYear}</li></ul>
                                    <h2 className="band__header-two">LABEL:</h2>
                                    <ul className="band__ul"><li className="band__member-name">{this.props.audioDB.strLabel}</li></ul>
                                    <h2 className="band__header-two">COUNTRY:</h2>
                                    <ul className="band__ul"><li className="band__member-name">{this.props.audioDB.strCountry}</li></ul>
                                    <h2 className="band__header-two">GENRE:</h2>
                                    <ul className="band__ul"><li className="band__member-name">{this.props.audioDB.strGenre}</li></ul>
                                    <h2 className="band__header-two">STYLE:</h2>
                                    <ul className="band__ul"><li className="band__member-name">{this.props.audioDB.strStyle}</li></ul>
                                </div>
                            </motion.button>
                            
                       
                    </div>


                </div>
            </motion.div>
        )
    }
}
