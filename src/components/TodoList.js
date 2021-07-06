import Todo from './Todo';

export default function TodoList(props) {
  const { cards } = props;

  return (
    <section className="card-container">
      {cards.map(card => (
        <Todo
          key={card.id}
          card={card}
          deleteTodo={props.deleteTodo}
          setCompleted={props.setCompleted}
          orderTodos={props.orderTodos} />
      ))}
    </section>
  );
}
