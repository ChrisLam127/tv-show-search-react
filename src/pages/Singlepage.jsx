import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ShowsContext from "../context/shows/showsContext";
import img01 from "../images/img01.jpg";
import Loader from "../components/Loader";

const Singlepage = ({ match }) => {
  const id = useParams().id;
  const { getSingleShow, singleShow, loading } = useContext(ShowsContext);

  useEffect(() => {
    getSingleShow(id);
  }, []);

  const removeTags = (text) => {
    if (text === null || text === "") {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="singleshow">
          <img
            src={singleShow.image ? singleShow.image.medium : img01}
            alt={singleShow.name}
          />
          <div className="singleshow__info">
            <h1>{singleShow.name}</h1>
            {singleShow.genres &&
              singleShow.genres.map((genre) => (
                <span key={genre} className="singleshow__genre">
                  {genre}
                </span>
              ))}
            <p>
              <strong>Status:</strong> {singleShow.status && singleShow.status}
            </p>
            <p>
              <strong>Rating:</strong>{" "}
              {singleShow.rating ? singleShow.rating.average : "No Rating"}
            </p>
            <p>
              <strong>Offical Site:</strong>{" "}
              {singleShow.officialSite ? (
                <a
                  href={singleShow.officalSite}
                  target="_blank"
                  rel="noreferrer"
                >
                  {singleShow.officialSite}
                </a>
              ) : (
                "No official Site"
              )}
            </p>
            <p>{singleShow.summary && removeTags(singleShow.summary)}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Singlepage;
