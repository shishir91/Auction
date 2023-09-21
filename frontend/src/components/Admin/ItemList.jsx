import React, { useState, useEffect } from 'react';
import api from "../../api/config.js";

const ItemList = () => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
      async function fetchItems() {
          try {
              const response = await api.get("/item");
              setItemList(response.data);
          } catch (error) {
              console.error("Error fetching items:", error);
          }
      }
      fetchItems();
  }, []);

  return (
    <div className="container " >
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Artist Name</th>
              <th>Initial Bid Price</th>
              <th>Added Date</th>
            </tr>
          </thead>
          <tbody>
            {itemList.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.artist}</td>
                <td>{item.basePrice}</td>
                <td>{item.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ItemList;
