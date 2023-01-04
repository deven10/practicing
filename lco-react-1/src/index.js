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
  useParams,
  NavLink,
  useNavigate,
  useLocation
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
      <Route path="/dashboard" element={<Dashboard />} />
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
  const courseList = ["React", "Angular", "Vue", "Python", "NodeJS"];
  const randomCourseName = courseList[Math.floor(Math.random() * courseList.length)];

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
      <h5>MORE COURSES</h5>
      <NavLink style={({isActive}) => {
        return {
          backgroundColor: isActive ? "pink" : "yellow"
        }
      }} to={`/learn/courses/${randomCourseName}`}>
        {randomCourseName}
      </NavLink>{" "}
      <NavLink className="btn btn-dark" to={'tests'}>
        tests
      </NavLink>
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
  const navigate = useNavigate();
  const {courseid} = useParams();
  return(
    <div>
      <h2>USE PARAMS {courseid}</h2>
      <button 
        onClick={() => {
          navigate("/dashboard", { state: courseid } );
        }}
        className='btn btn-warning'>Price
      </button>
        <Link 
          to="/dashboard" state="DJANGO"
          className='btn btn-info' >
          Test Link
        </Link>
    </div>
  );
}

function Dashboard(){
  const location = useLocation();
  return(
    <div>
      <h2>
          Course Name = {location.state}
      </h2>
      
    </div>
  );
}

reportWebVitals();
