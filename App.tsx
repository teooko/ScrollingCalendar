import React from 'react';
import ScrollingCalendar from "./src/ScrollingCalendar.jsx";
import {Provider} from "react-redux";
import Store from "./store";
function App(): React.JSX.Element {
  return (
      <Provider store={Store}>
        <ScrollingCalendar />
      </Provider>
  )
}
export default App;
