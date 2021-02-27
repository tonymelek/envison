import React, { useEffect, useState } from 'react'
import Barcharts from '../components/graphs/Barcharts'
import Header from '../components/Header'
import MyMoment from '../utils/MyMoment'


export default function Home({ data, days, hours }) {
    const [perDay, setPerDay] = useState([])
    const width = window.innerWidth - 100
    useEffect(() => {
        const tempDays = []

        for (let day of days) {
            tempDays.push({
                period: `${new MyMoment(day).formatDate}`,
                qty: data
                    .filter(record => record.timestamp.split('T')[0] === day).length

            })
        }
        setPerDay(tempDays)

    }, [])



    return (
        <div>

            <div className="d-flex justify-around">
                <div >
                    <h2>Records per Day</h2>
                    <Barcharts data={perDay} width={width} />
                </div>

            </div>
        </div>
    )
}
