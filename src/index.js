import {createStore} from "redux";
import {Provider} from "react-redux";
import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";
import {reducer} from "./reducer/reducer.js";
import questions from "./mocks/questions.js";

const Settings = {
  ERRORS_COUNT: 3
};

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        errorsCount={Settings.ERRORS_COUNT}
        questions={questions}
      />
    </Provider>,
    document.querySelector(`#root`)
);
