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
import CreatePage from "./pages/CreatePage.js";
import RunPage from "./pages/RunPage.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" index element={<HomePage />} />
      <Route path="login" index element={<LoginPage />} />
      <Route path="signup" index element={<SignupPage />} />
      <Route path="create" index element={<CreatePage />} />
      <Route path="edit/:cardKey" index element={<CreatePage />} />
      <Route path="run/:cardKey" index element={<RunPage />} />
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
