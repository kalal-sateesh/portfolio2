import "./App.css";
import AppFooter from "./components/AppFooter/AppFooter";
import AppHeader from "./components/AppHeader/AppHeader";
import PageRoutes from "./routes/PageRoutes";

function App() {
  return (
    <>
      <AppHeader />
      <PageRoutes />
      <AppFooter />
    </>
  );
}

export default App;
