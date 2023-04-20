import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './layouts/Main/Main'
import Dashboard from './pages/Dashboard/Dashboard'
import Movie from './pages/Movie/Movie'
import Series from './pages/Series/Series'
import Error from './pages/Error/Error'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Dashboard />,
          errorElement: <Error />,
        },
        {
          path: '/movie',
          element: <Movie />,
          errorElement: <Error />,
        },
        {
          path: '/series',
          element: <Series />,
          errorElement: <Error />,
        },
       
       
      ],
    },
  ])

  return (
    <div className="App">
    
    <RouterProvider router={router} />
    </div>
  )
}

export default App
