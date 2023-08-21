import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Color switch demo" } };

function SwitchButton() {
  return (
    <div>
      <Switch {...label} defaultChecked color="secondary" />
    </div>
  );
}
export default SwitchButton;
