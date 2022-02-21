import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";
import NavigationBar from "./components/navigationBar/NavigationBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import ModeratorPage from "./pages/moderator/ModeratorPage";
import AuthVerify from "./common/AuthVerify";
import { logout } from "./redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import ApartmentDetails from "./pages/moderator/Apartments/ApartmentDetails";
import Registration from "./pages/Registration&Login/Registration";
import Login from "./pages/Registration&Login/Login";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const logOut = () => {
    dispatch(logout());
  };
  return (
    <>
      <div>
        <ToastContainer />
      </div>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          {isLoggedIn ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              {user.type === "manager" ? (
                <>
                  <Route path="/mod" element={<ModeratorPage />} />
                  <Route path="/apartment" element={<ApartmentDetails />} />
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Registration />} />
            </>
          )}
        </Routes>
        <AuthVerify logOut={logOut} />
      </BrowserRouter>
    </>
  );
}

export default App;
