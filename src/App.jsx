import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./index.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import MyBlog from "./pages/MyBlog";
// import SignUp from "./pages/SignUp";
// import Login from "./pages/Login";
import Streamline from "./components/Streamline";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Error from "./components/Error";

function App() {
  const location = useLocation();

  const isErrorPage =
    location.pathname !== "/" &&
    !["/blog", "/contact"].includes(location.pathname) &&
    !location.pathname.startsWith("/my-blog/");

  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-blog/:blogId" element={<MyBlog />} />
        {/* <Route path="/sign-up" element={<SignUp />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
      {!isErrorPage && (
        <>
          <Streamline />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
