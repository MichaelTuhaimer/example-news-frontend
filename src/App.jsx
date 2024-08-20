import axios from "axios";
import { ArticlesPage } from "./ArticlesPage";

axios.defaults.baseURL = "http://localhost:3000";

function App() {
  return (
    <div>
      <ArticlesPage />
    </div>
  );
}

export default App;
