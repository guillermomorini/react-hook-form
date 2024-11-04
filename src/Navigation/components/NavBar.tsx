import { PageName } from "../../Pages/PageName";

type NavBarProps = {
  setPageName: (pageName: PageName) => void;
};

export const NavBar = ({ setPageName }: NavBarProps) => {
  return (
    <div className="nav-bar">
      <button onClick={() => setPageName("QuickStart")}>QuickStart</button>
      <button onClick={() => setPageName("Validation")}>Validation</button>
      <button onClick={() => setPageName("Sandbox")}>Sandbox</button>
      <button onClick={() => setPageName("Hooks")}>Hooks</button>
      <button onClick={() => setPageName("useForm")}>useForm</button>
    </div>
  );
};
