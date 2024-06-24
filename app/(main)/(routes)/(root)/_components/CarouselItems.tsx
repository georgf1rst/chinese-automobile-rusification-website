"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface CarouselItemsProps {
    imageSrc: string;
    imageAlt: string;
    classes: any;
    btnHref: string;
}

const CarouselItems = ({
    imageSrc,
    imageAlt,
    classes,
    btnHref

}: CarouselItemsProps) => {

    const router = useRouter();
    const onClick = () => {
        router.push(`${btnHref}`)
    }

    return ( 
        <CarouselItem className={classes}>
            <a onClick={onClick} className="cursor-pointer">
                <div className="">
                    <AspectRatio ratio={18 / 9} className="rounded-md shadow-md">
                        <Image fill className="object-cover overflow-hidden rounded-xl shadow-md" src={imageSrc} alt={imageAlt}/>
                    </AspectRatio>
                </div>
            </a>

        </CarouselItem>
     );
}
 
export default CarouselItems;