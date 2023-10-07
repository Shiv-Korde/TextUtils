import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm'
import Alert from './Components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);



  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0e1836';
      showAlert("Dark Mode has been Enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.color = '#0e1836';
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }





  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Switch>
          <Route path="/about">
            <About about="About" mode={mode}/>
          </Route>
          <Route path="/"> */}
            <TextForm heading="Enter text for Analysis" mode={mode} showAlert={showAlert} />
          {/* </Route>
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
