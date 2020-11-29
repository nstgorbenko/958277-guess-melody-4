import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

import {ActionCreator} from "../../reducer/game/game.js";
import {AppRoute} from "../../const.js";
import {GameType} from "../../const.js";
import {getMistakes} from "../../reducer/game/selectors.js";
import Mistakes from "../mistakes/mistakes.jsx";

const GameScreen = (props) => {
  const {type, mistakes, children, goToWelcome} = props;

  return (
    <section className={`game game--${type}`}>
      <header className="game__header">
        <Link className="game__back"
          to={AppRoute.ROOT}
          onClick={goToWelcome}
        >
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </Link>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370"
            style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}}/>
        </svg>

        <Mistakes
          count={mistakes}
        />
      </header>

      {children}
    </section>
  );
};

GameScreen.propTypes = {
  type: PropTypes.oneOf(Object.values(GameType)).isRequired,
  mistakes: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  goToWelcome: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  mistakes: getMistakes(state),
});

const mapDispatchToProps = (dispatch) => ({
  goToWelcome() {
    dispatch(ActionCreator.goToWelcome());
  },
});

export {GameScreen};
export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
