import { getPastLaunches } from "./service";
import { useState, useEffect } from 'react';
import Header from "./components/Header";
import Select from "./components/Select";
import Launches from "./components/Launches";

const App = () => {
  const [pastLaunches, setPastLaunches] = useState([])
  const [year, setYear] = useState('')

  useEffect(() => {
    getPastLaunches().then(res => {
      setPastLaunches(res.data)
    })
  }, [])

  return (
    <div>
      <Header />
      <hr></hr>
      <Select pastLaunches={pastLaunches} setYear={setYear} />
      <div>
        <h2 style={{ textAlign: 'center' }}>Past Launches</h2>
        <Launches launches={pastLaunches} year={year} />
      </div>
    </div>
  );
}

export default App;
