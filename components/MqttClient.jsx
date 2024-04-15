'use client'
/*import { useEffect, useState } from 'react';
import mqtt from 'mqtt';
import LiquidGauge from 'react-liquid-gauge'; // librería de gráfica de gauge

const MqttClient = () => {
  const [weight, setWeight] = useState(20); // Inicia el peso en 20
  const [data, setData] = useState(null);

  useEffect(() => {
    const client = mqtt.connect('wss://broker.emqx.io:8084/mqtt');

    client.on('connect', function () {
      console.log('Conectado al broker MQTT');
      client.subscribe('outTopic', function (err) {
        if (!err) {
          console.log('Suscrito al topic');
        } else {
          console.error('Error de suscripción:', err);
        }
      });
    });

    client.on('message', (topic, message) => {
      console.log('Mensaje recibido en el topic ${topic}: ${message.toString()}');
      try {
        const parsedData = JSON.parse(message.toString());
        setData(parsedData);
        if (parsedData.Peso) {
          setWeight(parsedData.Peso);
        }
      } catch (error) {
        console.error("Error al analizar el mensaje JSON:", error);
      }
    });
    return () => {
      if (client) {
        client.end();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-700 text-white mt-16 pb-16 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-7">GRÁFICA DE PESO:</h1>
        <br></br>
        <div className="flex items-center">
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
                            <tspan style={percentStyle}>%</tspan>
                        </tspan>
                    );
                }}
            />
        </div>
    </div>


  );
};

export default MqttClient;*/

import React, { useEffect, useState } from 'react';
import mqtt from 'mqtt';
import Dashboard from './Dashboard';

const MqttClient = () => {
 const [weight, setWeight] = useState(0); // Inicializa el peso a 0
 const [weightData, setWeightData] = useState([]);

 useEffect(() => {
    const client = mqtt.connect('ws://broker.emqx.io:8083/mqtt'); // Asegúrate de que esta URL coincida con la de tu broker MQTT

    client.on('connect', function () {
      console.log('Conectado al broker MQTT');
      client.subscribe('outTopic', function (err) {
        if (!err) {
          console.log('Suscrito al topic');
        } else {
          console.error('Error de suscripción:', err);
        }
      });
    });

    client.on('message', (topic, message) => {
      console.log('Mensaje recibido en el topic ${topic}: ${message.toString()}');
      try {
        const parsedData = JSON.parse(message.toString());
        if (parsedData && parsedData.Peso) {
          setWeight(parsedData.Peso);
          setWeightData((prevData) => [
            ...prevData,
            { timestamp: Date.now(), weight: parsedData.Peso },
          ]);
        }
      } catch (error) {
        console.error("Error al analizar el mensaje JSON:", error);
      }
    });
    
    return () => {
      if (client) {
        client.end();
      }
    };
 }, []);

 return (
    <Dashboard weight={weight} weightData={weightData} />
 );
};

export default MqttClient;