"use client ";
import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { useToggleDrawer } from "@/app/store/useDrawerToggle";

const DrawerMenu = () => {
  const i = Array.from({ length: 10 });
  const { toggleDrawer } = useToggleDrawer();
  console.log("footer : toggleDrawer : ", toggleDrawer);
  return (
    <>
      <div className="cursor-grab active:cursor-grabbing">
        <Drawer open={toggleDrawer}>
          <DrawerTrigger asChild>
            <Button variant="outline">Open Drawer</Button>
          </DrawerTrigger>
          <DrawerContent className="cursor-grab">
            <DrawerTitle>Menu</DrawerTitle>
            {i.map((_, index) => (
              <div
                key={index}
                onClick={() => {}}
                className="flex justify-center"
              >
                menu : {index + 1}
              </div>
            ))}
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};
export default DrawerMenu;
