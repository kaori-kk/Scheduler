import React, { Component } from "react"
import Calender from './calender'
import Timeline from "./timeline"

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
      <div className="container1">
        <Calender/>
        <Timeline/>
      </div>
      
    )
  }
}

export default Home