import React, { Component } from "react";
import ConcertAPI from "../ConcertAPI/ConcertAPI";
import Header from "../Header/Header";
import { motion } from "framer-motion";
import VideoList from "../VideoPlayer/VideoList";
import VideoDetail from "../VideoPlayer/VideoDetail";
import "./MainTwo.scss";
import Releases from "../Releases/Releases";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";



export default class MainTwo extends Component {
  
  

  render() {
    const pageTransition = {
      in: {
        opacity: 1,
      },
      out: {
        opacity: 0,
      },
    };

    

    

    return (
      <>
        <div className="main-mobile-tablet">
          <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={pageTransition}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            <div>
              <div className="card__wrapper">
                <div className="card__wrapper-two">
                  <motion.div
                    className="card__two"
                    whileHover={{ scale: 1.03 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={this.props.audioDB.strArtistBanner}
                      className="hero__image"
                      alt="Band hero"
                    />
                    <div className="hero__wrapper">
                      <h1 className="hero__bio">BIOGRAPHY:</h1>
                      <hr />
                      <div className="hero__bio-text">
                        {this.props.audioDB.strBiographyEN}
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="card__four"
                    whileHover={{ scale: 1.03 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="band">
                      <h1 className="band__header">BAND DETAILS</h1>
                      <h2 className="band__header-two">MEMBERS:</h2>
                      {this.props.discogsInfo.members &&
                        this.props.discogsInfo.members.map((member) => {
                          return (
                            <ul className="band__ul">
                              <li className="band__member-name">
                                {member.name}
                              </li>
                            </ul>
                          );
                        })}
                      <h2 className="band__header-two">YEAR FORMED:</h2>
                      <ul className="band__ul">
                        <li className="band__member-name">
                          {this.props.audioDB.intFormedYear}
                        </li>
                      </ul>
                      <h2 className="band__header-two">LABEL:</h2>
                      <ul className="band__ul">
                        <li className="band__member-name">
                          {this.props.audioDB.strLabel}
                        </li>
                      </ul>
                      <h2 className="band__header-two">COUNTRY:</h2>
                      <ul className="band__ul">
                        <li className="band__member-name">
                          {this.props.audioDB.strCountry}
                        </li>
                      </ul>
                      <h2 className="band__header-two">GENRE:</h2>
                      <ul className="band__ul">
                        <li className="band__member-name">
                          {this.props.audioDB.strGenre}
                        </li>
                      </ul>
                      <h2 className="band__header-two">STYLE:</h2>
                      <ul className="band__ul">
                        <li className="band__member-name">
                          {this.props.audioDB.strStyle}
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                  <motion.div
                    className="card__six"
                    whileHover={{ scale: 1.03 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2>CONCERT LISTINGS</h2>
                    <h3 className="no-event">{this.props.noData}</h3>
                    {this.props.concertInfo &&
                      this.props.concertInfo.map((concert) => (
                        <ConcertAPI
                          dateTime={concert.datetime}
                          onSale={concert.on_sale_datetime}
                          venueName={concert.venue.name}
                          venueLocation={concert.venue.location}
                          ticketLink={concert.url}
                          noData={this.props.noData}
                        />
                      ))}
                  </motion.div>

                  <div className="card__wrapper-three">
                    <motion.div
                      className="card__five"
                      initial="out"
                      animate="in"
                      exit="out"
                      variants={pageTransition}
                      whileHover={{ scale: 1.03 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="releases__header">RELEASES</h2>
                      <div className="releases__flex">
                        {this.props.releaseData.map((release) => (
                          <Releases
                            title={release.title}
                            year={release.year}
                            thumb={release.thumb}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div className="card__wrapper-four">
                  <div className="card__one">
                    <VideoDetail video={this.props.selectedVideo} />
                    <VideoList
                      handleVideoSelect={this.props.handleVideoSelect}
                      videos={this.props.videos}
                    />
                  </div>
                </div>
                <motion.div
                  className="card__three"
                  whileHover={{ scale: 1.03 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Gallery
                    imageOne={this.props.audioDB.strArtistClearart}
                    imageTwo={this.props.audioDB.strArtistFanart}
                    imageThree={this.props.audioDB.strArtistFanart2}
                    imageFour={this.props.audioDB.strArtistFanart3}
                    imageFive={this.props.audioDB.strArtistLogo}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* /////////////////////////////////////////////////////////////////// */}

        <div className="main-desktop">
          <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={pageTransition}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            <div className="card__wrapper">
              <div className="card__one">
                <VideoDetail video={this.props.selectedVideo} />
                <VideoList
                  handleVideoSelect={this.props.handleVideoSelect}
                  videos={this.props.videos}
                />
              </div>
              <div className="card__wrapper-two">
                <motion.div
                  className="card__two"
                  whileHover={{ scale: 1.03 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={this.props.audioDB.strArtistBanner}
                    className="hero__image"
                    alt="Band hero"
                  />
                  <div className="hero__wrapper">
                    <h1 className="hero__bio">BIOGRAPHY:</h1>
                    <hr />
                    <div className="hero__bio-text">
                      {this.props.audioDB.strBiographyEN}
                    </div>
                  </div>
                </motion.div>

                <div className="card__wrapper-three">
                  <motion.div
                    className="card__three"
                    whileHover={{ scale: 1.03 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Gallery
                      imageOne={this.props.audioDB.strArtistClearart}
                      imageTwo={this.props.audioDB.strArtistFanart}
                      imageThree={this.props.audioDB.strArtistFanart2}
                      imageFour={this.props.audioDB.strArtistFanart3}
                      imageFive={this.props.audioDB.strArtistLogo}
                    />
                  </motion.div>

                  <motion.div
                    className="card__five"
                    initial="out"
                    animate="in"
                    exit="out"
                    variants={pageTransition}
                    whileHover={{ scale: 1.03 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="releases__header">RELEASES</h2>
                    <div className="releases__flex">
                      {this.props.releaseData.map((release) => (
                        <Releases
                          title={release.title}
                          year={release.year}
                          thumb={release.thumb}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className="card__wrapper-four">
                <motion.div
                  className="card__four"
                  whileHover={{ scale: 1.03 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="band">
                    <h1 className="band__header">BAND DETAILS</h1>
                    <h2 className="band__header-two">MEMBERS:</h2>
                    {this.props.discogsInfo.members &&
                      this.props.discogsInfo.members.map((member) => {
                        return (
                          <ul className="band__ul">
                            <li className="band__member-name">{member.name}</li>
                          </ul>
                        );
                      })}
                    <h2 className="band__header-two">YEAR FORMED:</h2>
                    <ul className="band__ul">
                      <li className="band__member-name">
                        {this.props.audioDB.intFormedYear}
                      </li>
                    </ul>
                    <h2 className="band__header-two">LABEL:</h2>
                    <ul className="band__ul">
                      <li className="band__member-name">
                        {this.props.audioDB.strLabel}
                      </li>
                    </ul>
                    <h2 className="band__header-two">COUNTRY:</h2>
                    <ul className="band__ul">
                      <li className="band__member-name">
                        {this.props.audioDB.strCountry}
                      </li>
                    </ul>
                    <h2 className="band__header-two">GENRE:</h2>
                    <ul className="band__ul">
                      <li className="band__member-name">
                        {this.props.audioDB.strGenre}
                      </li>
                    </ul>
                    <h2 className="band__header-two">STYLE:</h2>
                    <ul className="band__ul">
                      <li className="band__member-name">
                        {this.props.audioDB.strStyle}
                      </li>
                    </ul>
                  </div>
                </motion.div>
                <motion.div
                  className="card__six"
                  whileHover={{ scale: 1.03 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2>CONCERT LISTINGS</h2>
                  <h3 className="no-event">{this.props.noData}</h3>
                  {this.props.concertInfo &&
                    this.props.concertInfo.map((concert) => (
                      <ConcertAPI
                        dateTime={concert.datetime}
                        onSale={concert.on_sale_datetime}
                        venueName={concert.venue.name}
                        venueLocation={concert.venue.location}
                        ticketLink={concert.url}
                        noData={this.props.noData}
                      />
                    ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <Footer
          name={this.props.artistInfo.name}
          image={this.props.artistInfo.thumb_url}
          facebook={this.props.audioDB.strFacebook}
          twitter={this.props.audioDB.strTwitter}
          homepage={this.props.audioDB.strWebsite}
          handleSubmitTwo={this.props.handleSubmitTwo}
          value={this.props.value}
        />
       
      </>
    );
  }
}
