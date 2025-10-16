import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заявку! Свяжусь с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between rounded-[0.25rem]">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Тренер по продажам
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#about" className="text-sm hover:text-primary transition-colors">По мне</a>
            <a href="#cases" className="text-sm hover:text-primary transition-colors">Кейсы</a>
            <a href="#programs" className="text-sm hover:text-primary transition-colors">Программы</a>
            <a href="#testimonials" className="text-sm hover:text-primary transition-colors">Отзывы</a>
            <a href="#faq" className="text-sm hover:text-primary transition-colors">FAQ</a>
            <Button size="sm" className="bg-gradient-to-r from-primary to-primary/80">
              Записаться
            </Button>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative">
          <div className="text-white space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Увеличьте продажи<br />в 2-3 раза за 3 месяца
            </h1>
            <p className="text-xl text-white/90">
              Авторские методики, проверенные на 500+ учениках
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="text-center">
                <div className="text-4xl font-bold">87%</div>
                <div className="text-sm text-white/80">учеников удваивают продажи</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">12+</div>
                <div className="text-sm text-white/80">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">500+</div>
                <div className="text-sm text-white/80">успешных учеников</div>
              </div>
            </div>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
              Записаться на консультацию
            </Button>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl blur-3xl" />
            <img
              src="https://cdn.poehali.dev/projects/c9800fc8-6b87-4865-928c-5a91e7b6a2e4/files/55cdd751-21e6-466a-b96c-0e42f51920a5.jpg"
              alt="Тренер"
              className="relative rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Обо мне</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingUp" size={32} className="text-primary" />
                </div>
                <CardTitle>Опыт</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">12+ лет в продажах, работал с компаниями малого и среднего бизнеса</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={32} className="text-primary" />
                </div>
                <CardTitle>Сертификаты</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline">Certified Sales Professional</Badge>
                  <Badge variant="outline">Master Trainer NLP</Badge>
                  <Badge variant="outline">Business Coach ICF</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Target" size={32} className="text-primary" />
                </div>
                <CardTitle>Результаты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Мои ученики увеличивают продажи на 150-300% за первые 3 месяца</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="cases" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Кейсы и истории успеха</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Анна, бутик одежды', before: '120К', after: '380К', period: '3 месяца', growth: '+217%' },
              { name: 'Игорь, IT-услуги', before: '450К', after: '1.2М', period: '4 месяца', growth: '+167%' },
              { name: 'Мария, косметология', before: '200К', after: '550К', period: '2 месяца', growth: '+175%' },
              { name: 'Сергей, недвижимость', before: '800К', after: '2.1М', period: '5 месяцев', growth: '+163%' },
            ].map((case_, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="text-xl">{case_.name}</CardTitle>
                  <CardDescription>Результаты за {case_.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-sm text-muted-foreground">Было</div>
                      <div className="text-2xl font-bold text-muted-foreground">{case_.before}</div>
                    </div>
                    <div className="flex items-center justify-center">
                      <Icon name="ArrowRight" className="text-accent" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Стало</div>
                      <div className="text-2xl font-bold text-primary">{case_.after}</div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <Badge className="bg-accent text-white">{case_.growth}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="programs" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Программы обучения</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all hover:scale-[1.02]">
              <CardHeader>
                <CardTitle>Базовый курс</CardTitle>
                <CardDescription>Для новичков в продажах</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold">45 000 ₽</div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5" />
                    <span>8 недель обучения</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5" />
                    <span>16 онлайн-занятий</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5" />
                    <span>Домашние задания</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5" />
                    <span>Чат поддержки</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-primary to-primary/80">
                  Записаться
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent relative hover:shadow-xl transition-all hover:scale-[1.02]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-accent text-white">Популярный</Badge>
              </div>
              <CardHeader>
                <CardTitle>Профессионал</CardTitle>
                <CardDescription>Для опытных продавцов</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold">85 000 ₽</div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5" />
                    <span>12 недель обучения</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5" />
                    <span>24 онлайн-занятия</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5" />
                    <span>Индивидуальные консультации</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5" />
                    <span>Разбор ваших сделок</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5" />
                    <span>Личный куратор</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-accent to-accent/80">
                  Записаться
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:scale-[1.02]">
              <CardHeader>
                <CardTitle>VIP-сопровождение</CardTitle>
                <CardDescription>Персональная работа</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold">150 000 ₽</div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5" />
                    <span>16 недель обучения</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5" />
                    <span>Индивидуальные встречи 1-на-1</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5" />
                    <span>Анализ вашего бизнеса</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5" />
                    <span>Разработка стратегии</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5" />
                    <span>Поддержка 24/7</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-primary to-primary/80">
                  Записаться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Екатерина Волкова',
                role: 'Владелица салона красоты',
                text: 'За 2 месяца обучения мой доход вырос в 2.5 раза! Методики работают на практике, всё понятно и применимо сразу.',
                rating: 5,
              },
              {
                name: 'Дмитрий Соколов',
                role: 'Менеджер по продажам',
                text: 'Прошёл уже 3 тренинга по продажам, но только здесь получил реальные инструменты. Закрываю 80% сделок.',
                rating: 5,
              },
              {
                name: 'Ольга Кузнецова',
                role: 'Директор агентства',
                text: 'Отправила всю команду на обучение. Результат превзошёл ожидания — конверсия выросла на 180%!',
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {Array(testimonial.rating).fill(0).map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-4">Запишитесь на бесплатную консультацию</h2>
          <p className="text-center text-white/90 mb-8">
            Обсудим ваши цели и подберём подходящую программу обучения
          </p>
          <Card className="bg-white/95 backdrop-blur">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-white"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Телефон"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-white"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Расскажите о своих целях (необязательно)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white"
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="mt-8 flex justify-center gap-6">
            <a href="tel:+79991234567" className="flex items-center gap-2 hover:underline">
              <Icon name="Phone" size={20} />
              +7 (999) 123-45-67
            </a>
            <a href="mailto:info@example.com" className="flex items-center gap-2 hover:underline">
              <Icon name="Mail" size={20} />
              info@example.com
            </a>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white px-6 rounded-lg border">
              <AccordionTrigger className="text-left">
                Сколько времени нужно уделять обучению?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Минимум 5-7 часов в неделю: 2 онлайн-занятия по 1.5 часа + домашние задания. Чем больше практики, тем быстрее результат.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white px-6 rounded-lg border">
              <AccordionTrigger className="text-left">
                Подойдёт ли курс для новичков без опыта?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, базовый курс разработан специально для тех, кто начинает карьеру в продажах. Все техники объясняются с нуля с большим количеством примеров.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white px-6 rounded-lg border">
              <AccordionTrigger className="text-left">
                Есть ли гарантия результата?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                При выполнении всех заданий и применении техник на практике 87% учеников удваивают продажи за 3 месяца. Если не увидите результат — вернём деньги.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white px-6 rounded-lg border">
              <AccordionTrigger className="text-left">
                В каком формате проходят занятия?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Онлайн через Zoom с записью. Занятия интерактивные: разбор кейсов, ролевые игры, практические задания. Доступ к записям остаётся навсегда.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white px-6 rounded-lg border">
              <AccordionTrigger className="text-left">
                Можно ли оплатить обучение в рассрочку?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, предоставляем рассрочку на 3-6 месяцев без процентов. Также можно оплатить картой или по счёту для юридических лиц.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">Тренер по продажам</h3>
              <p className="text-white/80 text-sm">
                Профессиональное обучение продажам с гарантией результата
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#about" className="hover:text-white transition-colors">Обо мне</a></li>
                <li><a href="#cases" className="hover:text-white transition-colors">Кейсы</a></li>
                <li><a href="#programs" className="hover:text-white transition-colors">Программы</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Отзывы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>+7 (999) 123-45-67</li>
                <li>info@example.com</li>
                <li>Пн-Пт: 10:00 - 19:00</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon name="Send" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/60">
            © 2024 Тренер по продажам. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;