import React, { Component } from "react"
import {ScheduleComponent, ViewsDirective,ViewDirective, Day, Week, Month, Inject} from '@syncfusion/ej2-react-schedule';

class Calender extends Component {
  render(){
    return (
      <ScheduleComponent>
        <ViewsDirective>
            <ViewDirective option='Day'/>
            <ViewDirective option='Week'/>
            <ViewDirective option='Month'/>
          </ViewsDirective>
        <Inject services={[Day, Week, Month] } />
      </ScheduleComponent>
    )
  }
}

export default Calender;