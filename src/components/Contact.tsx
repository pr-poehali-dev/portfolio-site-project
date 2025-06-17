import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Связаться со мной
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Готова обсудить ваш проект и воплотить ваши идеи в жизнь
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Icon name="MapPin" className="text-gray-700 mt-1" size={20} />
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Адрес</h3>
                <p className="text-gray-600">Москва, Россия</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Icon name="Phone" className="text-gray-700 mt-1" size={20} />
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Телефон</h3>
                <p className="text-gray-600">+7 (999) 123-45-67</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Icon name="Mail" className="text-gray-700 mt-1" size={20} />
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600">anna@svetlova-photo.ru</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button variant="outline" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="outline" size="icon">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="outline" size="icon">
                <Icon name="Camera" size={20} />
              </Button>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="Ваше имя" />
              <Input placeholder="Email" type="email" />
            </div>
            <Input placeholder="Тема сообщения" />
            <Textarea placeholder="Расскажите о вашем проекте..." rows={6} />
            <Button className="w-full bg-gray-900 hover:bg-gray-800">
              <Icon name="Send" className="mr-2" size={20} />
              Отправить сообщение
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
