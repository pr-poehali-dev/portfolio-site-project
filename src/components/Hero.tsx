import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-light text-gray-900 mb-6 tracking-tight">
          Анна Светлова
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
          Фотограф • Портреты • События • Природа
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            variant="outline"
            size="lg"
            className="border-gray-300 hover:bg-gray-50"
          >
            <Icon name="Camera" className="mr-2" size={20} />
            Посмотреть работы
          </Button>
          <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
            <Icon name="Mail" className="mr-2" size={20} />
            Связаться
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
