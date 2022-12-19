import React, { useState } from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
// import DateRangePicker from "@wojtekmaj/react-daterange-picker/dist/entry.nostyle";

const MuiCalendar = () => {
  const [value, onChange] = useState([new Date(), new Date()]);

  return (
    <div>
      <DateRangePicker
        style={{ width: "500px" }}
        onChange={onChange}
        value={value}
        isOpen={true}
      />
    </div>
  );
};

export default MuiCalendar;
