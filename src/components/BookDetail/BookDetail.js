
import { Col, Row } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import "./BookDetail.css";

const { useState } = require("react");

function BookDetail({title,image,description,reseñas,imageIconReview,imageIconComment}) {
    
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
      // Perform actions or add CSS class changes here
      setIsClicked(true);
      // Additional actions or effects can be added as needed
    };
    
    
    
    return (

    <Card>
        <Card.Body> 
            <Col>
                <Row>
                    <h1 className="title">{title}</h1>
                    <a href="https://www.youtube.com/watch?v=PpjDKB9HW-4" className="image-link" >
                    <img src={image} alt="" className="image" />
                    </a>
                </Row>

                <Row>
                    <Col>
                        <div className="descriptionReview">{description}{' '}{reseñas}</div>
                    </Col>
                </Row>

                <Row>
                    <button className={`image-button ${isClicked ? 'clicked' : ''}`} onClick={handleClick}>
                            <img src={imageIconReview} alt="" className="imageIconReview" />
                    </button>

                    <button className={`image-button ${isClicked ? 'clicked' : ''}`} onClick={handleClick}>
                            <img src={imageIconComment} alt="" className="imageIconComment" />
                    </button>
                </Row>

            </Col>
        </Card.Body> 
    </Card>
        
    );
}

export default BookDetail;