import { useState } from "react";
import { HooksPage } from "../Pages/HooksPage/HooksPage";
import { PageName } from "../Pages/PageName";
import { QuickStartExamplePage } from "../Pages/QuickStartExamplePage";
import { SandboxPage } from "../Pages/SandboxPage/SandboxPage";
import { ValidationPage } from "../Pages/ValidationPage";

export const useNavigation = () => {
  const [pageName, setPageName] = useState<PageName>("QuickStart");

  const getPage = (pageName: PageName) => {
    let page = <QuickStartExamplePage />;

    if (pageName === "QuickStart") {
      page = <QuickStartExamplePage />;
    }
    if (pageName === "Validation") {
      page = <ValidationPage />;
    }
    if (pageName === "Sandbox") {
      page = <SandboxPage />;
    }
    if (pageName === "Hooks") {
      page = <HooksPage />;
    }

    return page;
  };

  const page = getPage(pageName);

  return { page, setPageName };
};
