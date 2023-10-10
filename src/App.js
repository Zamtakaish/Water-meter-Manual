import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import {useState} from "react";

function App() {

    const [currentDeviceClass, setCurrentDeviceClass] = useState(0)

    function deviceClassChangeHandler(newState){
        setCurrentDeviceClass(newState);
    }

    return (
         <div className='App'>
             <Header changeDeviceClass={deviceClassChangeHandler}/>
             <Main deviceClass={currentDeviceClass}/>
             <Footer />
         </div>
      );
}

export default App;
