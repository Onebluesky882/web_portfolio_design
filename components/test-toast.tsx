"use client";
import { toast } from "@/hooks/useToast";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

export default function ToastTester() {
  const dismissRef = useRef<() => void>(null);
  const handleClick = () => {
    const { dismiss } = toast({
      title: "🧪 Toast Test",
      description: "This is a test toast message.",
      duration: 5000,
    });
    dismissRef.current = dismiss;
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const toastEl = document.querySelector('[role="status"]');

      if (toastEl && !toastEl.contains(e.target as Node)) {
        console.log("Clicked outside");
        dismissRef.current?.();
      } else {
        console.log("click inside the toast ");
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);
  return <Button onClick={handleClick}>Show Toast</Button>;
}
