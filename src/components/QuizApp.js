import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Quiz from './Quiz';
import Modal from './Modal';
import Results from './Results';
import shuffleQuestions from '../helpers/shuffleQuestions';
import QUESTION_DATA from '../data/quiz-data';

class QuizApp extends Component {
  state = {
    ...this.getInitialState(this.props.totalQuestions)
  };

  static propTypes = {
    totalQuestions: PropTypes.number.isRequired
  };

  getInitialState(totalQuestions) {
    totalQuestions = Math.min(totalQuestions, QUESTION_DATA.length);
    const QUESTIONS = shuffleQuestions(QUESTION_DATA).slice(0, totalQuestions);

    let clickHandler = this.handleNextClick;
    let enterHandler = this.handleNextEnterPress;

    return {
      questions: QUESTIONS,
      totalQuestions: totalQuestions,
      userAnswers: QUESTIONS.map(() => {
        return {
          tries: 0
        }
      }),
      step: 1,
      score: 0,
      scoreMax: 10 * totalQuestions,
      modal: {
        state: 'hide',
        praise: '',
        points: '',
        explanation: '',
        clickHandler: clickHandler,
        enterHandler: enterHandler
      }
    };
  }

  handleAnswerClick = (index) => (e) => {
    const { questions, step, userAnswers } = this.state;
    const isCorrect = (questions[0].correct -1) === index;
    const currentStep = step - 1;
    const tries = userAnswers[currentStep].tries;
    const text = questions[0].explanation.props.children.toString();

    if (isCorrect && e.target.nodeName === 'LI') {
      // Prevent other answers from being clicked after correct answer is clicked
      e.target.parentNode.style.pointerEvents = 'none';

      e.target.classList.add('right');

      userAnswers[currentStep] = {
        tries: tries + 1
      };

      this.setState({
        userAnswers: userAnswers
      });

      setTimeout(() => this.showModal(tries, text), 750);

      //setTimeout(this.nextStep, 2750);
    }

    else if (e.target.nodeName === 'LI') {
      e.target.style.pointerEvents = 'none';
      e.target.classList.add('wrong');

      userAnswers[currentStep] = {
        tries: tries + 1
      };

      this.setState({
        userAnswers: userAnswers
      });
    }
  };

  handleNextClick = (e) => {
    console.log("nextClick2");
    console.log(arguments);
    setTimeout(this.nextStep, 1);
  };

  handleNextEnterPress = (e) => {
    console.log("enterClick1");
    console.log(arguments);
    if (e.keyCode === 13) {
      setTimeout(this.nextStep, 1);
    }
  };

  handleEnterPress = (index) => (e) => {
    if (e.keyCode === 13) {
      this.handleAnswerClick(index)(e);
    }
  };

  showModal = (tries, explanation) => {
    let praise;
    let points;

    switch (tries) {
      case 0: {
        praise = '1st Try!';
        points = '+10';
        break;
      }
      case 1: {
        praise = '2nd Try!';
        points = '+5';
        break;
      }
      case 2: {
        praise = 'Correct!';
        points = '+2';
        break;
      }
      default: {
        praise = 'Correct!';
        points = '+1';
      }
    }

    let clickHandler = this.handleNextClick;
    let enterHandler = this.handleNextEnterPress;

    this.setState({
      modal: {
        state: 'show',
        praise,
        points,
        explanation,
        clickHandler,
        enterHandler
      }
    });
  };

  nextStep = () => {
    const { questions, userAnswers, step, score } = this.state;
    const restOfQuestions = questions.slice(1);
    const currentStep = step - 1;
    const tries = userAnswers[currentStep].tries;

    this.setState({
      step: step + 1,
      score: this.updateScore(tries, score),
      questions: restOfQuestions,
      modal: {
        state: 'hide'
      }
    });
  };

  updateScore(tries, score) {
    switch (tries) {
      case 1: return score + 10;
      case 2: return score + 5;
      case 3: return score + 2;
      default: return score + 1;
    }
  }

  restartQuiz = () => {
    this.setState({
      ...this.getInitialState(this.props.totalQuestions)
    });
  };

  render() {
    const { step, questions, userAnswers, totalQuestions, score, scoreMax, modal } = this.state;

    if (step >= totalQuestions + 1) {
      return (
        <Results
          score={score}
          scoreMax={scoreMax}
          restartQuiz={this.restartQuiz}
          userAnswers={userAnswers}
        />
      );
    } else return (
      <Fragment>
        <Quiz
          step={step}
          questions={questions}
          totalQuestions={totalQuestions}
          score={score}
          handleAnswerClick={this.handleAnswerClick}
          handleEnterPress={this.handleEnterPress}
        />
        { modal.state === 'show' && <Modal modal={modal} /> }
      </Fragment>
    );
  }
}

export default QuizApp;
