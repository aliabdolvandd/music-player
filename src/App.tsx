import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./router/animated";

// import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <div className="bg-[var(--color-G1-background)] min-h-screen w-full overflow-x-hidden">
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
