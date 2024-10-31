import "./App.css";
import { NavBar } from "./Navigation/components/NavBar";
import { useNavigation } from "./Navigation/hooks/useNavigation";

function App() {
  const { page, setPageName } = useNavigation();

  return (
    <div>
      <NavBar setPageName={setPageName} />
      <h1>This repo is for messing around with react-hook-form.</h1>
      {page}
    </div>
  );
}

export default App;
