import { useState } from "react";
import { Check, CheckLabel } from "./Buttons.styles";

export function Checkbox({label}) {
  const [checked, setChecked] = useState(false);

  return (
    <CheckLabel>
      <Check
        type="checkbox"
        defaultChecked={checked}
        onChange={() => setChecked(!checked)}
      />
      {label}
    </CheckLabel>
  );
}
