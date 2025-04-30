import { useState } from "react";
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

export default function DrawerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* External trigger */}
      <Button onClick={() => setOpen(true)}>Open Drawer (External)</Button>

      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="outline">Open Drawer</Button>
        </DrawerTrigger>

        <DrawerContent>
          <p className="p-4">This is drawer content</p>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
