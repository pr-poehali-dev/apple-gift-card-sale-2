import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const giftCards = [
    { amount: '$10', price: '$10', popular: false },
    { amount: '$25', price: '$25', popular: true },
    { amount: '$50', price: '$50', popular: false },
    { amount: '$100', price: '$100', popular: false },
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      rating: 5,
      text: 'Быстро и надежно! Карта пришла моментально, все работает отлично.',
    },
    {
      name: 'Михаил Сидоров',
      rating: 5,
      text: 'Отличный сервис, покупаю здесь уже не первый раз. Рекомендую!',
    },
    {
      name: 'Елена Козлова',
      rating: 5,
      text: 'Удобно и безопасно. Карта активировалась сразу же после покупки.',
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sf-text">
      {/* Header */}
      <header className="bg-white border-b border-apple-gray sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Gift" size={24} className="text-apple-blue" />
              <span className="text-xl font-sf-pro font-semibold text-apple-dark">
                Apple Gift Cards
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-apple-dark hover:text-apple-blue transition-colors">
                Главная
              </a>
              <a href="#catalog" className="text-apple-dark hover:text-apple-blue transition-colors">
                Каталог
              </a>
              <a href="#reviews" className="text-apple-dark hover:text-apple-blue transition-colors">
                Отзывы
              </a>
            </nav>
            <Button className="bg-apple-blue hover:bg-blue-600 text-white px-6">
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-apple-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-sf-pro font-bold text-apple-dark mb-6 animate-fade-in">
            Apple Gift Cards
          </h1>
          <p className="text-xl md:text-2xl text-apple-light-gray mb-8 max-w-3xl mx-auto animate-fade-in">
            Подарите возможность выбора. Наши цифровые подарочные карты Apple — 
            это идеальный подарок для любого повода
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button size="lg" className="bg-apple-blue hover:bg-blue-600 text-white px-8 py-3 text-lg">
              Купить сейчас
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-apple-blue text-apple-blue hover:bg-apple-blue hover:text-white px-8 py-3 text-lg"
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-sf-pro font-bold text-apple-dark mb-4">
              Выберите номинал
            </h2>
            <p className="text-xl text-apple-light-gray max-w-2xl mx-auto">
              Доступные номиналы подарочных карт для App Store и iTunes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {giftCards.map((card, index) => (
              <Card 
                key={card.amount} 
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                  card.popular ? 'ring-2 ring-apple-blue' : ''
                }`}
              >
                {card.popular && (
                  <Badge className="absolute top-4 right-4 bg-apple-blue text-white">
                    Популярно
                  </Badge>
                )}
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-apple-gray rounded-2xl flex items-center justify-center">
                    <img 
                      src="/img/22eba0f4-e6c0-490c-8c83-56cb2084f2e1.jpg" 
                      alt="Apple Gift Card" 
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <h3 className="text-3xl font-sf-pro font-bold text-apple-dark mb-2">
                    {card.amount}
                  </h3>
                  <p className="text-apple-light-gray mb-6">
                    Подарочная карта Apple
                  </p>
                  <div className="text-2xl font-sf-pro font-semibold text-apple-dark mb-6">
                    {card.price}
                  </div>
                  <Button 
                    className="w-full bg-apple-blue hover:bg-blue-600 text-white"
                    size="lg"
                  >
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-apple-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-sf-pro font-bold text-apple-dark mb-4">
              Отзывы покупателей
            </h2>
            <p className="text-xl text-apple-light-gray max-w-2xl mx-auto">
              Более 10 000 довольных клиентов уже оценили наш сервис
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-apple-blue rounded-full flex items-center justify-center text-white font-semibold text-lg mr-4">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-sf-pro font-semibold text-apple-dark">
                        {review.name}
                      </h4>
                      <div className="flex space-x-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-apple-light-gray leading-relaxed">
                    "{review.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-apple-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-sf-pro font-bold text-white mb-6">
            Готовы сделать покупку?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Получите вашу подарочную карту мгновенно после оплаты. 
            Безопасно, быстро и надежно.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-apple-blue hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
            >
              Выбрать карту
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-apple-blue px-8 py-3 text-lg"
            >
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-apple-dark py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Gift" size={24} className="text-apple-blue" />
                <span className="text-xl font-sf-pro font-semibold text-white">
                  Apple Gift Cards
                </span>
              </div>
              <p className="text-gray-400 max-w-md">
                Официальный продавец подарочных карт Apple. 
                Быстро, безопасно, надежно.
              </p>
            </div>
            <div>
              <h3 className="text-white font-sf-pro font-semibold mb-4">Помощь</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Поддержка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Возврат</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-sf-pro font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>support@giftcards.ru</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (800) 123-45-67</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Apple Gift Cards. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;