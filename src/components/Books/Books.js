
import "./Books.css";
import { Col } from "react-bootstrap";
import BooksContainer from "../BooksContainer/BooksContainer";
import React, {useState } from "react";

export default function Books({}) {

  const [searchValue, setSearchValue] = useState("");
  
  const handleSearch = (value) => {
    setSearchValue(value);
  };

  return (
    <div className="Books">
      <Col>
        <BooksContainer courseName={searchValue}/>
      </Col>
    </div>
  );
}
