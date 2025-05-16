
import About from "./Com/About";
import Home from "./Com/Home";
import Skills from "./Com/Skills";
import Works from "./Com/Works";
import LayOut from "./Com/LayOut";
import Contact from "./Com/Contact";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '/',
    element: <LayOut />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'skills', element: <Skills /> },
      { path: 'work', element: <Works /> },
      { path: 'contact', element: <Contact /> }
    ]
  }
])
function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
