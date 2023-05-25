import { Col, Container, Row } from "react-bootstrap";
import "./BookCard.css";
import { FormattedMessage } from 'react-intl';

export default function BookCard({ title, createdDate, BookLogo }) {
  const cardStyle = {
    width: "18rem",
  };

  return (
    <div class="card" style={cardStyle}>
      <img class="card-img-top" src={BookLogo} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <Row>
          <p class="card-text"><FormattedMessage id="created_in" /> {createdDate}</p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </Row>
      </div>
    </div>
  );
}
