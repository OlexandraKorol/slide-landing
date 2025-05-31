import React, { useState, useCallback } from 'react';
import Button from "../Button/Button";
import './CustomInput.css';



interface CustomInputProps {
  buttonText: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({ buttonText }) => {
  const [value, setValue] = useState('');

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <div>
      <div className="custom-input">
        <input
          type="text"
          placeholder="name@company.com"
          value={value}
          onChange={handleInputChange}
          className="custom-input__field"
        />
        <Button className={"button"} variant='primary'>{buttonText}</Button>
      </div>
    </div>
  );
}