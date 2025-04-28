"use client";
import useSoundAction from "@/hooks/useSound";
import { Button } from "./ui/button";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useState } from "react";
const Testaudio = () => {
  const { lipSound } = useSoundAction();
  const [showAnimation, setShowAnimation] = useState(false);
  const handle = () => {
    lipSound();
    setShowAnimation(true);
    setInterval(() => {
      setShowAnimation(false);
    }, 25000);
  };
  return (
    <div>
      <Button onClick={handle}>testaudio</Button>
      <span>
        {" "}
        {showAnimation && (
          <DotLottieReact
            src="https://lottie.host/1f859e6b-f949-408f-9149-22f749a533ce/yhHT7mY3Kf.lottie"
            loop
            autoplay
            style={{ width: 100, height: 100 }}
          />
        )}
      </span>{" "}
    </div>
  );
};
export default Testaudio;
