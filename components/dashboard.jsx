import React from 'react';
import LiquidGauge from 'react-liquid-gauge'; // Importa la librería de gráfica de gauge
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import dynamic from 'next/dynamic'; // Importa dynamic de Next.js

// Importa GaugeChart de react-gauge-chart de manera dinámica
const GaugeChart = dynamic(() => import('react-gauge-chart'), { ssr: false });

const Dashboard = ({ weight, weightData }) => {
  return (
    <div className="min-h-screen bg-white text-black mt-16 pb-16 flex flex-col items-center justify-center">
    <h1 className="text-3xl font-bold mb-7">GRÁFICA DE PESO:</h1>
    <br></br>
      <div style={{ display: 'inline-block', marginRight: '20px' }}>
        <LiquidGauge
          width={200}
          height={200}
          value={weight} // Usa el peso como valor para la gráfica de gauge
          minValue={0} // Establece el valor mínimo de la gráfica
          maxValue={50} // Establece el valor máximo de la gráfica
          textColor="#000000"
          textSize={1}
          textOffsetX={0}
          textOffsetY={0}
          textRenderer={(props) => {
            const value = Math.round(props.value);
            const radius = Math.min(props.height / 2, props.width / 2);
            const textPixels = (props.textSize * radius / 2);
            const valueStyle = {
              fontSize: textPixels
            };
            const percentStyle = {
              fontSize: textPixels * 0.6
            };

            return (
              <tspan>
                <tspan className="value" style={valueStyle}>{value}</tspan>
                <tspan style={percentStyle}>g</tspan>
              </tspan>
            );
          }}
        />
      </div>
      <br></br>
      <div style={{ display: 'inline-block' }}>
        <LineChart
          width={500}
          height={300}
          data={weightData}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" tickFormatter={(timestamp) => new Date(timestamp).toLocaleTimeString()} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="weight" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </div>
    </div>
  );
};

export default Dashboard;