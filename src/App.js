import Map from './components/Map'
import {React, useState, useEffect} from 'react'
import Spin from './components/Spin.js'
import Header from './components/Header'


function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
      const {events} = await response.json()

      setData(events);
      setLoading(false);
    }

    fetchData()
  }, [])

  return (
    <div>
      <Header />
      {!loading ? <Map data={data} /> : < Spin />}
    </div>
  );
}

export default App;
