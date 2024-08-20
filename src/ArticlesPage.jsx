import axios from "axios";
import { useState } from "react";
import { ArticlesIndex } from "./ArticlesIndex";

export function ArticlesPage() {
  const [searchTerms, setSearchTerms] = useState("");
  const [articles, setArticles] = useState([]);

  const handleIndex = () => {
    console.log(searchTerms);
    axios.get("/articles.json?search_terms=" + searchTerms).then((response) => {
      setArticles(response.data);
    });
  };

  return (
    <main>
      <div>
        Search:
        <input value={searchTerms} onChange={(event) => setSearchTerms(event.target.value)} type="text" />
        <button onClick={handleIndex}>Search</button>
      </div>
      <ArticlesIndex articles={articles} />
    </main>
  );
}
