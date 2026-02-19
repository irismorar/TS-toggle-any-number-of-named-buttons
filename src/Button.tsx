type CurrentButton = {
  name: string;
  isActive: boolean;
}

type DestructuredProps = {
  currentButton: CurrentButton;
  onToggle: () => void;
}

export function Button({currentButton, onToggle}: DestructuredProps) {
  return <button onClick={onToggle} style={{backgroundColor: currentButton.isActive? "lightblue" : "#444", color: currentButton.isActive? "#444":"#aaa"}}>{currentButton.name}</button>
}