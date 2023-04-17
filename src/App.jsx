import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './layouts/Main/Main'
import Dashboard from './pages/Dashboard/Dashboard'
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
