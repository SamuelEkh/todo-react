import { useState } from 'react';

export default function InputField(props) {
  const [inputTitle, setInputTitle] = useState('');
  const [inputDesc, setInputDesc] = useState('');
  const validationMessage = document.querySelector('.validation-message');

  function handleClick(e) {
    if (inputTitle.length > 0 && inputDesc.length > 0) {
      e.preventDefault();
      props.cardState(inputTitle, inputDesc);
      setInputTitle('');
      setInputDesc('');
    } else {
      e.preventDefault();
      validationMessage.classList.add('validation-animation');
      setTimeout(() => {
        validationMessage.classList.remove('validation-animation');
      }, 1499);
    }
  }

  const handleChange = e => {
    if (e.target.className === 'form__title-input') {
      setInputTitle(e.target.value);
    }
    if (e.target.className === 'form__desc-input') {
      setInputDesc(e.target.value);
    }
  };

  const onKeyPress = e => {
    if (e.charCode === 13 && !e.shiftKey) {
      if (inputTitle.length > 0 && inputDesc.length > 0) {
        e.preventDefault();
        props.cardState(inputTitle, inputDesc);
        setInputTitle('');
        setInputDesc('');
      } else {
        e.preventDefault();
        validationMessage.classList.add('validation-animation');
        setTimeout(() => {
          validationMessage.classList.remove('validation-animation');
        }, 1499);
      }
    }
  };

  return (
    <form className="form">
      <p className="form__title">Title</p>
      <input
        onKeyPress={onKeyPress}
        onChange={handleChange}
        type="text"
        className="form__title-input"
        maxLength="14"
        value={inputTitle} />
      <p className="form__desc">Description</p>
      <textarea
        onChange={handleChange}
        maxLength="46"
        className="form__desc-input"
        onKeyPress={onKeyPress}
        value={inputDesc} />
      <input
        onClick={handleClick}
        type="submit"
        className="form__button"
        value="Add" />
      <p className="validation-message">Please enter a title and description</p>
    </form>
  );
}
