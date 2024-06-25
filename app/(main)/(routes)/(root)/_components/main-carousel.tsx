"use client"

import {
    Carousel,
    CarouselContent,
  } from "@/components/ui/carousel"
import CarouselItems from "@/app/(main)/(routes)/(root)/_components/CarouselItems";

import Autoplay from "embla-carousel-autoplay";

const MainCarousel = () => {
    
    return ( 
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 4000,
                    }),
                ]}
                className="w-full"
            >
                <CarouselContent className="">
                    <CarouselItems imageSrc="/slider-images/Starline.jpeg" imageAlt="pic-1" classes="" btnHref="/catalog/signalisations/starline" itemTitle="StarLine." itemDescription="Установка автосигнализаций."/>
                    <CarouselItems imageSrc="/slider-images/ac-automobile.jpg" imageAlt="Заправка и ремонт кондиционеров" classes="" btnHref="/services/auto-air-conditioning" itemTitle="Не дайте жаре помешать вашему комфорту!" itemDescription="Заправка и ремонт Автокондиционеров."/>
                    <CarouselItems imageSrc="/slider-images/diagnostics.jpg" imageAlt="Компьютерная Диагностика" classes="" btnHref="/services/computer-diagnostics" itemTitle="Выявляем проблемы авто компьютерной диагностикой." itemDescription="Компьютерная диагностика авто."/>
                </CarouselContent>
            </Carousel>
     );
}
 
export default MainCarousel;