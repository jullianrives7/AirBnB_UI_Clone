import { DateRangePicker } from "rsuite";

const MiniCalendar = () => {
  return (
    <DateRangePicker
      appearance="subtle"
      placement="leftStart"
      format={"MM-dd-yyyy"}
      editable={true}
      style={{ width: "100%", height: "0%", textAlign: "center" }}
    />
  );
};

export default MiniCalendar;
