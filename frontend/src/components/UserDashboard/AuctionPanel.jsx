import React, { useState } from 'react';

const AuctionPanel = () => {
  const [formData, setFormData] = useState({
    name: '',
    artist: '',
    description: '',
    category: '',
    productDetail: '',
    mediumUsed: '',
    materialUsed: '',
    dimension: '', // Changed from 'dimension' to 'dimensions'
    auctionDate: '',
    auctionTime: '',
    auctionDuration: '',
    basePrice: '',
    image: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/item/add", {
        method: "POST",
        headers: {
          'auth-token': localStorage.getItem('login'),
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      console.log(data)
      console.log("Data Added:", data.message);

      if (data.success) {
        setFormData({
          name: '',
          artist: '',
          description: '',
          category: '',
          productDetail: '',
          mediumUsed: '',
          materialUsed: '',
          dimension: '',
          auctionDate: '',
          auctionTime: '',
          auctionDuration: '',
          basePrice: '',
          image: '',
        });

        alert("Item is Added");
      } else {
        throw new Error("Error adding item");
      }
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className='d-flex justify-content-center fw-bold'>Auction Panel</h3>
      <div className="container" style={{ marginTop: "2rem", border: "2px solid black", backgroundColor: "rgb(63 220 233)" }}>
        <div className="row">
          <div className="col-md-11">
            <h4 className='fw-bold'>Product Details</h4>
            <div className="mb-3">
              <div className="row">
                <div className="col-md-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" name="name" id="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="col-md-3">
                  <label htmlFor="artist" className="form-label">Artist</label>
                  <input type="text" className="form-control" name="artist" id="artist" value={formData.artist} onChange={handleChange} required />
                </div>
                <div className="col-md-3">
                  <label htmlFor="productionYear" className="form-label">Production Year</label>
                  <input type="number" className="form-control" name="productionYear" min="1900" max="2099" id="productionYear" value={formData.productionYear} onChange={handleChange} required />
                </div>
                <div className="col-md-3">
                  <label htmlFor="category" className="form-label">Category</label>
                  <select
                    className="form-control"
                    name="category"
                    id="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="Drawing">Drawing</option>
                    <option value="Painting">Painting</option>
                    <option value="Photographic Images">Photographic Images</option>
                    <option value="Sculptures">Sculptures</option>
                    <option value="Carvings">Carvings</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="row">
                <div className="col-md-3">
                  <label htmlFor="classification" className="form-label">Classification</label>
                  <select
                    className="form-control"
                    name="classification"
                    id="classification"
                    value={formData.classification}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="Landscape">Landscape</option>
                    <option value="Seascape">Seascape</option>
                    <option value="Portrait">Portrait</option>
                    <option value="Figure">Figure</option>
                    <option value="Still Life">Still Life</option>
                    <option value="Nude">Nude</option>
                    <option value="Animal">Animal</option>
                    <option value="Abstract">Abstract</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label htmlFor="image" className="form-label">Image</label>
                  <input type="file" className="form-control" name="image" id="image" value={formData.image} onChange={handleChange} required />
                </div>
                <div className="col-md-3">
                  <label htmlFor="materialUsed" className="form-label">Material Used</label>
                  <input type="text" className="form-control" name="materialUsed" id="materialUsed" value={formData.materialUsed} onChange={handleChange} required />
                </div>
                <div className="col-md-3">
                  <label htmlFor="dimension" className="form-label">Dimension</label>
                  <input type="text" className="form-control" name="dimension" id="dimension" value={formData.dimension} onChange={handleChange} required />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea className="form-control" name="description" id="description" rows="3" value={formData.description} onChange={handleChange} required></textarea>
        </div>
        <div className="row mt-4">
          <h4 className='fw-bold'>Auction Details</h4>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="auctionDate" className="form-label">Auction Date</label>
              <input type="date" className="form-control" name="auctionDate" id="auctionDate" value={formData.auctionDate} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="auctionTime" className="form-label">Auction Time</label>
              <input type="time" className="form-control" name="auctionTime" id="auctionTime" value={formData.auctionTime} onChange={handleChange} required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="auctionDuration" className="form-label">Auction Duration</label>
              <input type="number" className="form-control" name="auctionDuration" id="auctionDuration" value={formData.auctionDuration} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="basePrice" className="form-label">Base Price</label>
              <input type="number" id="basePrice" name="basePrice" className="form-control" step="0.01" min="0" placeholder="0.00" value={formData.basePrice} onChange={handleChange} required />
            </div>
          </div>
        </div>
        <div className="d-grid gap-2 m-3">
          <button className="btn btn-danger fw-bold" type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default AuctionPanel;
