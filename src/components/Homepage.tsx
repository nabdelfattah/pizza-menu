import Navbar from "./Navbar";
import Menu from "./Menu";
import Footer from "./Footer";

export default function Homepage() {
  return (
    <div className="max-w-7xl m-auto flex flex-col items-center gap-20">
      <Navbar />
      <main>
        <Menu />
      </main>
      <Footer />
    </div>
  );
}
