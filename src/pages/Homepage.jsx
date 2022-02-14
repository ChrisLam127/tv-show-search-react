import Searchbar from "../components/Searchbar";
import { useContext } from "react";
import ShowsContext from "../context/shows/showsContext";
import ListItem from "../components/ListItem";
import img01 from "../images/img01.jpg";
import Loader from "../components/Loader";

const Homepage = () => {
  const showsContext = useContext(ShowsContext);
  const { loading, shows } = showsContext;
  return (
    <div className="homepage">
      <Searchbar />
      {loading ? (
        <Loader />
      ) : (
        <div className="homepage__list">
          {shows.map((item) => (
            <ListItem
              key={item.show.id}
              id={item.show.id}
              image={item.show.image ? item.show.image.medium : img01}
              name={item.show.name}
              rating={
                item.show.rating.average
                  ? item.show.rating.average
                  : "No Rating"
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Homepage;
