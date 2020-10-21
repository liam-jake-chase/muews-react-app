import React, { Component } from 'react'
import Youtube from './Youtube'
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

export default class VideoPlayer extends Component {
      state = {
            videos: [],
            selectedVideo: null
        }
        handleSubmit = async (termFromSearchBar) => {
            const response = await Youtube.get('/search', {
                params: {
                    q: termFromSearchBar
                }
            })
    
            this.setState({
                videos: response.data.items
            })
            console.log(response);
        };
        handleVideoSelect = (video) => {
            this.setState({selectedVideo: video})
        }
    
        render() {
            return (
                <div className='ui container'>
                    <div className='ui grid'>
                        <div className="ui row">
                            <div className="eleven wide column">
                                <VideoDetail video={this.state.selectedVideo}/>
                            </div>
                            <div className="five wide column">
                                <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                            </div>
                        </div>
                    </div>
                    <SearchBar handleFormSubmit={this.handleSubmit}/>
                </div>
            )
        }
    }
    

