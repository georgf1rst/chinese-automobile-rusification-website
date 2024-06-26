"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface CarouselItemsProps {
    imageSrc: string;
    imageAlt: string;
    classes?: any;
    btnHref: string;
    itemTitle: string;
    itemDescription?: string;
}

const CarouselItems = ({
    imageSrc,
    imageAlt,
    classes,
    btnHref,
    itemTitle,
    itemDescription,

}: CarouselItemsProps) => {

    const router = useRouter();
    const onClick = () => {
        router.push(`${btnHref}`)
    }

    return ( 
        <CarouselItem className={cn("md:grid md:basis-1/2 xl:basis-1/3 h-full", classes)}>
            <a onClick={onClick} className="cursor-pointer">
                <div>
                    <AspectRatio ratio={16 / 9} className="rounded-xl shadow-md">
                        <Image fill className="object-cover overflow-hidden rounded-xl shadow-md" src={imageSrc} alt={imageAlt}/>
                    </AspectRatio>
                </div>
            </a>
            <div className="md:min-h-[125px] max-h-max flex flex-col justify-between">
                <div className="flex-col justify-between items-center text-center">
                    <h3 className="lg:text-xl md:text-lg text-lg font-normal text-slate-700">
                        {itemTitle}
                    </h3>
                    {!!itemDescription ? <p className="text-muted-foreground text-sm">
                        {itemDescription}
                    </p> : null}
                </div>
                <div className="justify-center mt-2 hidden md:flex ">
                    <Button variant="outline" onClick={onClick}>
                        Подробнее
                    </Button>
                </div>
            </div>
        </CarouselItem>
     );
}
 
export default CarouselItems;