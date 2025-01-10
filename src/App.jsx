// Don't use anchor tags, instead use Link
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="test">Take me to Test!</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default App;
