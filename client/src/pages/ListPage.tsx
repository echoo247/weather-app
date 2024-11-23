import { useEffect, useState } from "react";
import axios from "axios";

const ListPage = () => {
  const [queries, setQueries] = useState<any[]>([]);

  useEffect(() => {
    const fetchQueries = async () => {
      const response = await axios.get("http://localhost:3000/weather/recent");
      setQueries(response.data);
    };
    
    fetchQueries();
  }, []);

  return (
    <div>
      <h2>Last 100 Queries</h2>
      <ul>
        {queries.map(query => (
          <li key={query._id}>
            {query.city} - {new Date(query.createdAt).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPage;
