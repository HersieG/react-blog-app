import BlogPost from "./components/BlogPost";
import Footer from "./common/Footer.jsx";
import Header from "./common/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndividualPostPage from "./pages/IndividualPostPage.jsx";
import BlogPostsPage from "./pages/BlogPostsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import Test from "./Test.jsx";
import Login from "./login/Login.jsx";
import { AuthProvider } from "./login/authWrapper/AuthProvider.jsx";
import LandingPage from "./pages/LandingPage.jsx";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen justify-center">
          <Header />

          <main className="flex-1">
            <Routes>
              <Route path="/blogs" element={<BlogPostsPage />} />
              <Route path="/blog/:id" element={<IndividualPostPage />} />
              <Route path="/contacts" element={<ContactPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/test" element={<Test />} />
              <Route path="/" element={<LandingPage />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
