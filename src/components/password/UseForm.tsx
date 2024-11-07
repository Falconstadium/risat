import { useState } from "react";

export function useForm(initialVal: any) {
  const [val, setVal] = useState(initialVal);

  return [
    val,
    (e: any) => {
      setVal({
        ...val,
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      });
    },
  ];
}
