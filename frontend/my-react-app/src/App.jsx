import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import SignupPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import HomePage from "./pages/HomePage.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" index element={<HomePage />} />
      <Route path="login" index element={<LoginPage />} />
      <Route path="signup" index element={<SignupPage />} />
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
