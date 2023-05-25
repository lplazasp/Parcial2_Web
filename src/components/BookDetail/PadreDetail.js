import { Container, Row, Card } from "react-bootstrap";
import BookDetail from "./BookDetail";
import libro from "../images/libro.jpeg";
import review from "../images/customer-review.png";
import comment from "../images/burbuja-de-chat.png";

function PadreDetail(){
    return(
        <Row>
            <BookDetail title = "El arte de la guerra"  
            image = {libro}
            description = "Aporte de: Felipe Cifuentes" 
            reseñas = "Reseñas 4.5"
            imageIconReview = {review} 
            imageIconComment = {comment}/>
        </Row>
    );
}

export default PadreDetail