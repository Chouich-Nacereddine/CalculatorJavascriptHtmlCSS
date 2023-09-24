import { useState } from "react";

function App() {
  const [displayValue, setDisplayValue] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setDisplayValue(eval(displayValue));
      } catch (error) {
        setDisplayValue("Error");
      }
    } else if (value === "AC") {
      setDisplayValue("");
    } else if (value === "DE") {
      setDisplayValue(displayValue.slice(0, -1));
    } else {
      setDisplayValue(displayValue + value);
    }
  };

  return (
    <>
      <div>
        <section className="section">
          <div className="container">
            <form action="">
              <div className="display">
                <input
                  type="text"
                  name="display"
                  value={displayValue}
                  readOnly
                />
              </div>
              <div>
                <input
                  type="button"
                  value="AC"
                  onClick={() => handleButtonClick("AC")}
                />
                <input
                  type="button"
                  value="DE"
                  onClick={() => handleButtonClick("DE")}
                />
                <input
                  type="button"
                  value="."
                  onClick={() => handleButtonClick(".")}
                />
                <input
                  type="button"
                  value="/"
                  onClick={() => handleButtonClick("/")}
                />
              </div>
              <div>
                <input
                  type="button"
                  value="7"
                  onClick={() => handleButtonClick("7")}
                />
                <input
                  type="button"
                  value="8"
                  onClick={() => handleButtonClick("8")}
                />
                <input
                  type="button"
                  value="9"
                  onClick={() => handleButtonClick("9")}
                />
                <input
                  type="button"
                  value="*"
                  onClick={() => handleButtonClick("*")}
                />
              </div>
              <div>
                <input
                  type="button"
                  value="4"
                  onClick={() => handleButtonClick("4")}
                />
                <input
                  type="button"
                  value="5"
                  onClick={() => handleButtonClick("5")}
                />
                <input
                  type="button"
                  value="6"
                  onClick={() => handleButtonClick("6")}
                />
                <input
                  type="button"
                  value="-"
                  onClick={() => handleButtonClick("-")}
                />
              </div>
              <div>
                <input
                  type="button"
                  value="1"
                  onClick={() => handleButtonClick("1")}
                />
                <input
                  type="button"
                  value="2"
                  onClick={() => handleButtonClick("2")}
                />
                <input
                  type="button"
                  value="3"
                  onClick={() => handleButtonClick("3")}
                />
                <input
                  type="button"
                  value="+"
                  onClick={() => handleButtonClick("+")}
                />
              </div>
              <div>
                <input
                  type="button"
                  value="00"
                  onClick={() => handleButtonClick("00")}
                />
                <input
                  type="button"
                  value="0"
                  onClick={() => handleButtonClick("0")}
                />
                <input
                  type="button"
                  value="="
                  className="equal"
                  onClick={() => handleButtonClick("=")}
                />
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
