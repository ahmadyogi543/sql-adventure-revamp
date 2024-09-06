import { Card } from "react-bootstrap";

const DashboardCard = ({ icon, title, subtitle, variant }) => {
  return (
    <Card bg={variant}>
      <Card.Body className="p-4">
        <h5 className="mb-4">{title.toUpperCase()}</h5>
        <div className="d-flex align-items-center">
          {icon}
          <Card.Text className="small m-0 ms-3">
            {subtitle.toUpperCase()}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DashboardCard;
