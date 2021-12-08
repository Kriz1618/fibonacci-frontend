import { useState } from 'react';
import { TSerie } from '../type';

const ApiURL = 'http://localhost:3001/api/fibonacci/';
type props = {
  onAddNewSeries: (newSeries: TSerie) => void;
}

export default function NewItem({ onAddNewSeries }: props) {
  const [value, setValue] = useState<number | string>('');

  const handleChange = (event: { target: { value: string } }) => {
    setValue(Number(event.target.value));
  };

  const handleCalculateSerie = () => {
    fetch(`${ApiURL}${value}`)
      .then(response =>  response.json())
      .then(data => {
        const newSeries: TSerie = {
          id: new Date().getTime(),
          consecutive: value as number,
          value: data?.result,
        }
        console.log('21 data', data);
        onAddNewSeries(newSeries);
      })
      .catch(error => console.error(error))
      .finally(() => setValue(''))
  }

  return (
    <div style={{ margin: '20px', alignItems: 'baseline' }}>
      <input 
        type="number"
        onChange={handleChange}
        value={value}
        min={0}
      />
      <button 
        style={{ marginLeft: '20px' }}
        onClick={handleCalculateSerie}
      >
        Calculate
      </button>
    </div>
  )
}
