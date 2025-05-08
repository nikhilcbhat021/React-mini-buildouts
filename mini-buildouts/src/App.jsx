import { useState, Suspense } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';

// buildouts
import XFlags from "./mini-projects/Xflags";
import Stopwatch from "./mini-projects/Stopwatch";
import FullNameDisplayForm from "./mini-projects/Fullnamedisplay";
import CounterApp from "./mini-projects/CounterApp";
import Calculator from "./mini-projects/Calculator";
import ClassCounter from './mini-projects/ClassCounter';
import EmployeePagination from './mini-projects/EmployeePagination';
import XLogin from "./mini-projects/XLogin";
import MiniWeather from './mini-projects/MiniWeather';
import DictSpellCheck from './mini-projects/DictSpellCheck';
import XStates from './mini-projects/XStates';
import XDictionary from "./mini-projects/XDictionary";

function App() {

  const ProjectsArray = {
    XFlags: <XFlags/>,
    Stopwatch: <Stopwatch/>,
    FullNameDisplayForm: <FullNameDisplayForm/>,
    CounterApp: <CounterApp/>,
    Calculator: <Calculator/>,
    ClassCounter: <ClassCounter/>,
    EmployeePagination: <EmployeePagination/>,
    XLogin: <XLogin/>,
    MiniWeather: <MiniWeather/>,
    DictSpellCheck: <DictSpellCheck/>,
    XStates: <XStates/>,
    XDictionary: <XDictionary />,
  };

  return (<>

    <Routes>
      <Route exact path="/" element={<LandingPage ProjectsArray={ProjectsArray}/>}/>
      {
        Object.keys(ProjectsArray).map((key) => {
          console.log(key.toLowerCase());
          return <Route key={key} path={`/${key.toLowerCase()}`} element={
            (
              <div style={{padding: '20px'}}>
                {ProjectsArray[key]}
              </div>
            )
          }/>
        })
      }
    </Routes>
  </>)
}


const LandingPage = ({ProjectsArray}) => {


  const [renderProject, setRenderProject] = useState(<>
    <h1 style={{textAlign:'center'}}>
      Welcome to my projects!
    </h1>
  </>);

  const navigate = useNavigate();

  return (<>
    <div style={{display: 'flex', gap: '15px', flexWrap: 'wrap', padding: '10px'}}>
      {
        Object.keys(ProjectsArray).map(key => {
          return (
            // setRenderProject(ProjectsArray[key])
            <button 
              key={key} 
              onClick={() => navigate(key.toLowerCase())}
            >{key}</button>
          )
        })  
      }
      </div>
    <hr />

    <Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',height:'100%', width:'100%'}}>Loading...</div>}>
      <div style={{padding: '10px'}}>

      </div>
      {renderProject}
    </Suspense>
  </>)
}
export default App
