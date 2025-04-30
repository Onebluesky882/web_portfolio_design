"use client";
import useAos from "./useAos";

export const UseAnimate = ({ children }: React.PropsWithChildren) => {
  useAos();

  return <>{children}</>;
};
