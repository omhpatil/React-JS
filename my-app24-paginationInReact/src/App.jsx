import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./components/Pagination";

function App() {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 10;

  // Paste your API URL here
  const API_URL = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {

    axios.get(API_URL)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  // Calculate records for current page
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const currentRecords = data.slice(firstIndex, lastIndex);

  // Calculate total pages
  const totalPages = Math.ceil(data.length / recordsPerPage);

  return (
    <div>

      <h2>Pagination Example</h2>

      <table border="1">

        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>

        <tbody>

          {currentRecords.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
            </tr>
          ))}

        </tbody>

      </table>

      <br />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />

    </div>
  );
}

export default App;