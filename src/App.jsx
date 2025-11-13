import BlogPost from "./components/BlogPost";
import Footer from "./common/Footer.jsx";
import Header from "./common/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndividualPostPage from "./pages/IndividualPostPage.jsx"
import BlogPostsPage from "./pages/BlogPostsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import Test from "./Test.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<BlogPostsPage />} />
            <Route path="/blog/:id" element={<IndividualPostPage />} />
            <Route path="/contacts" element={<ContactPage />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
