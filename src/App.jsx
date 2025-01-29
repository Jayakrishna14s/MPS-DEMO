import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "/src/routes/index/Index";
import Signup from "/src/routes/signup/Signup";
import Login from "/src/routes/login/Login";
import Error from "/src/routes/error/Error";
import ForgotPassword from "/src/routes/forgotpassword/ForgotPassword";
import Home from "/src/routes/home/Home";
import Profile from "/src/routes/profile/Profile";
import Prescription from "/src/routes/prescription/Prescription";
import Dashboard from "/src/routes/dashboard/Dashboard";
import Help from "/src/routes/help/Help";
import Cart from "/src/routes/cart/Cart";
import Settings from "/src/routes/settings/Settings";
import FAQs from "/src/routes/faqs/FAQs";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/prescription" element={<Prescription />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/help" element={<Help />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/faqs" element={<FAQs />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
