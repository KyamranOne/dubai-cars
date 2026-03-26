/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  ShieldCheck, 
  Globe, 
  Car, 
  BarChart3, 
  ArrowRight, 
  ChevronDown, 
  CheckCircle2, 
  Zap,
  Award,
  Lock,
  Users
} from 'lucide-react';

// --- Types & Constants ---

const PACKAGES = [
  {
    title: "Auto",
    range: "$50 — $500",
    yield: "18%",
    description: "Вход в рынок автомобильного арбитража. Идеально для тестирования модели.",
    features: ["Ежемесячные выплаты", "Ликвидность актива", "Базовая аналитика"]
  },
  {
    title: "Super Auto",
    range: "$1,000 — $7,500",
    yield: "24%",
    description: "Масштабируемые инвестиции в восстановление авто среднего сегмента.",
    features: ["Повышенная доходность", "Приоритетный экспорт", "Расширенные отчеты"],
    popular: true
  },
  {
    title: "Premium Auto",
    range: "$10,000 — $50,000",
    yield: "27%",
    description: "Институциональный уровень. Работа с люксовым сегментом и редкими лотами.",
    features: ["Максимальный профит", "Персональный менеджер", "Страхование капитала"]
  }
];

const FAQ_ITEMS = [
  {
    q: "Почему доходность выше, чем в банках?",
    a: "Мы работаем на рынке автомобильного арбитража в Дубае. Закупка на закрытых аукционах и восстановление позволяют получать маржу от 32% до 100% за цикл (30-60 дней). Мы делимся частью этой прибыли с инвесторами."
  },
  {
    q: "Чем обеспечены мои инвестиции?",
    a: "Каждый доллар в пуле обеспечен реальным физическим активом — автомобилем. В случае форс-мажора активы реализуются на вторичном рынке, что гарантирует возврат тела инвестиций."
  },
  {
    q: "Как работает автопрограмма?",
    a: "Вы вносите 50% от стоимости желаемого авто. Остальные 50% компания закрывает за счет прибыли от оборотных средств. Через 90-180 дней вы получаете автомобиль в полную собственность."
  }
];

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center font-bold text-black">DA</div>
        <span className="text-xl font-bold tracking-tighter text-white uppercase">Dubai Assets</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
        <a href="#model" className="hover:text-amber-500 transition-colors">Модель</a>
        <a href="#packages" className="hover:text-amber-500 transition-colors">Инвестиции</a>
        <a href="#partners" className="hover:text-amber-500 transition-colors">Партнерам</a>
        <a href="#faq" className="hover:text-amber-500 transition-colors">FAQ</a>
      </div>
      <button className="bg-amber-500 text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-amber-400 transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)]">
        Начать инвестировать
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#050505]">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1920" 
        alt="Dubai Supercar" 
        className="w-full h-full object-cover opacity-30"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-widest mb-6">
          <Zap size={14} /> Global Automotive Arbitrage
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
          Капитализируйте <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Автомобильный Рынок</span> <br />
          Дубая
        </h1>
        <p className="text-lg text-white/60 mb-10 max-w-xl leading-relaxed">
          Инвестируйте в высокодоходные циклы закупки, восстановления и экспорта автомобилей. Реальный бизнес с маржинальностью до 50% на каждой сделке.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-amber-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2">
            Открыть счет <ArrowRight size={20} />
          </button>
          <button className="border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/5 transition-all">
            Смотреть презентацию
          </button>
        </div>
        
        <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8">
          <div>
            <div className="text-2xl font-bold text-white">32-50%</div>
            <div className="text-xs text-white/40 uppercase tracking-wider">Средняя маржа сделки</div>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div>
            <div className="text-2xl font-bold text-white">60%</div>
            <div className="text-xs text-white/40 uppercase tracking-wider">Дисконт к рынку РФ/СНГ</div>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div>
            <div className="text-2xl font-bold text-white">24/7</div>
            <div className="text-xs text-white/40 uppercase tracking-wider">Контроль активов</div>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="hidden lg:block relative"
      >
        <div className="absolute -inset-4 bg-amber-500/20 blur-3xl rounded-full" />
        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
          <div className="flex items-center justify-between mb-8">
            <div className="text-white font-bold">Live Arbitrage Feed</div>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <div className="text-[10px] text-white/40 uppercase">Active Deal</div>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { label: "Asset", val: "Porsche 911 Carrera S", color: "text-white" },
              { label: "Auction Price", val: "$64,200", color: "text-white/60" },
              { label: "Restoration Cost", val: "$8,400", color: "text-white/60" },
              { label: "Estimated Sale", val: "$112,000", color: "text-amber-500" },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-sm text-white/40">{item.label}</span>
                <span className={`font-mono ${item.color}`}>{item.val}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-amber-500/10 rounded-xl border border-amber-500/20">
            <div className="text-[10px] text-amber-500 uppercase font-bold mb-1">Projected ROI</div>
            <div className="text-2xl font-bold text-white">+42.8% <span className="text-sm font-normal text-white/40">/ 45 days</span></div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const MarketSection = () => (
  <section id="model" className="py-24 bg-black">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Почему Дубай — Клондайк для автобизнеса?</h2>
        <p className="text-white/40 max-w-2xl mx-auto">
          Уникальное сочетание перенасыщенного рынка, отсутствия налогов и глобального логистического хаба создает идеальные условия для арбитража.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Globe className="text-amber-500" size={32} />,
            title: "Глобальный экспорт",
            text: "Скидка на логистику до 50% позволяет нам доставлять авто в любую точку мира дешевле конкурентов."
          },
          {
            icon: <TrendingUp className="text-amber-500" size={32} />,
            title: "Быстрый оборот",
            text: "Средний цикл сделки (от аукциона до продажи) составляет 45-60 дней. Это позволяет делать до 6 циклов в год."
          },
          {
            icon: <ShieldCheck className="text-amber-500" size={32} />,
            title: "Юридическая чистота",
            text: "Все сделки проходят через официальных дилеров и аукционы ОАЭ с полной прозрачностью документов."
          }
        ].map((item, i) => (
          <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-amber-500/50 transition-all group">
            <div className="mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
            <p className="text-white/40 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const BusinessModel = () => (
  <section className="py-24 bg-[#080808] border-y border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold text-white mb-8">Как мы создаем <br /> <span className="text-amber-500">добавленную стоимость</span></h2>
          <div className="space-y-8">
            {[
              { step: "01", title: "Smart Sourcing", desc: "Анализ 1000+ лотов ежедневно. Покупка только ликвидных моделей с дисконтом от 40%." },
              { step: "02", title: "Restoration & Detailing", desc: "Собственные техцентры в Дубае позволяют восстанавливать авто до состояния новых с минимальными затратами." },
              { step: "03", title: "Global Sales", desc: "Продажа через сеть партнеров в СНГ, Европе и Азии по рыночным ценам." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="text-3xl font-black text-white/10">{item.step}</div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-white/40">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200" 
            alt="Workshop" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-black">
                <BarChart3 size={24} />
              </div>
              <div className="text-white">
                <div className="font-bold">До 100% прибыли</div>
                <div className="text-xs opacity-60">на восстановлении редких моделей</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Packages = () => (
  <section id="packages" className="py-24 bg-black">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white mb-6">Инвестиционные стратегии</h2>
        <p className="text-white/40">Выберите уровень участия в зависимости от вашего капитала и целей.</p>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {PACKAGES.map((pkg, i) => (
          <div 
            key={i} 
            className={`relative p-8 rounded-3xl border ${pkg.popular ? 'border-amber-500 bg-amber-500/5' : 'border-white/10 bg-white/5'} flex flex-col`}
          >
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-black px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                Most Popular
              </div>
            )}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">{pkg.title}</h3>
              <div className="text-4xl font-black text-amber-500 mb-4">{pkg.yield} <span className="text-sm font-normal text-white/40">/ доходность</span></div>
              <div className="text-white/60 font-medium">{pkg.range}</div>
            </div>
            <p className="text-white/40 text-sm mb-8 flex-grow">{pkg.description}</p>
            <ul className="space-y-4 mb-10">
              {pkg.features.map((f, j) => (
                <li key={j} className="flex items-center gap-3 text-sm text-white/80">
                  <CheckCircle2 size={18} className="text-amber-500" /> {f}
                </li>
              ))}
            </ul>
            <button className={`w-full py-4 rounded-full font-bold transition-all ${pkg.popular ? 'bg-amber-500 text-black hover:bg-amber-400' : 'border border-white/20 text-white hover:bg-white/5'}`}>
              Выбрать пакет
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CarProgram = () => (
  <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-black">
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
           <Car size={400} className="text-amber-500 -rotate-12 translate-x-1/4 translate-y-1/4" />
        </div>
        
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Автопрограмма: <br /> <span className="text-amber-500">50% платит компания</span></h2>
          <p className="text-white/60 text-lg mb-10">
            Уникальный инструмент лояльности. Вы выбираете любой автомобиль, вносите половину стоимости, а вторую половину мы закрываем за счет прибыли от оборота ваших средств.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { label: "До 2 млн", time: "90 дней" },
              { label: "До 5 млн", time: "120 дней" },
              { label: "10+ млн", time: "180 дней" }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-black/40 rounded-2xl border border-white/5">
                <div className="text-amber-500 font-bold mb-1">{item.label}</div>
                <div className="text-xs text-white/40 uppercase tracking-tighter">Срок: {item.time}</div>
              </div>
            ))}
          </div>
          
          <button className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-amber-500 transition-colors">
            Рассчитать автомобиль
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Partnership = () => (
  <section id="partners" className="py-24 bg-black">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
              <div className="text-3xl font-bold text-amber-500 mb-2">10%</div>
              <div className="text-xs text-white/40 uppercase">Линейный бонус (1 ур)</div>
            </div>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
              <div className="text-3xl font-bold text-amber-500 mb-2">10%</div>
              <div className="text-xs text-white/40 uppercase">Бинарный бонус</div>
            </div>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 col-span-2">
              <div className="text-xl font-bold text-white mb-2">6 уровней глубины</div>
              <div className="text-xs text-white/40 uppercase">10% / 5% / 2% / 1% / 1% / 1%</div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-4xl font-bold text-white mb-8">Экосистема <br /> <span className="text-amber-500">Strategic Partners</span></h2>
          <p className="text-white/40 mb-8 leading-relaxed">
            Мы не просто ищем инвесторов, мы строим глобальную сеть дистрибуции. Наша партнерская модель вознаграждает тех, кто помогает масштабировать ликвидность платформы.
          </p>
          <ul className="space-y-4 mb-10">
            {[
              "Мгновенный вывод бонусов",
              "Карьерная лестница и премии",
              "Обучение от топ-лидеров рынка"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-white/80">
                <Award size={20} className="text-amber-500" /> {item}
              </li>
            ))}
          </ul>
          <button className="text-amber-500 font-bold flex items-center gap-2 hover:gap-4 transition-all">
            Узнать условия партнерства <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Часто задаваемые вопросы</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="border border-white/10 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center bg-white/5 hover:bg-white/10 transition-colors"
              >
                <span className="font-bold text-white">{item.q}</span>
                <ChevronDown className={`text-amber-500 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 text-white/40 leading-relaxed border-t border-white/10">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 bg-black border-t border-white/10">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center font-bold text-black text-sm">DA</div>
        <span className="font-bold text-white uppercase tracking-tighter">Dubai Assets</span>
      </div>
      <div className="text-white/20 text-xs text-center md:text-left">
        © 2026 Dubai Assets Investment Group. Все права защищены. <br />
        Инвестиции сопряжены с риском. Ознакомьтесь с политикой конфиденциальности.
      </div>
      <div className="flex gap-6">
        <a href="#" className="text-white/40 hover:text-white transition-colors"><Globe size={20} /></a>
        <a href="#" className="text-white/40 hover:text-white transition-colors"><Lock size={20} /></a>
        <a href="#" className="text-white/40 hover:text-white transition-colors"><Users size={20} /></a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-black min-h-screen font-sans selection:bg-amber-500 selection:text-black">
      <Navbar />
      <Hero />
      <MarketSection />
      <BusinessModel />
      <Packages />
      <CarProgram />
      <Partnership />
      
      {/* FOMO Section */}
      <section className="py-24 bg-amber-500">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-8 uppercase italic tracking-tighter">
            Рынок не будет ждать. <br /> Начните сегодня.
          </h2>
          <p className="text-black/80 text-xl font-medium mb-12 max-w-2xl mx-auto">
            Каждую неделю мы закрываем 15+ сделок. Ваше место в пуле может быть занято уже завтра.
          </p>
          <button className="bg-black text-white px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl">
            Зарегистрироваться сейчас
          </button>
        </div>
      </section>

      <FAQ />
      <Footer />
    </div>
  );
}

