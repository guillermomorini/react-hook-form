import "./App.css";
import { QuickStartExample } from "./components/QuickStartExample";

function App() {
  return (
    <div>
      <h1>This repo is for messing around with react-hook-form.</h1>
      <section>
        <h3>
          Playing around with the get started example found{" "}
          <a href="https://react-hook-form.com/get-started#Quickstart">here</a>.
          <QuickStartExample />
        </h3>
        <form></form>
      </section>
    </div>
  );
}

export default App;
