import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

interface RadioBtnProps {
  gender: "male" | "female";
  setGender: (gender: "male" | "female") => void;
}

export const RadioBtn: React.FC<RadioBtnProps> = ({ gender, setGender }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value as "male" | "female");
  };

  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={gender}
        onChange={handleChange}
      >
        <FormControlLabel value="male" control={<Radio />} label="남자" />
        <FormControlLabel value="female" control={<Radio />} label="여자" />
      </RadioGroup>
    </FormControl>
  );
};
