import React, { Component } from "react"
import {ScheduleComponent, ViewsDirective,ViewDirective, Week, Month, Inject} from '@syncfusion/ej2-react-schedule';


class Calender extends Component {
  render(){
    return (
        <ScheduleComponent>
          <ViewsDirective>
              <ViewDirective option='Month'/>
              <ViewDirective option='Week'/>
            </ViewsDirective>
          <Inject services={[ Month, Week] } />
        </ScheduleComponent>
    )
  }
}

export default Calender;