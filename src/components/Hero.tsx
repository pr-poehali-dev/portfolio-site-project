import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1554048612-b6a482b224b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl mb-4 tracking-wide drop-shadow-lg text-[#000000] font-normal">
            Анастасия Процук
          </h1>
          <div className="w-24 h-px bg-white/60 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl tracking-wide text-slate-800 font-light">
            {" "}
            Портреты • События • Природа
          </p>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <Button
            variant="outline"
            size="lg"
            className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300"
          >
            <Icon name="Camera" className="mr-2" size={20} />
            Посмотреть работы
          </Button>
          <Button
            size="lg"
            className="bg-white text-gray-900 hover:bg-white/90 transition-all duration-300 shadow-lg"
          >
            <Icon name="Mail" className="mr-2" size={20} />
            Связаться
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
