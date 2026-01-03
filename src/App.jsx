import AppRoutes from "./routes/AppRoutes.jsx";
import Navbar from "./components/Navbar.jsx";
import LoadingPage from "./components/LoadingPage.jsx";
import {useLoading} from "./contextApi/useLoading"; 
function App() {
  const {loading} = useLoading();

  return (
    <>
      <Navbar />

      {loading && <LoadingPage />}

      <AppRoutes />
    </>
  );
}

export default App;
