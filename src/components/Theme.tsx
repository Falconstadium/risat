import { useContext } from "react";
import { themeContext } from "../context/theme";
import { AnimationLoading } from "./AnimationLoading";

export default function Theme() {
  const { theme } = useContext(themeContext);
  return (
    <div className={`${theme && "dark"} w-full dark:bg-black-100`}>
      <AnimationLoading theme={theme} />
    </div>
  );
}
