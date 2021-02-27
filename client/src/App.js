import { useState, useEffect } from 'react'
import './App.css';
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import Current from './pages/Current';
import API from './utils/API'
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [days, setDays] = useState([])
  const [hours, setHours] = useState([])
  const width = window.innerWidth > 600 ? 600 : window.innerWidth - 20

  useEffect(() => {
    API.getAllData().then(res => {
      setData(res)
      const tempHours = [...new Set(res.map(record => record.timestamp.split('T')[1].split(':')[0]))]
      const tempDays = [...new Set(res.map(record => record.timestamp.split('T')[0]))]
      setHours(tempHours.sort())
      setDays(tempDays.sort())
      setLoading(false)

    })
  }, [])



  return (
    <>
      {loading && <Loading />}
      {!loading && <>

        <BrowserRouter>
          <div className="flex-col justify-bet h-100 v-100">
            <Header />

            <Switch>
              <Route path="/" exact>
                <Home {...{ data, width, days, hours }} />
              </Route>
              <Route path="/current" exact>
                <Current {...{ data, width, days, hours }} />
              </Route>

              <Route path="*" exact>
                <Notfound />
              </Route>
            </Switch>

            <Footer />
          </div>
        </BrowserRouter>





      </>}
    </>
  );
}

export default App;
