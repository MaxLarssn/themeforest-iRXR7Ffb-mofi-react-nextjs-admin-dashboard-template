import { Href } from "@/Constant";
import React, { useState } from "react";
import { Maximize } from "react-feather";

const MaximizeScreen = () => {
  const [fullScreen, setFullScreen] = useState(false);

  const fullScreenHandler = (isFullScreen: boolean) => {
    setFullScreen(isFullScreen);
    if (isFullScreen) {
      document.documentElement.requestFullscreen();
    } else {
      document?.exitFullscreen();
    }
  };

  return (
    <li>
      <a className="text-dark" onClick={() => fullScreenHandler(!fullScreen)} href={Href}>
        <Maximize />
      </a>
    </li>
  );
};

export default MaximizeScreen;
