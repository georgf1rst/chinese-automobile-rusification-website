import { CheckSquare, Clock, Factory, Handshake, Laugh, Smile } from "lucide-react";
import MainCarousel from "./_components/main-carousel";
import InfoCard from "@/components/info-card";
const Home = () => {
    
    return ( 
        <div className="p-2 md:p-4 xl:p-6 grid gap-y-4">
            <MainCarousel/>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                <InfoCard 
                    icon={Clock}
                    label="15 лет на рынке"
                    description="Мы работаем на рынке автоуслуг Атырау более 15 лет!"
                />
                <InfoCard 
                    icon={Smile}
                    label="Гарантия на работу"
                    description="Даём гарантию на выполненную работу. Всё будет быстро и качественно!"
                />
                <InfoCard 
                    icon={Handshake}
                    label="Работаем с организациями"
                    description="Мы предоставляем организациям полный пакет документов для бухгалтерии. Акты выполненных работ, cчета-фактуры и т.д. Всё профессионально и в срок."
                    wideness="two"
                />
            </div>
        </div>
     );
}
 
export default Home;