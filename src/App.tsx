import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar.tsx'
import Device from "./components/Device.tsx";
import './App.css'
import {Divider} from "@mui/material";
import Charts from "./components/Charts.tsx";
import Box from "@mui/material/Box";

function App() {
  // const [count, setCount] = useState(0)
    const data= [{
        deviceId: 1,
        temperature: 10,
        pressure: 104,
        humidity: 25
    },{
        deviceId: 2,
        temperature: 10,
        pressure: 105,
        humidity: 25
    },{
        deviceId: 3,
        temperature: 10,
        pressure: 100,
        humidity: 20
    },{
        deviceId: 4,
        temperature: 20,
        pressure: 1000,
        humidity: 25
    },]
    const chartData = {
        deviceId: 1,
        temperature: [20, 21, 22],
        pressure: [100, 98, 102],
        humidity: [25, 28, 34]
    }

  return (
    <>
        <Navbar/>
        <Box display="flex" alignItems="center">
            <Device data={data}/>
            <Charts data={chartData}/>
        </Box>
        <Divider sx={{ backgroundColor: 'white', my: 3, borderBottomWidth: 5}} />
        <Box display="flex" alignItems="center" justifyContent="space-around">
            {data.map((data) => (
                <Device key={data.deviceId} data={data}/>
            ))}
        </Box>

    </>
  )
}

export default App
