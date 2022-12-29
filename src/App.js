import AppRouter from "./router/AppRouter";
import { AppProvider } from "./context.js";
function App() {
  return (
    <div className="App">
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </div>
  );
}

export default App;
