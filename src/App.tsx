import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import store, { persistor } from "redux/store";

import Home from "pages/Home";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Home />
      </PersistGate>
    </Provider>
  );
};

export default App;

// 1:19:00
