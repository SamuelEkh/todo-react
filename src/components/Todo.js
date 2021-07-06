export default function Todo(props) {
  const cardStyle = () => ({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: props.card.completed ? 'gray' : '#FFB48F',
    height: '7rem',
    padding: '5px',
    textAlign: 'center',
    margin: '10px 0',
    borderRadius: '5px',
    boxShadow: '0 0 2px black',
  });

  const buttonStyle = () => ({
    display: props.card.completed ? 'block' : 'none',
    position: 'absolute',
    margin: '-2.3rem 0 0 0.5rem',
    width: '4rem',
    border: '1px solid black',
    borderRadius: '4px',
    color: 'black',
  });

  const completedStyle = () => ({
    display: props.card.completed ? 'inline-block' : 'none',
    position: 'absolute',
    fontSize: '1.5rem',
    marginLeft: '5rem',
    marginTop: '2rem',
    color: 'green',
    border: '1px solid black',
    borderRadius: '5px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    fontWeight: 'bold',
    transform: 'rotate(-25deg)',
  });

  const handleKeyDown = e => {
    if (e.key === 'c' || e.key === 'Enter') {
      props.setCompleted(props.card.id);
    }
  };

  const { card } = props;

  return (
    <div className="card">
      <div
        className="card__content"
        style={cardStyle()}
        role="button"
        tabIndex={0}
        onClick={() => { props.setCompleted(props.card.id); }}
        onKeyDown={handleKeyDown}>
        <p className="card__title">{card.title}</p>
        <p className="card__desc">{card.desc}</p>
        <p className="card__completed" style={completedStyle()}>Completed</p>
      </div>
      <button
        className="card__button"
        type="button"
        style={buttonStyle()}
        onClick={() => props.deleteTodo(props.card.id)}>
        Remove
      </button>
    </div>
  );
}
