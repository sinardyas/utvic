import React, { useState } from "react";
import DatePicker from "react-datepicker";
import '../../../styles/FormDatepicker.scss';

// import "react-datepicker/dist/react-datepicker.css";


const DatePickers = (props) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <label for={props.name} class="text-xl font-semibold">{props.label}</label>
      <div class="mt-2 flex items-center justify-start rounded border bg-gray-100 px-2 focus:outline-none md:pr-32">
        <span class="">
          <svg class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </span>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className="datepicker"
        />
      </div>
    </>
  );
};


export default DatePickers