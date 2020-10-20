import React from "react";
import "./App.css";

interface AppProps {}
interface AppState {
  loading: boolean;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { loading: false };
  }

  render() {
    return (
      <div className={`App`}>
        <h1 className={`App-header App-header-main`}>THIS IS A TEST</h1>
        <p className={`App-header App-header-subtext`}>
          DO NOT ADJUST YOUR SCREENS
        </p>
      </div>
    );
  }
}

export default App;
