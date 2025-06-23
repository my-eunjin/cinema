import { useState } from 'react'
import './App.scss'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Header from './component/Header'
import Diretbtn from './component/Diretbtn'
import Eventpage from './component/Eventpage'
import Mainvisual from './component/Mainvisual'
import Nowmovie from './component/Nowmovie'
import Special from './component/Special'

function App() {
  const navigate = useNavigate();
  const [evtId, setEvtId] = useState(1);

  return (
    <div className="CinemaApp">
      <Header />
      <Routes>
        <Route path="/" element={<>
          <div id="sub_section">
            <Mainvisual/>
            <div id="contents">
              <Nowmovie/>
              <Special/>
              <section className="evt">
                <div className="title">
                  <h2>이벤트</h2>
                </div>
                <div className="evt_wrap">
                  <ul className='e1'>
                    <li className="evt1">
                      <img src="/images/event1.jpg" alt="" onClick={()=>{setEvtId(1); navigate('/event/'+1);}} />
                    </li>
                  </ul>
                  <ul className='e2'>
                    <li className="evt2">
                      <img src="/images/event2.jpg" alt="" onClick={()=>{setEvtId(2); navigate('/event/'+2);}} />
                    </li>
                  </ul>
                  <ul className='e3'>
                    <li className="evt3">
                      <img src="/images/event3.jpg" alt="" onClick={()=>{setEvtId(3); navigate('/event/'+3);}} />
                    </li>
                  </ul>
                  <ul className='e4'>
                    <li className="evt4">
                      <img src="/images/event4.jpg" alt=""  />
                    </li>
                  </ul>
                  <ul className='e5'>
                    <li className="evt5">
                      <img src="/images/event5.jpg" alt="" onClick={()=>{setEvtId(4); navigate('/event/'+4);}} />
                    </li>
                  </ul>
                  <ul className='e6'>
                    <li className="evt6">
                      <img src="/images/event6.jpg" alt="" onClick={()=>{setEvtId(6); navigate('/event/'+6);}} />
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </>} />
        <Route path="/event/:id" element={<Eventpage evtId={evtId} />} />
      </Routes>
      <Diretbtn/>
    </div>
  )
}

export default App;
