import React from "react";
import "flowbite";
import Signin from "./pages/Signin";
import SidebarHod from "./components/Sidebar-Hod";
import ThemeSwitcher from "./function/ThemeSwitcher";

function App() {
  ThemeSwitcher();
  return <Signin />;
}

export default App;
