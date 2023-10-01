// import LoginButton from './components/LoginButton';
// import LogoutButton from './components/LogoutButton';
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./pages/Home";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const { isAuthenticated } = useAuth0();

const router = createBrowserRouter([
  {
    path: "/",
    element: isAuthenticated ? <Home /> : <Login />,
  },
]);

function App() {
  return (
    <div id="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
