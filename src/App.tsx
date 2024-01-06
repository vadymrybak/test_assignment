import { useEffect, useState } from 'react';
import './App.css';
import CardComponent from './CardComponent';

export interface ICard {
  id: string;
  type: "red" | "yellow" | "green";
  caption: string;
  description: string;
  count: number;
}

const dummyData: ICard[] = [
  {
    id: "1",
    caption: "Бюджет",
    type: 'red',
    count: 94,
    description: "Проверка найтроки лимитов бюджета, работу со ставками и данамика расходов"
  },
  {
    id: "2",
    caption: "Структура аккаунта",
    type: 'red',
    count: 234,
    description: "Правильность распределения рекламных кампаний по структуре аккаунта"
  },
  {
    id: "3",
    caption: "Настройки кампании",
    type: 'green',
    count: 12,
    description: "Корректность настроек рекламных кампаний"
  },
  {
    id: "4",
    caption: "Настройки кампании",
    type: 'yellow',
    count: 76,
    description: "Тесты, ссылки, доступность посадочных страниц и модерация"
  },
  {
    id: "5",
    caption: "Таргетинг и смемантическое ядро",
    type: 'red',
    count: 321,
    description: "Наличие минусов-слов, показы по запросам и черного списка, а также скачки в динамике охвата"
  }
];

function App() {
  const [data, setData] = useState<ICard[]>([]);

  useEffect(() => {
    // Simulating network request
    setData(old => dummyData);
  }, [])

  return (
    <div className="App">
      <h2 className="appHeader">Замечания и рекомендации</h2>
      <div className="content">
        {
          data.map(card => {
            return (
              <CardComponent key={card.id} card={card} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
