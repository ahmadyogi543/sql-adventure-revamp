import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";

const MenuItem = ({ active = false, icon, onClick, title }) => {
  return (
    <ListGroup.Item action active={active} onClick={onClick}>
      <div className="p-3 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          {icon}
          <span className="ms-2 small">{title.toUpperCase()}</span>
        </div>

        <BsChevronRight />
      </div>
    </ListGroup.Item>
  );
};

export default MenuItem;
