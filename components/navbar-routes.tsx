"use client"

import { Ghost, PhoneCall } from "lucide-react";
import { Button } from "./ui/button";
import { Popover,
         PopoverContent,
         PopoverTrigger
 } from "@/components/ui/popover";

const NavbarRoutes = () => {
  return (
    <div className="">
      <div>
        {/* TO DO: SEARCH */}
      </div>
      <div>
        <Popover>
            <PopoverTrigger>
                <Button variant="ghost" >
                    <PhoneCall className="h-5 w-5"/>
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <div className="grid gap-2">
                    <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                            Наши контакты:
                        </p>
                    </div>
                    <div className="grid gap-3">
                        <p>
                            <a href={`tel:${87023923222}`}>+7 702 392 3222</a>
                        </p>
                        <p>
                            <a href={`tel:${87023923222}`}>+7 702 392 3222</a>
                        </p>
                    </div>
                </div>
                
            </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default NavbarRoutes;
