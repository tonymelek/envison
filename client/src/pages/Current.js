import React, { useEffect, useState } from 'react'
import Dashboard from '../components/Dashboard'
import Barcharts from '../components/graphs/Barcharts'
import LineCharts from '../components/graphs/LineCharts'
import MyMoment from '../utils/MyMoment'

export default function Current({ data, width, days, hours }) {
    const [filtered, setFiltered] = useState([])
    const [direction, setDirection] = useState('All')
    const [dir_date, setDir_date] = useState('All')
    const [dayType, setDayType] = useState('All')
    const [selectedDate, setSelectedDate] = useState(days[0])
    const [perDay, setPerDay] = useState([])


    const filter = (tempDate, dir) => {
        const tempData = []
        for (let hour of hours) {
            tempData.push({
                period: `${hour}`,
                qty: data
                    .filter(record => record.timestamp.split('T')[0] === tempDate)
                    .filter(record => dir === 'All' ? record : record.direction === dir.toLowerCase())
                    .filter(record => record.timestamp.split('T')[1].split(':')[0] === hour).length
            })
        }
        setPerDay(tempData)
    }
    useEffect(() => {
        const tempData = []
        for (let day of days) {
            tempData.push({
                period: `${new MyMoment(day).formatDate}`,
                qty: data
                    .filter(record => dayType === 'All' ? record : new MyMoment(record.timestamp).day_type === dayType)
                    .filter(record => direction === 'All' ? record : record.direction === direction.toLowerCase())
                    .filter(record => record.timestamp.split('T')[0] === day).length
            })
        }
        setFiltered(tempData)
        filter(selectedDate, dir_date)



    }, [])

    const handleFilter = (direction, dayType) => {
        const tempData = []
        setDirection(direction)
        setDayType(dayType)
        for (let day of days) {
            tempData.push({
                period: `${new MyMoment(day).formatDate}`,
                qty: data
                    .filter(record => dayType === 'All' ? record : new MyMoment(record.timestamp).day_type === dayType)
                    .filter(record => direction === 'All' ? record : record.direction === direction.toLowerCase())
                    .filter(record => record.timestamp.split('T')[0] === day).length
            })
        }
        setFiltered(tempData)
    }

    const handleChangeDate = (e) => {
        setSelectedDate(e.target.value);
        filter(e.target.value, dir_date)
    }
    const handleChangeDir = e => {
        setDir_date(e.target.value)
        filter(selectedDate, e.target.value)
    }

    return (
        <div>

            <div className="d-flex justify-bet">
                <div>
                    <button className="btn btn-blue" onClick={() => handleFilter(direction, 'All')}>All</button>
                    <button className="btn btn-green" onClick={() => handleFilter(direction, 'weekday')}>Weekdays</button>
                    <button className="btn btn-red" onClick={() => handleFilter(direction, 'weekend')}>Weekends</button>
                </div>

                <div>
                    <button className="btn btn-blue" onClick={() => handleFilter('All', dayType)}>All</button>
                    <button className="btn btn-green" onClick={() => handleFilter('Entry', dayType)}>Entry</button>
                    <button className="btn btn-red" onClick={() => handleFilter('Exit', dayType)}>Exit</button>
                </div>
            </div>

            <div className="d-flex justify-around">
                <div>
                    <h2>Graphs for {direction} records of {dayType} days</h2>
                    <Barcharts data={filtered} width={width} />
                </div>
                <div>
                    <h2>Graph of <select id="select_date" onChange={handleChangeDate}>
                        {days
                            .map(day => <option key={day} value={day}>{new MyMoment(day).formatDate}</option>)}
                    </select>  in <select id="select_direction" onChange={handleChangeDir}>
                            <option value="All">All</option>
                            <option value="Entry">Entry</option>
                            <option value="Exit">Exit</option>
                        </select> direction in Hours</h2>
                    <Barcharts data={perDay} width={width} />
                </div>

            </div>
            <Dashboard {...{ data, days, hours, handleFilter }} />


        </div>
    )
}
