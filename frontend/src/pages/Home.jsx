import UserCarousel from "../components/UserCarousel";
import BlogSection from "../components/BlogSection";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
function Home() {
  return (
    <div>
      <Nav />
      <UserCarousel />
      <BlogSection />
      <Footer />
    </div>
  );
}
export default Home;
