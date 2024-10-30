import { useState } from "react";
import { PageName } from "../Pages/PageName";
import { QuickStartExamplePage } from "../Pages/QuickStartExamplePage";
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

    return page;
  };

  const page = getPage(pageName);

  return { page, setPageName };
};
