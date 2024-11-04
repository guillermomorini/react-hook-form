import { useState } from "react";
import { HooksPage } from "../../Pages/HooksPage/HooksPage";
import { PageName } from "../../Pages/PageName";
import { QuickStartExamplePage } from "../../Pages/QuickStartExamplePage";
import { SandboxPage } from "../../Pages/SandboxPage/SandboxPage";
import { UseFormPage } from "../../Pages/UseFormPage";
import { ValidationPage } from "../../Pages/ValidationPage";

export const useNavigation = () => {
  const [pageName, setPageName] = useState<PageName>("useForm");

  const getPage = (pageName: PageName) => {
    let page;

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
    if (pageName === "useForm") {
      page = <UseFormPage />;
    }

    return page;
  };

  const page = getPage(pageName);

  return { page, setPageName };
};
