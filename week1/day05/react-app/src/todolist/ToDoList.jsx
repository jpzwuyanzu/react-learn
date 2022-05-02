import React, { Component } from 'react'
import Form from './Form'
import List from './List'

export default class ToDoList extends Component {

    state = {
        keyword: ''
    }
    handlerReceiveData(keyword) {
        this.setState({ keyword })
    }
    
    render() {
        return (
            <div>
                <Form onReceiveData = { this.handlerReceiveData.bind(this) }></Form>
                <List keyword={ this.state.keyword }></List>
            </div>
        )
    }
}
