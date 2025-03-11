import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import HooksOutlet from './Outlets/hooksOutlet.tsx'
import ButtonExample from './Outlets/hooks/main.tsx'
import UseStateDemo from './Outlets/hooks/useStateDemo.tsx'
import UseStateDynamicPage from './Outlets/hooks/useStateDynamicPage.tsx'
// import { Form } from './Form.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />}/>
      <Route path='/hooks' element={<HooksOutlet />}>
        <Route index element={<ButtonExample />} />
        <Route path='useState' element={<UseStateDemo />} />
        <Route path="useState/:id" element={<UseStateDynamicPage />} />
        {/* Add more nested routes here if needed */}
      </Route>
    </>

  ),
)

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <RouterProvider router={router} />
  // </StrictMode>,
)
