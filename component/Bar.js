import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis,Tooltip} from 'recharts';

const data = [
  {
    name: 'JAN',
    pv: 400,
  },
  {
    name: 'FEB',
    pv: 300,
  },
  {
    name: 'MAR',
    pv: 200,
  },
  {
    name: 'APR',
    pv: 300,
  },
  {
    name: 'MAY',
    pv: 400,
  },
  {
    name: 'JUL',
    pv: 300,
  },
  {
    name: 'AUG',
    pv: 300,
  },
  {
    name: 'SEP',
    pv: 100,
  },
  {
    name: 'OCT',
    pv: 200,
  },

  {
    name: 'NOV',
    pv: 300,
  },
  {
    name: 'DEC',
    pv: 200,
  },
];

export default class Example extends PureComponent {

  render() {
    return (
        <BarChart
          width={700}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="pv" fill="orange" background={{ fill: '#eee' }} />
        </BarChart>
      
    );
  }
}
