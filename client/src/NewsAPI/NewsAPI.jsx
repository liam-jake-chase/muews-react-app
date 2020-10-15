import axios from 'axios';
import React, { Component } from 'react';
import { uuid } from 'uuidv4';
import NewsSection from './NewsSection';


export default class NewsAPI extends Component {
    state ={
        newsResults: []
    }

    getNews = () => {
        axios
            .get("https://newsapi.org/v2/everything?q=coldplay&from=2020&language=en&sortBy=relevancy&apiKey=0c5f7ab300a446dd9642ea289e6b7522")
            .then(response => {
                console.log(response.data.articles)
                this.setState({
                    newsResults: response.data.articles
                })
            }) 
    }

    componentDidMount() {
        this.getNews();
    }

    
    render() {
        

        return (
            <div> 
            {this.state.newsResults.map(data =>               
            <NewsSection 
                key={uuid()}
                title={data.title}
                url={data.url}
            />)}                     
                
            </div>
        )
    }
}

