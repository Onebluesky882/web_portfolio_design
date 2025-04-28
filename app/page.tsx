import Draggable from "@/components/drag-drop";
import TestAos from "@/components/testAos";
import Testaudio from "@/components/testaudio";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <TestAos />
      <Draggable />
      <Testaudio />
    </div>
  );
}
