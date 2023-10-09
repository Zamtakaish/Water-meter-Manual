import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
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
