import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import TodoList from './TodoList';

describe('Starts Empty', () => {
  const cards = [];

  test('Starts empty', () => {
    const { container } = render(<TodoList cards={cards} />);
    expect(container.firstChild.textContent).toEqual('');
  });
});

describe('Several Todos', () => {
  const cards = [
    {
      id: 1,
      title: 'Test Card',
      desc: 'Is this visible?',
      completed: false,
    },
    {
      id: 2,
      title: 'Test Card 2',
      desc: 'Is test card 2 visible?',
      completed: false,
    },
    {
      id: 3,
      title: 'Test Card 3',
      desc: 'Is test card 3 completed?',
      completed: true,
    },
  ];

  const unCompleteTodos = cards.filter(todo => !todo.completed);
  const completeTodos = cards.filter(todo => todo.completed);

  test('unComplete Todos', () => {
    render(<TodoList cards={unCompleteTodos} />);
    const card2Title = screen.getByText('Test Card 2');
    const cardDesc = screen.getByText('Is this visible?');

    expect(() => screen.getByText('Test Card 3')).toThrow();
    expect(card2Title).toBeTruthy();
    expect(cardDesc).toBeTruthy();
  });

  test('Complete Todos', () => {
    render(<TodoList cards={completeTodos} />);
    const finishedCard = screen.getByText('Test Card 3');

    expect(() => screen.getByText('Test Card')).toThrow();
    expect(finishedCard).toBeTruthy();
  });

  it('renders uncomplete correctly', () => {
    const tree = renderer
      .create(<TodoList cards={unCompleteTodos} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
