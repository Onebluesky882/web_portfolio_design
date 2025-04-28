"use client";
import useAos from "./useAos";

export const UseCustomHooks = ({ children }: React.PropsWithChildren) => {
  useAos();

  return <>{children}</>;
};
