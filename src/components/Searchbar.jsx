import { useState, useContext } from "react";
import Alert from "./Alert";
import AlertContext from "../context/alerts/alertContext";
import ShowsContext from "../context/shows/showsContext";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchShows } = useContext(ShowsContext);
  const { alert, setAlert } = useContext(AlertContext);

  const onSeachHandler = (e) => {
    e.preventDefault();
    if (searchTerm === "") {
      setAlert("Please enter something", "danger");
    } else {
      searchShows(searchTerm);
    }
  };
  return (
    <div className="searchbar">
      {alert ? <Alert message={alert.message} type={alert.type} /> : null}

      <form className="searchbar__form">
        <input
          type="text"
          placeholder="Search form Tv Shows"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-block" onClick={onSeachHandler}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
