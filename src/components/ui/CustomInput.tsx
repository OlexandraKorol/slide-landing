import { useState } from "react";
import Button from "./Button";
import './CustomInput.css';


export const CustomInput: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <div className="custom-input">
        <input
          type="text"
          placeholder="name@company.com"
          value={value}
          onChange={e => setValue(e.target.value)}
          className="custom-input__field"
        />
        <Button className={"button"} variant='primary'>Start For Free</Button>
      </div>
    </div>
  );
}