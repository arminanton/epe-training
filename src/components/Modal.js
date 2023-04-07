import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ modal: { state, praise, points, explanation, clickHandler, enterHandler} }) => {
  return (
    <div className={'correct-modal' + (state === 'show' ? ' modal-enter' : '')}>
      <div className="praise">{praise}</div>
      <div className="points">{points}</div>
      <div className="explanation">{explanation}</div>
      <input
        className="next"
        tabIndex="0"
        type="button"
        onClick={clickHandler}
        onKeyDown={enterHandler}
        value="Next"
      />
    </div>
  );
};

Modal.propTypes = {
  modal: PropTypes.shape({
    state: PropTypes.string.isRequired,
    praise: PropTypes.string.isRequired,
    points: PropTypes.string.isRequired,
    explanation: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired,
    enterHandler: PropTypes.func.isRequired
  })
};

export default Modal;
