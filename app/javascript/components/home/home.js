import React, { Component } from "react"
import Calender from './calender'

class Home extends Component {
  consutructor(){
    // super()

    this.state = {
      events : [
        { id: 1, title: "", date: "", time: ""}
      ]
    }
  }
  render(){
    return (
      <Calender/>
    )
  }
}

export default Home