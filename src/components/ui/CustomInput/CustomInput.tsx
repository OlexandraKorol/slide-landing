import { useState } from "react";
import Button from "../Button/Button";
import './CustomInput.css';



interface CustomInputProps {
  buttonText: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({buttonText}) => {
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
        <Button className={"button"} variant='primary'>{buttonText}</Button>
      </div>
    </div>
  );
}