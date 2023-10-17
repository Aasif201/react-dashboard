import React from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill} from 'react-icons/bs'
import { LiaAngleDownSolid } from 'react-icons/lia'
 import 
 { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, PieChart, Pie } 
 from 'recharts';

function Home() {

    const data = [
        {
          "mn": 'Jan',
          "value": 8,
          "fill": '#f2efff'
        },
        {
          "mn": 'Feb',
          "value": 6,
          "fill": '#f2efff'
        },
        {
          "mn": 'Mar',
          "value": 12,
          "fill": '#f2efff'
        },
        {
          "mn": 'Apr',
          "value": 9,
          "fill": '#f2efff'
        },
        {
          "mn": 'May',
          "value": 10,
          "fill": '#f2efff'
        },
        {
          "mn": 'Jun',
          "value": 4,
          "fill": '#f2efff'
        },
        {
          "mn": 'Jul',
          "value": 10,
          "fill": '#f2efff'
        },
        {
          "mn": 'Aug',
          "value": 12,
          "fill": '#5a32ea'
        },
        {
          "mn": 'Sep',
          "value": 11,
          "fill": '#f2efff'
        },
        {
          "mn": 'Oct',
          "value": 9,
          "fill": '#f2efff'
        },
        {
          "mn": 'Nov',
          "value": 8,
          "fill": '#f2efff'
        },
        {
          "mn": 'Dec',
          "value": 10,
          "fill": '#f2efff'
        }
      ];
     
      const doughData = [
        { name: 'Geeksforgeeks', students: 200, fill: '#F88379' },
        { name: 'Technical scripter', students: 700, fill: '#808080' },
        { name: 'Geek-i-knack', students: 400, fill: '#5a32ea' }
    ];

  return (
    <main className='main-container'>
        {/* <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div> */}

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>PRODUCTS</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>300</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CATEGORIES</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CUSTOMERS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>33</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>42</h1>
            </div>
        </div>

        <div className="charts">
            <div className='chart'>
                <div className='chart-header'>
                    <div className='description1'>
                        <h2>Overview</h2>
                        <p>Monthly Earning</p>
                    </div>
                    <div className='description2'>
                        <p>Quarterly</p>
                        <LiaAngleDownSolid />
                    </div>
                </div>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                  width={500}
                  height={300}
                  data={data}
                  >
                  <XAxis dataKey="mn" axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Bar dataKey="value" fill="fill" radius={10} />
                  </BarChart>
                </ResponsiveContainer>
            </div>
            <div>
                    <div className='description1'>
                        <h2>Customers</h2>
                        <p>Customers that buy products</p>
                    </div>
            <PieChart width={200} height={200}>
              <Pie data={doughData} dataKey="students" outerRadius={100} 
              innerRadius={80} fill="fill"  />
            </PieChart>
            </div>
        </div>
    </main>
  )
}

export default Home