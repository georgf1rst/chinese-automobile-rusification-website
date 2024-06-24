import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import CarouselItems from "@/app/(main)/(routes)/(root)/_components/CarouselItems";

const Home = () => {
    
    return ( 
        <div className="p-2 md:p-4 xl:p-6">
            <Carousel className="">
                <CarouselContent className="">
                    <CarouselItems imageSrc="/slider-images/Starline.jpeg" imageAlt="pic-1" classes="" btnHref="/catalog/signalisations/starline" itemTitle="StarLine — надежная защита вашего автомобиля." itemDescription="Установка Автосигнализаций."/>
                    <CarouselItems imageSrc="/slider-images/ac-automobile.jpg" imageAlt="pic-1" classes="" btnHref="/catalog/signalisations/starline" itemTitle="Не дайте жаре помешать вашему комфорту!" itemDescription="Заправка и ремонт Автокондиционеров."/>
                    <CarouselItems imageSrc="/slider-images/diagnostics.jpg" imageAlt="pic-1" classes="" btnHref="/catalog/signalisations/starline" itemTitle="Выявляем проблемы авто компьютерной диагностикой." itemDescription="Компьютерная диагностика авто."/>
                </CarouselContent>
            </Carousel>
        </div>
     );
}
 
export default Home;