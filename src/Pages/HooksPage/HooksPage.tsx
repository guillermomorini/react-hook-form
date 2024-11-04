export const HooksPage: React.FC = () => {
  return (
    <div>
      <p>
        According to the documentation{" "}
        <a href="https://www.react-hook-form.com/api/">here</a>, there are six
        hooks provided. These are:
      </p>
      <ul>
        <li>
          <a href="https://www.react-hook-form.com/api/useform/">useForm</a>
          <ul>
            <li>mode</li>
            <li>reValidateMode</li>
            <li>defaultValues</li>
            <li>values</li>
            <li>resetOptions</li>
            <li>criteriaMode</li>
            <li>shoudFocusError</li>
            <li>delayError</li>
            <li>shouldUseNativeValidation</li>
            <li>shouldUnregister</li>
            <li>resolver</li>
            <li>context</li>
          </ul>
        </li>
        <li>
          <a href="https://www.react-hook-form.com/api/usecontroller/">
            useController
          </a>
        </li>
        <li>
          <a href="https://www.react-hook-form.com/api/useformcontext/">
            useFormContext
          </a>
        </li>
        <li>
          <a href="https://www.react-hook-form.com/api/usewatch/">useWatch</a>
        </li>
        <li>
          <a href="https://www.react-hook-form.com/api/useformstate/">
            useFormState
          </a>
        </li>
        <li>
          <a href="https://www.react-hook-form.com/api/usefieldarray/">
            useFieldArray
          </a>
        </li>
      </ul>
    </div>
  );
};
