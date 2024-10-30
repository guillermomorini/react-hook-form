import { Practice } from "./Practice";
import { FirstExample } from "./QuickStartExample/FirstExample";

export const QuickStartExamplePage: React.FC = () => {
  return (
    <div>
      <section>
        <h3>
          Playing around with the get started example found{" "}
          <a href="https://react-hook-form.com/get-started#Quickstart">here</a>.
        </h3>
        <FirstExample />
      </section>
      <section>
        <h3>Practice</h3>
        <Practice />
      </section>
    </div>
  );
};
