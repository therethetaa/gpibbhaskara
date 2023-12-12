import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const DatePicker = ({ value, endDate, range, onChange, monthPicker = false }) => {
  const formatLabel = () => {
    const formatd = "dd/MM/yyyy";
    const start = format(value || Date.now(), formatd);
    if (range) {
      const end = format(endDate || Date.now(), formatd);
      return `${start} - ${end}`;
    }
    return start;
  };

  return (
    <div className={`relative ${range ? "w-60" : "w-40"}`}>
      <ReactDatePicker
        showMonthYearPicker={monthPicker}
        selected={value}
        onChange={(date) => {
          if (!onChange) return;

          // Ranged value
          if (range) {
            const [start, end] = date;
            console.log('xna', start, end)
            return onChange({ start, end });
          }

          onChange(date);
        }}
        
        selectsStart
        startDate={value}
        endDate={endDate}
        selectsRange={range}
        dateFormat={monthPicker ? "MMM yyyy" : "dd/MM/yyyy"}
        customInput={
            <input 
                type="text" 
                className="form-control" 
                value={formatLabel()}
                />
        
        }
      />
    </div>
  );
};

export default DatePicker;