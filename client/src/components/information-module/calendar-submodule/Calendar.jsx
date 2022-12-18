import { useState } from "react";
import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const Calendar = () => {
  const [value, setValue] = useState();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label=""
        inputFormat="MM/DD/YYYY"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
        disablePast={true}
        disableHighlightToday={true}
        disableUnderline={true}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
