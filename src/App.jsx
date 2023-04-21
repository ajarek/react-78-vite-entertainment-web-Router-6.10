import { createContext, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './layouts/Main/Main'
import Dashboard,{ dashboardLoader } from './pages/Dashboard/Dashboard'
import Movie,{movieLoader} from './pages/Movie/Movie'
import Series ,{seriesLoader} from './pages/Series/Series'
import Favorites,{favoritesLoader}  from './pages/Favorites/Favorites'
import Error from './pages/Error/Error'
export const AppContext = createContext()
function App() {
  const [favorites, setFavorites] = useState([])
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
        {
          path: '/favorites',
          loader:favoritesLoader,
          element: <Favorites />,
          errorElement: <Error />,
        },
       
       
      ],
    },
  ])

  return (
    <div className="App">
    <AppContext.Provider value={{favorites, setFavorites}}>
    <RouterProvider router={router} />
    </AppContext.Provider>
    </div>
  )
}

export default App
