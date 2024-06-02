import React from 'react';
import {Bar, BarChart, ResponsiveContainer, XAxis, YAxis} from 'recharts';

export function FILineBar({value}: { value: number }): React.JSX.Element {
    const  data: {name: string, altitude: number}[] = [{name: '', altitude: value}];

    return (
        <ResponsiveContainer width={200} height={450}>
            <BarChart data={data} margin={{top: 20, right: 50, left: 5, bottom: 5}}>
                <XAxis dataKey="name" stroke="#D0D0D0FF"/>
                <YAxis domain={[0, 3000]} stroke="#D0D0D0FF"/>
                <Bar dataKey="altitude" fill="#00FF00"/>
            </BarChart>
        </ResponsiveContainer>
    );
}