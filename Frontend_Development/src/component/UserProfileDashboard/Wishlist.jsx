// src/UserProfileDashboard/Wishlist.jsx
import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col, Button, Spinner, Alert } from "react-bootstrap";
import axios from "axios";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
<<<<<<< HEAD
      .get("http://localhost:5000/api/user/wishlist", {
=======
      .get("http://localhost:5500/api/user/wishlist", {
>>>>>>> 8831020fd900bd3462c9029700e445b8ce93fd97
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setWishlist(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching wishlist:", err);
        setMessage("Failed to load wishlist");
        setLoading(false);
      });
  }, []);

  const handleRemove = (productId) => {
    axios
<<<<<<< HEAD
      .delete(`http://localhost:5000/api/user/wishlist/${productId}`, {
=======
      .delete(`http://localhost:5500/api/user/wishlist/${productId}`, {
>>>>>>> 8831020fd900bd3462c9029700e445b8ce93fd97
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        setWishlist(prev => prev.filter(item => item.id !== productId));
        setMessage("Item removed from wishlist.");
      })
      .catch(err => {
        console.error("Failed to remove item:", err);
        setMessage("Failed to remove item.");
      });
  };

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" />
      </Container>
    );
  }

  return (
    <Container className="my-4">
<<<<<<< HEAD
      <h3 className="mb-4 fw-bold">❤ My Wishlist</h3>
=======
      <h3 className="mb-4 fw-bold">❤️ My Wishlist</h3>
>>>>>>> 8831020fd900bd3462c9029700e445b8ce93fd97

      {message && <Alert variant="info">{message}</Alert>}

      {wishlist.length === 0 ? (
        <p>You have no items in your wishlist.</p>
      ) : (
        <Row>
          {wishlist.map((item) => (
            <Col md={6} lg={4} key={item.id} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={item.imageUrl || "https://via.placeholder.com/150"}
                  alt={item.name}
                />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Text className="fw-bold text-success">₹{item.price}</Card.Text>
                  <Button
                    variant="danger"
                    onClick={() => handleRemove(item.id)}
                    size="sm"
                  >
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

<<<<<<< HEAD
export default Wishlist;
=======
export default Wishlist;
>>>>>>> 8831020fd900bd3462c9029700e445b8ce93fd97
