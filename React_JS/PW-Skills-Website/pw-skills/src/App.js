
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import About from "./components/about";
import Contact from "./components/contact";

import RouterMain from "./components/routerMain";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path:"/",
    element: <RouterMain />,
    children:[
      {
        path:"/",
        element: <Main />
      },
      {
        path:"/about",
        element: <About />
      },
      {
        path:"/contact",
        element: <Contact />
      }
    ]
}
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
