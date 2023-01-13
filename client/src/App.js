import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import MainTwo from "./components/MainTwo/MainTwo";
import axios from "axios";
import Youtube from "./components/VideoPlayer/Youtube";
import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Signup from "./components/SignupLogin/Signup";
import NavbarMenu from "./components/SideBar/NavbarMenu";
import Login from "./components/SignupLogin/Login";
import PrivateRoute from "./components/SignupLogin/PrivateRoute";
import ForgotPassword from "./components/SignupLogin/ForgotPassword";
import UpdateProfile from "./components/SignupLogin/UpdateProfile";
import Dashboard from "./components/SignupLogin/Dashboard";
import { AuthProvider } from "./Context/AuthContext";
import Modal from "react-awesome-modal";

export default class App extends Component {
  state = {
    searchName: "",
    newsResults: [],
    videos: [],
    artistInfo: [],
    concertInfo: [],
    discogsInfo: [],
    audioDB: [],
    releaseData: [],
    images: [],
    selectedVideo: null,
    redirect: false,
    noData: null,
    visible: false,
  };

  openModal() {
    this.setState({
      visible: true,
    });
  }

  closeModal() {
    this.setState({
      visible: false,
      redirect: false,
    });
  }

  handleSearchName = (event) => {
    this.setState({
      searchName: event.target.value,
    });
  };

  getArtist = () => {
    axios
      .get(
        `https://www.theaudiodb.com/api/v1/json/523532/search.php?s=${this.state.searchName}`
      )
      .then((response) => {
        this.setState({
          artistInfo: response.data,
        });
      });
  };

  getEvent = () => {
    axios
      .get(
        `https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=2mitntFIkOiRSejzvu3iHKjtOC6AiuyB&keyword=${this.state.searchName}`
      )
      .then((response) => {
        console.log(response)
        if (response.data.length === 0) {
          this.setState({
            noData: "No Event Listings",
          });
        } else {
          this.setState({
            concertInfo: response.data._embedded.events,
          });
        }
      });
      };

  getData = () => {
    axios
      .get(
        `https://www.theaudiodb.com/api/v1/json/523532/search.php?s=${this.state.searchName}`
      )
      .then((response) => {
        if (response.data.artists === null) {
          this.setState({
            redirect: false,
          });
          this.openModal();
        } else {
          this.setState({
            audioDB: response.data.artists[0],
          });
        }
      });
  };

  getArtistData = () => {
    const access = {
      headers: {
        Authorization:
          "Discogs key=trndaRvgxPZeVGxKzXuo, secret=EfhONQaxMVYqTPCgrxkmCCmTJbVkLsjU",
      },
    };
    axios
      .get(
        `https://api.discogs.com/database/search?q=${this.state.searchName}&artist&key=trndaRvgxPZeVGxKzXuo&secret=EfhONQaxMVYqTPCgrxkmCCmTJbVkLsjU`
      )
      .then((response) => {
        let artistName = response.data.results[0].id;
        let idSearch = () => {
          axios
            .get(`https://api.discogs.com/artists/${artistName}`, access)
            .then((response) => {
              this.setState({
                discogsInfo: response.data,
                images: response.data.images,
              });
              axios
                .get(
                  `https://api.discogs.com/artists/${artistName}/releases?year&key=trndaRvgxPZeVGxKzXuo&secret=EfhONQaxMVYqTPCgrxkmCCmTJbVkLsjU`
                )
                .then((response) => {
                  this.setState({
                    releaseData: response.data.releases,
                  });
                  console.log(response.data.releases);
                });
            });
        };
        idSearch();
      });
  };

  getVideo = async () => {
    const response = await Youtube.get("/search", {
      params: {
        q: this.state.searchName,
      },
    });

    this.setState({
      videos: response.data.items,
    });
  };

  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.getData();
    this.getVideo();
    this.getArtist();
    this.getEvent();
    this.getArtistData();
    this.setState({
      redirect: true,
    });
  };

  handleSubmitTwo = () => {
    this.setState({
      redirect: false,
    });
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Modal visible={this.state.visible} effect="fadeInDown">
            <div className="modal">
              <h1>Sorry!</h1>
              <h3>
                We were unable to get enough data for this musician, please
                search again!
              </h3>
              <Link
                to="/josh-fusillo-capstone-muews"
                className="modal__button"
                onClick={() => this.closeModal()}
              >
                Close
              </Link>
            </div>
          </Modal>
          <AnimatePresence exitBeforeEnter>
            <AuthProvider>
              <NavbarMenu
                handleSubmitTwo={this.handleSubmitTwo}
                name={this.state.artistInfo}
              />
            </AuthProvider>
            <Switch>
              <Route
                exact
                path="/josh-fusillo-capstone-muews"
                render={(props) => (
                  <Main
                    {...props}
                    value={this.state.searchName}
                    onChange={this.handleSearchName}
                    handleSubmit={this.handleSubmit}
                    redirect={this.state.redirect}
                  />
                )}
              />
              <Route
                path="/MainTwo"
                render={(props) => (
                  <MainTwo
                    {...props}
                    newsResults={this.state.newsResults}
                    selectedVideo={this.state.selectedVideo}
                    videos={this.state.videos}
                    handleVideoSelect={this.handleVideoSelect}
                    artistInfo={this.state.artistInfo}
                    discogsInfo={this.state.discogsInfo}
                    audioDB={this.state.audioDB}
                    concertInfo={this.state.concertInfo}
                    releaseData={this.state.releaseData}
                    images={this.state.images}
                    handleSubmitTwo={this.handleSubmitTwo}
                    value={this.state.searchName}
                    noData={this.state.noData}
                  />
                )}
              />
              <AuthProvider>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute
                  path="/update-profile"
                  component={UpdateProfile}
                />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
              </AuthProvider>
            </Switch>
          </AnimatePresence>
        </BrowserRouter>
      </div>
    );
  }
}
