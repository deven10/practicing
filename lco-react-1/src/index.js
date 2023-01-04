import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter, 
  Routes, 
  Route, 
  Navigate,
  Link,
  Outlet,
  useParams
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/myapps" element={<Navigate replace to="/learn" />}/>
      <Route path="/Learn" element={<Learn />}> 
        <Route path='courses' element={<Courses/>}>
          <Route path=":courseid" element={<CourseId/>}/>
        </Route>
        <Route path='bundles' element={<Bundles/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);

function Home(){
  return(
    <div>
      <h2>Hello Baby</h2>
    </div>
  );
}

function Learn(){
  return(
    <div>
      <h2>Learn</h2>
      <h4>Course Section</h4>
      <Link className='btn btn-success' to="/learn/courses">Courses</Link>{" "}|{" "}
      <Link className='btn btn-primary' to="/learn/bundles">Bundles</Link>
      <Outlet />
    </div>
  );
}

function Courses(){
  return(
    <div>
      <h2>Courses List</h2>
      <h4>
        <ul>
          <li>Course 1</li>
          <li>Course 2</li>
          <li>Course 3</li>
        </ul>
      </h4>
      <Outlet />
    </div>
  );
}

function Bundles(){
  return(
    <div>
      <h2>Bundles List</h2>
      <h4>
        <ul>
          <li>Bundle 1</li>
          <li>Bundle 2</li>
          <li>Bundle 3</li>
        </ul>
      </h4>
    </div>
  );
}

function CourseId(){
  const {courseid} = useParams();
  return(
    <div>
      <h2>USE PARAMS {courseid}</h2>
    </div>
  );
}

reportWebVitals();
