
import './App.css'
import { About } from './components/about'
import { AppLayout } from './components/appLayout'

//import this two
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import ErrorPage from './components/error'
function App() {

 
  //routing npm install --save react-browser-router
  //declare like this path and element
  const appRoutes= createBrowserRouter([
  {
    path:'/',
    element:<AppLayout></AppLayout>,
    children:[{
      path:'/about',
      element:<About></About>
    }],
    errorElement:<ErrorPage></ErrorPage>

  },
  {
    path:'/about',
    element:<About></About>
  }
  ])
  return (
   <>
   <span>
      {/*this passes router provider */}
      <RouterProvider router={appRoutes} />
  
   
   </span>
   </>
  )
}



export default App
