import React, { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";

const AdmindeleteProducts = () => {
  const [products, setProducts] = useState([]);

  // Fetch products on component load
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axiosInstance.get("/api/products");
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  // Delete product handler
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axiosInstance.delete(`/api/products/${id}`);
        fetchProducts(); // Refresh list
      } catch (err) {
        console.error("Error deleting product:", err);
      }
    }
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4">Delete Products</h2>

      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((prod) => (
                <tr key={prod._id}>
                  <td>{prod.name}</td>
                  <td>
                    <img src={prod.image} alt="product" style={{ width: "80px" }} />
                  </td>
                  <td>₹{prod.price}</td>
                  <td>{prod.stock}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(prod._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdmindeleteProducts;