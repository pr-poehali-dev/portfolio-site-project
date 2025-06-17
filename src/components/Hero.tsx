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
            className="group relative overflow-hidden border-2 border-white/40 bg-transparent backdrop-blur-md text-white hover:text-gray-900 transition-all duration-500 px-8 py-3 rounded-full font-medium tracking-wide shadow-2xl hover:shadow-white/20"
          >
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            <Icon
              name="Camera"
              className="mr-3 relative z-10 transition-transform duration-300 group-hover:rotate-12"
              size={20}
            />
            <span className="relative z-10">Посмотреть работы</span>
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
