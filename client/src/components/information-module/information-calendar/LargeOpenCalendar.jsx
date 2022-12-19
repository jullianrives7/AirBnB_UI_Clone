import { DateRangePicker } from "rsuite";

const LargeOpenCalendar = () => {
  return (
    <DateRangePicker
      appearance="subtle"
      placement="topStart"
      format={"MM-dd-yyyy"}
      editable={true}
      open={true}
      character=" to "
      disabled={true}
      style={{
        width: "490px",
        textAlign: "center",
      }}
    />
  );
};

export default LargeOpenCalendar;
