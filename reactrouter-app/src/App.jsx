import Navbar from "./Components/Navbar/Navbar"
import { Routes , Route } from 'react-router-dom'
import Courses from "./Pages/Courses/Courses"
import CourseCategory from "./Pages/CourseCategory/CourseCategory"



function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route Component={Courses} path='/'/>
        <Route Component={CourseCategory} path='/:category/:subCategory'/>
      </Routes>
    </>
  )
}

export default App
