import "./Card.css";
import "./CardFlag/CardFlag";
import CardFlag from "./CardFlag/CardFlag";

export default function Card() {
  return (
    <div className="card">
      <img
        src="https://www.carnival.com/-/media/images/ships/jb/carnival-jubilee-tile.jpg?w=360&h=175&as=1&iar=1"
        alt="ship"
        style={{ width: "100%" }}
      />
      <CardFlag />
      <div className="container">
        <h4>
          <b>Carnival Conquest</b>
        </h4>
        <p>Ship description</p>
      </div>
    </div>
  );
}
