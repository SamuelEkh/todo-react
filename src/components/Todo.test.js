import { render, screen } from '@testing-library/react';
import Todo from './Todo';

describe('Single Todo', () => {
  const card = {
    id: 123,
    title: 'Test Card',
    desc: 'Is this visible?',
    completed: false,
  };

  test('Single Todo', () => {
    render(<Todo card={card} />);
    const cardTitle = screen.getByText('Test Card');
    const cardDesc = screen.getByText('Is this visible?');

    expect(cardTitle).toBeTruthy();
    expect(cardDesc).toBeTruthy();
  });
});
