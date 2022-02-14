import { Link } from "react-router-dom";

const ListItem = ({ id, image, name, rating }) => {
  return (
    <Link to={`/singleShow/${id}`} className="listitem">
      <img src={image} alt={name} />
      <div className="listitem__info">
        <h4 className="info__name">{name}</h4>
        <h4 className="info__rating">{rating}</h4>
      </div>
    </Link>
  );
};

export default ListItem;
