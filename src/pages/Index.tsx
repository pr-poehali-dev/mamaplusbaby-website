import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BookingDialog from "@/components/BookingDialog";

const Index = () => {
  const schedule = [
    {
      title: "Утренние занятия",
      color: "bg-[#FDE1D3]",
      days: "Понедельник, Среда, Пятница",
      time: "10:00 - 11:00",
      description: "Мягкие упражнения для восстановления после родов"
    },
    {
      title: "Дневные занятия",
      color: "bg-[#E5DEFF]",
      days: "Вторник, Четверг",
      time: "14:00 - 15:00",
      description: "Активные тренировки с малышами"
    },
    {
      title: "Вечерние занятия",
      color: "bg-[#FFDEE2]",
      days: "Среда, Пятница",
      time: "17:00 - 18:00",
      description: "Занятия для работающих мам"
    }
  ];

  const prices = [
    { name: "Разовое занятие", price: "800₽", features: ["1 занятие", "Пробный урок"] },
    { name: "Абонемент 8 занятий", price: "5600₽", features: ["8 занятий", "Срок действия 1 месяц", "Экономия 700₽"], popular: true },
    { name: "Абонемент 12 занятий", price: "7200₽", features: ["12 занятий", "Срок действия 1.5 месяца", "Экономия 1400₽"] }
  ];

  const reviews = [
    {
      name: "Анна",
      age: "малышу 4 месяца",
      text: "Прекрасные занятия! Юля очень внимательная, всегда подсказывает, как правильно выполнять упражнения. После родов боялась начинать, но здесь такая поддерживающая атмосфера!",
      rating: 5
    },
    {
      name: "Мария",
      age: "малышу 8 месяцев",
      text: "Ходим уже 3 месяца, результат виден! Не только физическая форма улучшилась, но и настроение. Сынок тоже с удовольствием участвует в занятиях.",
      rating: 5
    },
    {
      name: "Екатерина",
      age: "малышу 1 год",
      text: "Это лучшее решение для молодых мам! Не нужно искать няню, малыш всегда рядом. Группа по возрасту идеально подобрана, все детки примерно одинаковые.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="text-2xl">👶</div>
            <h1 className="text-xl font-bold text-foreground">МАМА+малыш</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#schedule" className="text-sm font-medium hover:text-primary transition-colors">Расписание</a>
            <a href="#prices" className="text-sm font-medium hover:text-primary transition-colors">Цены</a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
            <a href="#trainer" className="text-sm font-medium hover:text-primary transition-colors">Тренер</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <BookingDialog buttonText="Записаться" className="rounded-full" />
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDE1D3] via-[#E5DEFF] to-[#FFDEE2] opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="rounded-full bg-white text-foreground border-0 shadow-sm">Фитнес для мам с малышами</Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Возвращайтесь в форму вместе с малышом
              </h1>
              <p className="text-lg text-muted-foreground">
                Специальная программа для мам с детьми от 0 до 2 лет. Безопасно, эффективно и с заботой о вас и вашем малыше.
              </p>
              <div className="flex flex-wrap gap-4">
                <BookingDialog 
                  buttonText="Записаться на занятие"
                  size="lg" 
                  className="rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  <Button size="lg" className="rounded-full shadow-lg hover:shadow-xl transition-all">
                    <Icon name="Calendar" className="mr-2" size={20} />
                    Записаться на занятие
                  </Button>
                </BookingDialog>
                <Button size="lg" variant="outline" className="rounded-full">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Позвонить
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#FDE1D3] to-[#E5DEFF] rounded-3xl blur-2xl opacity-30"></div>
              <img 
                src="https://cdn.poehali.dev/projects/da83569b-1187-4322-b025-b4ebf3b28882/files/2d382493-44d0-400b-b79a-b0fade1bddc3.jpg"
                alt="Мама с малышом на фитнесе"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 bg-gradient-to-b from-white to-[#FFDEE2]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Расписание занятий</h2>
            <p className="text-lg text-muted-foreground">Выберите удобное время для вас и вашего малыша</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {schedule.map((slot, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in rounded-3xl" style={{animationDelay: `${index * 100}ms`}}>
                <CardHeader>
                  <div className={`${slot.color} rounded-full w-16 h-16 flex items-center justify-center text-2xl mb-4`}>
                    👶
                  </div>
                  <CardTitle className="text-2xl">{slot.title}</CardTitle>
                  <CardDescription className="text-base">{slot.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={18} className="text-primary" />
                    <span className="text-sm">{slot.days}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={18} className="text-primary" />
                    <span className="text-sm font-semibold">{slot.time}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Цены и абонементы</h2>
            <p className="text-lg text-muted-foreground">Выберите удобный вариант для вас</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {prices.map((price, index) => (
              <Card key={index} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-3xl ${price.popular ? 'ring-2 ring-primary scale-105' : ''}`}>
                {price.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-2 rounded-t-3xl font-semibold">
                    Популярный выбор
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{price.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary mt-4">{price.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {price.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <BookingDialog asChild>
                    <Button className="w-full mt-6 rounded-full" variant={price.popular ? "default" : "outline"}>
                      Купить абонемент
                    </Button>
                  </BookingDialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="trainer" className="py-20 bg-gradient-to-b from-[#E5DEFF]/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative animate-scale-in">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#E5DEFF] to-[#FFDEE2] rounded-3xl blur-2xl opacity-30"></div>
                <img 
                  src="https://cdn.poehali.dev/projects/da83569b-1187-4322-b025-b4ebf3b28882/files/ce191832-127e-40d1-b541-0895ee3a823b.jpg"
                  alt="Тренер Юлия"
                  className="relative rounded-3xl shadow-2xl w-full object-cover"
                />
              </div>
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-3xl md:text-5xl font-bold">Ваш тренер</h2>
                <h3 className="text-2xl font-semibold text-primary">Юлия Соколова</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Сертифицированный тренер по фитнесу с опытом работы более 8 лет. 
                    Специализация: восстановление после родов, функциональный тренинг.
                  </p>
                  <p>
                    Сама мама двоих детей, прошла через все этапы восстановления после родов 
                    и знает, как важна поддержка и правильный подход к занятиям.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    <Badge variant="secondary" className="rounded-full">Сертификат персонального тренера</Badge>
                    <Badge variant="secondary" className="rounded-full">Специалист по послеродовому восстановлению</Badge>
                    <Badge variant="secondary" className="rounded-full">Инструктор йоги</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Отзывы мам</h2>
            <p className="text-lg text-muted-foreground">Что говорят наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl animate-scale-in" style={{animationDelay: `${index * 100}ms`}}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center text-primary-foreground font-bold">
                      {review.name[0]}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.age}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#FDE1D3] via-[#E5DEFF] to-[#FFDEE2]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-4 bg-white/50 rounded-3xl blur-2xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/da83569b-1187-4322-b025-b4ebf3b28882/files/51d03941-d812-407b-bd61-28478ac2fa81.jpg"
                alt="Группа мам с малышами"
                className="relative rounded-3xl shadow-2xl w-full object-cover animate-scale-in"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Контакты и запись</h2>
              <p className="text-lg text-muted-foreground">Готовы начать? Свяжитесь с нами!</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg rounded-3xl">
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold">Адрес</div>
                      <div className="text-muted-foreground">г. Москва, ул. Примерная, д. 10</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold">Телефон</div>
                      <div className="text-muted-foreground">+7 (999) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-muted-foreground">info@mama-baby.ru</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold">Время работы</div>
                      <div className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg rounded-3xl">
                <CardHeader>
                  <CardTitle>Запишитесь на пробное занятие</CardTitle>
                  <CardDescription>Первое занятие всего 500₽</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem value="faq-1" className="border rounded-2xl px-4">
                      <AccordionTrigger className="hover:no-underline">
                        Что взять с собой на занятие?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Удобную спортивную одежду, воду, полотенце. Для малыша - любимую игрушку и сменный подгузник. Коврики предоставляем.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="faq-2" className="border rounded-2xl px-4">
                      <AccordionTrigger className="hover:no-underline">
                        Можно ли прийти с партнером?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Да, конечно! Папы и другие родственники приветствуются на занятиях.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="faq-3" className="border rounded-2xl px-4">
                      <AccordionTrigger className="hover:no-underline">
                        Когда можно начинать после родов?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        После естественных родов - через 6-8 недель, после кесарева - через 8-12 недель. Обязательна консультация врача.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <BookingDialog asChild>
                    <Button className="w-full mt-6 rounded-full" size="lg">
                      <Icon name="Send" className="mr-2" size={20} />
                      Записаться сейчас
                    </Button>
                  </BookingDialog>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-gradient-to-b from-white to-[#E5DEFF]/20 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="text-2xl">👶</div>
              <span className="font-bold">МАМА+малыш</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 Все права защищены</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Icon name="Send" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Icon name="Phone" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;