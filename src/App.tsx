import React, { useState } from 'react';
import './App.css';
import NewItem from './components/NewItem';
import FibonacciList from './components/FinonacciList'
import { TSerie } from './type';

function App() {
  const [series, setSeries] = useState<TSerie[]>([]);

  const handledAddSeries = (newSeries: TSerie) => {
    setSeries(series.concat([newSeries]))
  }

  return (
    <div className="App">
      <div>
        <h1>Calculate Fibonacci!</h1>
      </div>
      <NewItem onAddNewSeries={handledAddSeries}/>
      <FibonacciList series={series} />
    </div>
  );
}

export default App;
