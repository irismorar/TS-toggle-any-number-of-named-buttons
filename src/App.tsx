import "./App.css";
import { Button } from "./Button";
import { useToggleButtons } from "./useToggleButtons";

export default function App() {
  const {buttons, toggleButton} = useToggleButtons();
  return(
    <main>
      <h1>Toggle them all!</h1>
      <section>
        <Button currentButton={buttons.buttonA} onToggle={() => toggleButton("buttonA")}/>
        <Button currentButton={buttons.buttonB} onToggle={() => toggleButton("buttonB")}/>
        <Button currentButton={buttons.buttonC} onToggle={() => toggleButton("buttonC")}/>
        <Button currentButton={buttons.buttonD} onToggle={() => toggleButton("buttonD")}/>
        <Button currentButton={buttons.buttonE} onToggle={() => toggleButton("buttonE")}/>
      </section>
    </main>
  )
}