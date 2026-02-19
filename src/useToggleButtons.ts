import { useCallback, useState } from "react";

type Button = {
  name: string;
  isActive: boolean;
};

//If the key wouldn't be fixed:
// type ButtonState = Record<string, Button>;
//But our keys are fixed, so:
type ButtonState = {
  buttonA: Button;
  buttonB: Button;
  buttonC: Button;
  buttonD: Button;
  buttonE: Button;
};

export function useToggleButtons() {
  const [buttons, setButtons] = useState<ButtonState>({
    buttonA: {
      name: "A",
      isActive: false,
    },
    buttonB: {
      name: "B",
      isActive: false,
    },
    buttonC: {
      name: "C",
      isActive: false,
    },
    buttonD: {
      name: "D",
      isActive: false,
    },
    buttonE: {
      name: "E",
      isActive: false,
    },
  });

  const toggleButton = useCallback(
    (id: keyof ButtonState) => {
      const afterToggle = {
        ...buttons,
        [id]: {
          ...buttons[id],
          isActive: !buttons[id].isActive,
        },
      };
      setButtons(afterToggle);
    },
    [buttons],
  );

  return {
    buttons,
    toggleButton,
  };
}
