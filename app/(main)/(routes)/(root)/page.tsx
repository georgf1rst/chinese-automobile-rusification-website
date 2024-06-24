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
            <Carousel>
                <CarouselContent>
                    <CarouselItems imageSrc="/slider-images/Starline.jpg" imageAlt="pic-1" classes="md:basis-1/2 xl:basis-1/3" btnHref="/catalog/signalisations/starline" />
                    <CarouselItems imageSrc="/slider-images/Starline.jpg" imageAlt="pic-1" classes="md:basis-1/2 xl:basis-1/3" btnHref="/catalog/signalisations/starline"/>
                    <CarouselItems imageSrc="/slider-images/Starline.jpg" imageAlt="pic-1" classes="md:basis-1/2 xl:basis-1/3" btnHref="/catalog/signalisations/starline"/>
                </CarouselContent>
            </Carousel>
        </div>
     );
}
 
export default Home;