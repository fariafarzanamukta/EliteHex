
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './Pages/Home/Home';
import Courses from './Pages/Courses/Courses';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import { Toaster } from 'react-hot-toast';
import Contact from './Pages/Contact/Contact';
import CourseDetails from './Pages/Courses/CourseDetrails/CourseDetails';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute'
import Blog from './Pages/Blog/Blog';
import FAQ from './Pages/FAQ/FAQ';
import Error from './Pages/Error/Error';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'home',
          element: <Home></Home>,
          loader: () => fetch(`http://localhost:5000/allcourses`)
        },
        {
          path: 'courses',
          element: <Courses></Courses>,
          loader: () => fetch(`http://localhost:5000/allCourses`)
        },
        {
          path: 'courseDetails/:id',
          element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>,
          loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        },
        {
          path: 'faq',
          element: <FAQ></FAQ>
        },
    {
      path: 'contact',
      element: <Contact></Contact>
    },
    {
      path: 'login',
      element: <Login></Login>
    },
    {
      path: 'register',
      element: <Register></Register>
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ]
    }
  ])
return (
  <div>
    <RouterProvider router={router}></RouterProvider>
    <Toaster></Toaster>
  </div>
);
}

export default App;
