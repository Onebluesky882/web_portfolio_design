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

const DrawerMenu = () => {
  const [isOpen, setIsOpen] = useState(true);
  const i = Array.from({ length: 10 });

  return (
    <>
      {isOpen && (
        <div className="cursor-grab active:cursor-grabbing">
          <Drawer>
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
      )}
    </>
  );
};
export default DrawerMenu;
