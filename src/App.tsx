import { useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { PageName } from "./Pages/PageName";
import { QuickStartExamplePage } from "./Pages/QuickStartExamplePage";
import { ValidationPage } from "./Pages/ValidationPage";

const getPage = (pageName: PageName) => {
  let page = <QuickStartExamplePage />;

  if (pageName === "QuickStart") {
    page = <QuickStartExamplePage />;
  }
  if (pageName === "Validation") {
    page = <ValidationPage />;
  }

  return page;
};

function App() {
  const [pageName, setPageName] = useState<PageName>("QuickStart");
  const page = getPage(pageName);

  return (
    <div>
      <NavBar setPageName={setPageName} />
      <h1>This repo is for messing around with react-hook-form.</h1>
      {page}
    </div>
  );
}

export default App;
