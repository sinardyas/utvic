import React, { useRef, useState } from 'react';
import DatePicker from "react-datepicker";
import { CalendarContainer } from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

export default function EditorTiny() {
	const [startDate, setStartDate] = useState(new Date());
    const MyContainer = ({ className, children }) => {
      return (
        <div style={{ padding: "16px", background: "#216ba5", color: "#fff" }}>
          <CalendarContainer className={className}>
            <div style={{ background: "#f0f0f0" }}>
              What is your favorite day?
            </div>
            <div style={{ position: "relative" }}>{children}</div>
          </CalendarContainer>
        </div>
      );
    };
    return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        calendarContainer={MyContainer}
      />
      <div> ahsasdsxsd</div>
     
     </>
    );
}
