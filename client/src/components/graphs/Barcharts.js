import React from 'react'
import { BarChart, Bar, Tooltip, Legend, CartesianGrid, XAxis, YAxis } from 'recharts';
export default function Barcharts({ data, width }) {
    return (
        <div className="h-center my-1 align-b">
            <BarChart width={width} height={300} data={data}>
                <XAxis dataKey="period" stroke="#555999" />
                <YAxis stroke="#555999" />
                <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                {/* <Legend width={100} wrapperStyle={{ top: 0, right: 0, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} /> */}
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="qty" fill="#555999" barSize={30} />
            </BarChart>
        </div>
    )
}
