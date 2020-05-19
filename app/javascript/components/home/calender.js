import React, { Component } from "react"
import { Inject, ScheduleComponent, Day, Week, Month } from '@syncfusion/ej2-react-schedule';

class Calender extends Component {
  render(){
    return <ScheduleComponent>
      <Inject services={[Day, Week, Month ]} />
    </ScheduleComponent>
  }
}

export default Calender;