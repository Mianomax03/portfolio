// import React from 'react'
// import "./experience.css"

// const Experience = () => {
//   return (
//     <div className="app__experience" id="experience">
//           <div className="bar">
//               <div className="info">
//                 <span>HTML</span>
//               </div>
//               <div className="progress-line html">
//                 <span></span>
//               </div>
//           </div>
//           <div className="bar">
//               <div className="info">
//                 <span>Css</span>
//               </div>
//               <div className="progress-line css">
//                 <span></span>
//               </div>
//           </div>
//           <div className="bar">
//               <div className="info">
//                 <span>JavaScript</span>
//               </div>
//               <div className="progress-line javascript">
//                 <span></span>
//               </div>
//           </div>
//           <div className="bar">
//               <div className="info">
//                 <span>React</span>
//               </div>
//               <div className="progress-line react">
//                 <span></span>
//               </div>
//           </div>
//           <div className="bar">
//               <div className="info">
//                 <span>Node</span>
//               </div>
//               <div className="progress-line node">
//                 <span></span>
//               </div>
//           </div>
//     </div>
//   )
// }

// export default Experience


import React from 'react';
import './experience.css';

const Experience = () => {
  

  return (
   
    <div className="app__experience" id="experience">
     <p className='app__experience-text'>Experience</p>
      <div className="bar">
        <div className="info">
          <span>HTML</span>
        </div>
        <div className="progress-line html" >
          <span></span>
        </div>
      </div>
      <div className="bar">
        <div className="info">
          <span>Css</span>
        </div>
        <div className="progress-line css" >
          <span></span>
        </div>
      </div>
      <div className="bar">
        <div className="info">
          <span>JavaScript</span>
        </div>
        <div className="progress-line javascript">
          <span></span>
        </div>
      </div>
      <div className="bar">
        <div className="info">
          <span>React</span>
        </div>
        <div className="progress-line react" >
          <span></span>
        </div>
      </div>
      <div className="bar">
        <div className="info">
          <span>Node</span>
        </div>
        <div className="progress-line node" >
          <span></span>
        </div>
      </div>
    </div>
    
  );
};

export default Experience;
