import React, { Component } from "react"
import { Inject, ScheduleComponent, Day } from '@syncfusion/ej2-react-schedule';

class Timeline extends Component {
  render(){
    return <ScheduleComponent>
      <Inject services={Day}/>
    </ScheduleComponent>
  }
}

export default Timeline;