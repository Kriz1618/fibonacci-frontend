import React from 'react';

import { TSerie } from '../type';

type props = { series: TSerie[] };

export default function FibonacciList({ series }: props) {

  return (
    <div>
      {series.length ? (
        series.map(({ id, consecutive, value }) => {
          return (
            <div key={id}>
              <h3>Fibonacci Result({consecutive}):  {value}</h3>
            </div>
          )
        })
      ) : null

      }
    </div>
  )
}
