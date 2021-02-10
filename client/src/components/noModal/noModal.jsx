import React, { Component } from 'react'


export default class noModal extends Component {

    state = {
        visible : false
    }


openModal() {
    this.setState({
        visible : true
    });
}

closeModal() {
    this.setState({
        visible : false
    });
}
    render() {
        return (
            <>
                <
                
            </>
        )
    }
}
