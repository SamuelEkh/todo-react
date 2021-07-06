import { useState, useEffect } from 'react';
import './App.css';
import uuid from 'react-uuid';
import Header from './components/Header';
import InputField from './components/InputField';
import TodoList from './components/TodoList';

export default function App() {
  const [cards, setCards] = useState([]);
  const { localStorage } = window;

  const cardState = (title, desc) => {
    const cardInfo = {
      id: uuid(),
      title,
      desc,
      completed: false,
    };

    setCards([...cards, cardInfo]);
  };

  const deleteTodo = id => {
    setCards(cards.filter(card => card.id !== id));
  };

  const setCompleted = id => {
    setCards(cards.map(card => {
      if (card.id === id) {
        const item = card; // I know this is stupid, but found no other smart way around the linter
        item.completed = !item.completed;
      }
      return card;
    }));
  };

  useEffect(() => {
    const items = localStorage.getItem('cards');
    setCards(JSON.parse(items));
  }, []);

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  const unCompleteTodos = cards.filter(todo => !todo.completed);
  const completeTodos = cards.filter(todo => todo.completed);

  return (
    <main className="main-content">
      <Header />
      <InputField cardState={cardState} />
      <TodoList cards={unCompleteTodos} deleteTodo={deleteTodo} setCompleted={setCompleted} />
      <TodoList cards={completeTodos} deleteTodo={deleteTodo} setCompleted={setCompleted} />
    </main>
  );
}
