import React, { useState } from 'react';

const ItemList = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Artwork 1',
      artistName: 'Artist A',
      initialBidPrice: '$100',
      addedDate: '2023-09-20',
    },
    {
      id: 2,
      name: 'Artwork 2',
      artistName: 'Artist B',
      initialBidPrice: '$150',
      addedDate: '2023-09-21',
    },
    {
      id: 3,
      name: 'Artwork 3',
      artistName: 'Artist C',
      initialBidPrice: '$80',
      addedDate: '2023-09-22',
    },
  ]);

  return (
    <div className="container" >
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
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.artistName}</td>
                <td>{item.initialBidPrice}</td>
                <td>{item.addedDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ItemList;
