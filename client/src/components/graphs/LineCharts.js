import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
export default function LineCharts({ data, width }) {

    return (
        <div className="h-center my-1">
            <LineChart width={width} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="qty" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="period" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    )
}
