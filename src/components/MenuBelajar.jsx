import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import backgroundImage from "../../src/assets/images/home.jpg";

const MenuButton = ({ href, icon, onClick, title }) => {
  return (
    <Card
      className="text-secondary flex-grow-1 py-2"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "transparent",
      }}
    >
      <Card.Body className="mx-auto flex-center flex-column p-4">
        <div
          className="bg-secondary text-primary rounded-circle flex-center mx-auto mb-4"
          style={{
            width: 96,
            height: 96,
          }}
        >
          {icon}
        </div>
        <Link to={href}>
          <Button className="px-4" variant="secondary" onClick={onClick}>
            <span className="small fw-bold text-primary">
              {title.toUpperCase()}
            </span>
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default MenuButton;
