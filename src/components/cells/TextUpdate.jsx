import { useRef, useEffect } from 'react';

export default function TextUpdate({ value, setValue, handleUpdate }) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <input
      type="text"
      ref={inputRef}
      value={value}
      onChange={(e) => {
        console.log('setting state to: ', e.target.value);
        setValue(e.target.value);
      }}
      onBlur={handleUpdate}
    />
  );
}
