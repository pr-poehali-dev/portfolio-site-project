import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-light text-gray-900 mb-6">Обо мне</h2>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            Более 8 лет я создаю визуальные истории через фотографию.
            Специализируюсь на портретной съемке, документировании событий и
            пейзажной фотографии.
          </p>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Моя цель — запечатлеть искренние эмоции и создать изображения,
            которые будут волновать спустя годы.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Icon name="Award" className="text-gray-700" size={20} />
              <span className="text-gray-700">
                Победитель конкурса "Лучший портрет 2023"
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="Camera" className="text-gray-700" size={20} />
              <span className="text-gray-700">300+ свадебных церемоний</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="Users" className="text-gray-700" size={20} />
              <span className="text-gray-700">1000+ довольных клиентов</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1494790108755-2616c80808b1?w=600&h=700&fit=crop"
            alt="Анна Светлова"
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
