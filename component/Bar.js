import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis,Tooltip,ResponsiveContainer} from 'recharts';

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
     <ResponsiveContainer    width={800}
     height={300}>
        <BarChart
          data={data}
          barSize={20}
        >
          <XAxis axisLine={false} tickLine={false} fontSize={10} dataKey="name" scale="point" padding={{ left: 30, right: 10 }} />
          <YAxis axisLine={false} tickLine={false} fontSize={10}/>
          <Tooltip />
          <Bar dataKey="pv" fill="orange" background={{ fill: '#eee',radius:[10, 10, 10, 10] }} radius={[10, 10, 10, 10]}/>
        </BarChart></ResponsiveContainer>
    );
  }
}
