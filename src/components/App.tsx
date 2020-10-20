import React from "react";
import "./App.css";
import Weather from "./Weather";

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
        <header className={`App-header`}>
          <h1 className={`App-header-main`}>THIS IS A TEST</h1>
          <p className={`App-header-subtext`}>DO NOT ADJUST YOUR SCREENS</p>
        </header>
        <main>
          <Weather />
        </main>
      </div>
    );
  }
}

export default App;
