import { useParams } from "react-router-dom";
export default function Detail() {
 const params = useParams();
 return (
   <div>
     <h1>I am {params.booksId}</h1>
   </div>
 );
}