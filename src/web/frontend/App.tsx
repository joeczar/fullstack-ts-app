import React, { useState, useEffect } from 'react';
import axios from 'axios'

import './style.css';

const App = () => {
    const [counter, setCounter] = useState(0);
    const [msg, setMsg] = useState("")
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('/users')
                setMsg(data)
            } catch (err) {
                console.log('Error in App GET /users', err);
                
            }
        })();
    }, [])
    return (
        <div>
        <div className='App'>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Press me</button>
        </div>
            <h1>{msg && msg}</h1>
        </div>
    );
};

export default App