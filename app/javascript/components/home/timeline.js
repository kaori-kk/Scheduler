import React, { Component } from "react"
import {ScheduleComponent, ViewsDirective,ViewDirective, Day,Inject} from '@syncfusion/ej2-react-schedule';

class Timeline extends Component {
  render(){
    return (
      <div className="today">
        <ScheduleComponent>
          <ViewsDirective>
            <ViewDirective option='Day'/>
          </ViewsDirective>
        <Inject services={[Day] } />
        </ScheduleComponent>
        <div className="today-to-do">
          <h2>To Do</h2>
        </div>
      </div>
    )
  }
}

export default Timeline;