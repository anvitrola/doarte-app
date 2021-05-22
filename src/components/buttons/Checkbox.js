import { React, useState } from "react";

export function Checkbox() {
  const [checked, setChecked] = useState(false);

  return (
    <label className="termText">
      <input
        className="checkbox"
        type="checkbox"
        defaultChecked={checked}
        onChange={() => setChecked(!checked)}
      />
      Li e concordo com as Condições e Termos de Uso.
    </label>
  );
}
