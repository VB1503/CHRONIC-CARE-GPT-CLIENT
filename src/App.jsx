import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import {ToastContainer} from 'react-toastify'
import Header from './components/nav/Header';
import SocialAuth from './pages/social-auth/SocialAuth'
import "./App.css"
import "./login.css"
import "./Register.css"
import 'react-toastify/dist/ReactToastify.css';
import "./otp.css"
import VerifyOtp from './pages/auth/VerifyOtp';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgetPassword from './pages/auth/ForgetPassword';
import ResetPassword from './pages/auth/ResetPassword';
import COPDForm from './components/Detector';
import Chatbot from './components/Chatbot';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path='/chatbot' element={<Chatbot />} />
      <Route path="/google" element={<SocialAuth />} />
      <Route path="/otp/verify" element={<VerifyOtp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/diagnose" element={<COPDForm />} />
      <Route path='/forget_password' element={<ForgetPassword />} />
      <Route path='/password-reset-confirm/:uid/:token' element={<ResetPassword />} />
    </Route>
  )
)

function App() {

  return (
    <>
    <ToastContainer />
      <RouterProvider router={router}/>
    </>
  );
}

export default App;