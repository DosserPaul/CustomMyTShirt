import {useSnapshot} from "valtio";
import state from "../store";
import {getContrastingColor} from "../config/helpers.ts";

interface CustomButtonProps {
  type: "filled" | "outline" |"no",
  title: string,
  onClick: () => void,
  customStyles?: string
}

const CustomButton = ({type, title, onClick, customStyles}: CustomButtonProps) => {
  const snap = useSnapshot(state);

  const generateStyle = (type: "filled" | "outline" | "no") => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color)
      }
    }else if (type === "outline") {
      return {
        borderWidth: "1px",
        borderColor: snap.color,
        color: snap.color
      }
    }
  }

  return (
    <button
      onClick={onClick}
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
    >
      {title}
    </button>
  )
}

export default CustomButton
