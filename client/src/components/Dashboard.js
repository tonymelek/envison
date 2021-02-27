import React from 'react'
import MyMoment from '../utils/MyMoment'

export default function Dashboard({ data, days, hours, handleFilter }) {
    return (
        <div>
            <div className="d-flex justify-around">
                <div className="card hover" onClick={() => handleFilter('All', 'All')}>
                    <h3>Total Records</h3>
                    <h2>{data.length}</h2>
                </div>
                <div className="card hover" onClick={() => handleFilter('Entry', 'All')}>
                    <h3>Total Entries</h3>
                    <h2>{data.filter(record => record.direction === 'entry').length}</h2>
                </div>
                <div className="card hover" onClick={() => handleFilter('Exit', 'All')}>
                    <h3>Total Exits</h3>
                    <h2>{data.filter(record => record.direction === 'exit').length}</h2>
                </div>
            </div>
            <div className="d-flex justify-around">
                <div className="card">
                    <h3>Day(s) Interval</h3>
                    <h2>{days.length} day(s)</h2>
                </div>
                <div className="card">
                    <h3>Hour(s) Interval</h3>
                    <h2>{hours.length} hour(s)</h2>
                </div>
                <div className="card">
                    <h3>Weekday Records</h3>
                    <h2>{data.filter(record => new MyMoment(record.timestamp).day_type === 'weekday').length}</h2>
                </div>
                <div className="card">
                    <h3>Weekend Records</h3>
                    <h2>{data.filter(record => new MyMoment(record.timestamp).day_type === 'weekend').length}</h2>
                </div>
            </div>
        </div>
    )
}
