import {
  ModeAllForm,
  ModeOnBlurForm,
  ModeOnChangeForm,
  ModeOnSubmitForm,
  ModeOnTouchedForm,
} from "./forms/ModeForms";

export const ModeProp: React.FC = () => {
  return (
    <article>
      <h3>The Mode Prop</h3>
      <p>
        the mode prop determines the form's validation behavior before the data
        is submitted. its default value is <strong>"onSubmit"</strong>. The
        possible values are:
        <ul>
          <li>onChange</li>
          <li>onBlur</li>
          <li>onSubmit</li>
          <li>onTouched</li>
          <li>all</li>
        </ul>
        The main events you can trigger validation on are:
        <ul>
          <li>onSubmit</li>
          <li>onBlur</li>
          <li>onChange</li>
        </ul>
        You can mix these together in different ways, based on what mode is set
        to.
      </p>
      <ModeOnSubmitForm />
      <ModeOnBlurForm />
      <ModeOnChangeForm />
      <ModeOnTouchedForm />
      <ModeAllForm />
    </article>
  );
};
