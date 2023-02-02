import AppRouter from "./router/AppRouter";
import { AppProvider } from "./context.js";
import Header from "./components/Header";
import { useSelector } from "react-redux";
function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <div className="App">
      <AppProvider>
        <Header />
        <AppRouter />
      </AppProvider>
    </div>
  );
}

export default App;
