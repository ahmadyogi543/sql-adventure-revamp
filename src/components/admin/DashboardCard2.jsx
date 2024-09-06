import { Card } from "react-bootstrap";
import { FaChartBar } from "react-icons/fa";

const DashboardCard2 = ({ children, title, variant }) => {
  return (
    <Card bg={variant}>
      <Card.Body className="p-4">
        <div className="d-flex align-items-center mb-4">
          <FaChartBar className="me-3" size={28} />
          <h5 className="m-0">{title.toUpperCase()}</h5>
        </div>
        <div>{children}</div>
      </Card.Body>
    </Card>
  );
};

export default DashboardCard2;
