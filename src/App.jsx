import './App.css'
import AnotherComponent from './components/AnotherComponent';
import ChildComponent from './components/ChildComponent'
import Navbar from './components/common/NavBar';
import First from './components/First';
import Fourth from './components/Fourth';
import Second from './components/Second';
import Third from './components/Third';
import AppProvider from "./context/AppContext";


function App() {

  return (
    <>
      <AppProvider>
        <Navbar />
        <div className='mt-20'>
          {/* <First /> */}
          {/* <Second/>
          <Third/>
          <Fourth/> */}
        </div>
        {/* <ChildComponent />
        <AnotherComponent/> */}
      </AppProvider>
    </>
  )
}

export default App
