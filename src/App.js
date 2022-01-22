import logo from "./logo.svg";
import "./App.css";
import AppNav from "./AppNav";
import Appheader from "./Appheader";
import AppMain from "./AppMain";
import Testimonial from "./Testimonial";
import AppFooter from "./AppFooter";

function App() {
  return (
    <div>
      <div class="overlay"></div>
      <div className="headerX">
        <AppNav />
        <Appheader />
      </div>
      <AppMain />
      <Testimonial />
      <AppFooter />
    </div>
  );
}

export default App;
