import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis,Tooltip,ResponsiveContainer} from 'recharts';

const data = [
  {
      name: 'JAN',
      total: 100,
      available: 300,
  },
  {
      name: 'FEB',
      total: 140,
      available: 260,
  }
  ,
  {
      name: 'MAR',
      total: 140,
      available: 260,
  },
  {
      name: 'APR',
      total: 240,
      available: 160,
  },
  {
      name: 'MAY',
      total: 280,
      available: 120,
  },
  {
      name: 'JUN',
      total: 200,
      available: 200,
  },
  {
      name: 'JUL',
      total: 240,
      available: 160,
  },
  {
      name: 'AUG',
      total: 100,
      available: 300,
  },
  {
      name: 'SEP',
      total: 240,
      available: 160,
  },
  {
      name: 'OCT',
      total: 340,
      available: 60,
  },
  {
      name: 'NOV',
      total: 380,
      available: 20,
  },
  {
      name: 'DEC',
      total: 400,
      available: 0
  }
];


export default class Example extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%"aspect={2}>
      <BarChart
        data={data}
        
      >
        <XAxis axisLine={false} tickLine={false} dataKey="name" fontSize={9} fontWeight={500}/>
        <YAxis axisLine={false} tickLine={false}  fontSize={9} fontWeight={500}/>
        <Bar dataKey="total" stackId="a" fill="#FCAC61" radius={[10,10,10,10]} barSize={12} />
        <Bar dataKey="available" stackId="a" fill="#DFE4EB" radius={[10,10,0,0]} barSize={12}/>
      </BarChart>
    </ResponsiveContainer>
    );
  }
}
