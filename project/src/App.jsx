import "./styles/App.css";
import SignupForm from "./components/SignupForm";

function App() {
  return (
    <div className="App">
      <main>
        <div className="container">
          <div className="container__content">
            <div class="container__content--wrapper">
              <h1>Learn to code by watching others</h1>
              <p>
                See how experienced developers solve problems in real-time.
                Watching scripted tutorials is great, but understanding how
                developers think is invaluable.
              </p>
            </div>
          </div>
          <div className="container__form">
            <div>
              Try it free 7 days <span>then $20/mo. thereafter</span>
            </div>
            <div>
              <div class="container__form--wrapper">
                <SignupForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
