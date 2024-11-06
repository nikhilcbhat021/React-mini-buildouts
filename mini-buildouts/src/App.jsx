import XFlags from "./mini-projects/Xflags";
import Stopwatch from "./mini-projects/Stopwatch";
import { useState, Suspense } from "react";

function App() {
  const ProjectsArray = {
    XFlags: <XFlags/>,
    Stopwatch: <Stopwatch/>,
  };
  const [renderProject, setRenderProject] = useState(<>
    <h1 style={{textAlign:'center'}}>
      Welcome to my projects!
    </h1>
  </>);

  return (
    <>
    <div style={{display: 'flex', gap: '15px', flexWrap: 'wrap', padding: '10px'}}>
      {
        Object.keys(ProjectsArray).map(key => {
          return (
            <button key={key} onClick={() => setRenderProject(ProjectsArray[key])}>{key}</button>
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
    </>
  )
}

export default App
