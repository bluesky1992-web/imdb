"use client";
{
  /*This is a JavaScript/React code for a component called "DarkModeSwitch".

The "use client" statement is likely specific to the framework or environment that this code is being used in and may be importing some client-side libraries.

The code then imports two different icon components from the "react-icons" library: "MdLightMode" and "BsFillMoonFill".

The "useTheme" hook is then imported from the "next-themes" library, which allows the component to interact with the theme being used on the website/application.

The "DarkModeSwitch" component then uses the "useTheme" hook to get information about the current theme being used, including the system theme and the user-selected theme. The component then checks the current theme to determine whether to display the "MdLightMode" icon (if the theme is currently "dark") or the "BsFillMoonFill" icon (if the theme is currently "light").

The returned JSX code renders the appropriate icon component based on the current theme, and adds an onClick handler to allow the user to toggle the theme by clicking on the icon.

Finally, the "DarkModeSwitch" component is exported as the default export of the module, allowing it to be used in other parts of the application.



*/
}


import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect,useState } from "react";

function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect (()=> {
    setMounted(true)
  },[])
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      { mounted &&  (currentTheme === "dark" ? (
        <MdLightMode
          className="text-xl cursor-pointer hover:text-amber-500"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BsFillMoonFill
          className="text-xl cursor-pointer hover:text-amber-500"
          onClick={() => setTheme("dark")}
        />
      ))}
    </>
  );
}

export default DarkModeSwitch;
