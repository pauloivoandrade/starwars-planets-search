import { useState } from 'react';

export default function useHandleSelectChange(e: { target: { value: any; }; }) {
  const [selected, setSelected] = useState('maior que');
  const selectedSelect = e.target.value;
  setSelected(selectedSelect);
  return {
    selected,
  };
}
