import IntroView from "./sections/intro/view/intro-view";
import { Navbar } from "./sections/navbar/navbar";

function App() {
  const count = 0;
  console.log("🚀 ~ App ~ count:", count);

  return (
    <div>
      <Navbar />
      <IntroView />
    </div>
  );
}

export default App;
