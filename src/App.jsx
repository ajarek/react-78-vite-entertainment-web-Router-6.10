import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './layouts/Main/Main'
import Dashboard,{ dashboardLoader } from './pages/Dashboard/Dashboard'
import Movie,{movieLoader} from './pages/Movie/Movie'
import Series ,{seriesLoader} from './pages/Series/Series'
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
          loader: dashboardLoader,
          errorElement: <Error />,
        },
        {
          path: '/movie',
          element: <Movie />,
          loader: movieLoader,
          errorElement: <Error />,
        },
        {
          path: '/series',
          element: <Series />,
          loader: seriesLoader,
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
