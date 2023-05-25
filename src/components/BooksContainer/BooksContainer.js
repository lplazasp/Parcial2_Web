import React, { useEffect, useState } from "react";
import "./BooksContainer.css";
import BookCard from "../BookCard/BookCard";
import { Row, Col } from "react-bootstrap";
import { FormattedMessage } from 'react-intl';

export default function BooksContainer({ courseName }) {
  const [Books, setBooks] = useState([]);
  const [courseId, setCourseId] = useState("");
  const [BooksCourseId, setBooksCourseId] = useState([]);
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (courseName["courseName"] === "") {
      const URL = "http://localhost:3000/api/v1/Books";
      fetch(URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setBooks(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [token]);

  useEffect(() => {
    if (courseName["courseName"] !== "") {
      const URL = `http://localhost:3000/api/v1/course/name/${courseName}`;
      fetch(URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setCourseId(data);
        })
        .catch((error) => {
          console.error(error);
        });

      const URL2 = `http://localhost:3000/api/v1/courses/${courseId.id}/Books`;
      fetch(URL2, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setBooksCourseId(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [courseName, token]);
  console.log(BooksCourseId);

  return (
    <div className="container2">
      <h1 className="title2"><FormattedMessage id="my_Books" /></h1>
      <hr></hr>
      {Books.map((Book, index) => (
        <Row>
          <Col>
            <BookCard
              title={Book.title}
              createdDate={Book.publicationDate}
              BookLogo={Book.portada}
            />
          </Col>

          <Col>
            <BookCard
              title={Book.title}
              createdDate={Book.publicationDate}
              BookLogo={Book.portada}
            />
          </Col>

          <Col>
            <BookCard
              title={Book.title}
              createdDate={Book.publicationDate}
              BookLogo={Book.portada}
            />
          </Col>
        </Row>
      ))}
    </div>
  );
}
