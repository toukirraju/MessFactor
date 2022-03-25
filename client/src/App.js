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
import ManagerRegistration from "./pages/Registration&Login/ManagerRegistration";
import Login from "./pages/Registration&Login/Login";
import User from "./pages/user/UserPage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserRegistration from "./pages/Registration&Login/UserRegistration";

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
              <Route path="/user" element={<User />} />
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
              <Route path="/manRegister" element={<ManagerRegistration />} />
              <Route path="/userRegister" element={<UserRegistration />} />
            </>
          )}
        </Routes>
        <AuthVerify logOut={logOut} />
      </BrowserRouter>
    </>
  );
}

export default App;
