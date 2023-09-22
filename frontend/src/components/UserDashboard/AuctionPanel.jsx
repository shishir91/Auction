import React, { useState } from 'react';
import api from "../../api/config.js"

const AuctionPanel = () => {
  const [formData, setFormData] = useState({
    name: '',
    artist: '',
    description: '',
    category: '',
    mediumUsed: '',
    subjectClassification: "",
    producedYear: '',
    materialUsed: '',
    dimension: '',
    auctionDate: '',
    auctionTime: '',
    auctionDuration: '',
    basePrice: '',
    image: '',
    uploadedBy: ''
  });
  // const uploadedBy = localStorage.getItem("userEmail")


  const [image, setImage] = useState()


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const response = await fetch("http://localhost:5000/item/add", {
      //   method: "POST",
      //   body: JSON.stringify(formData),
      // });

      const formDataObj = new FormData();
      formDataObj.append('name', formData.name);
      formDataObj.append('artist', formData.artist);
      formDataObj.append('description', formData.description);
      formDataObj.append('category', formData.category);
      formDataObj.append('mediumUsed', formData.mediumUsed);
      formDataObj.append('subjectClassification', formData.subjectClassification);
      formDataObj.append('producedYear', formData.producedYear);
      formDataObj.append('materialUsed', formData.materialUsed);
      formDataObj.append('dimension', formData.dimension);
      formDataObj.append('auctionDate', formData.auctionDate);
      formDataObj.append('auctionTime', formData.auctionTime);
      formDataObj.append('auctionDuration', formData.auctionDuration);
      formDataObj.append('basePrice', formData.basePrice);
      formDataObj.append('image', image);
      formDataObj.append('uploadedBy', localStorage.getItem("userEmail"));

      const response = await api.post("/item/add", formDataObj);


      console.log(formData)

      // const data = response.json();

      console.log(response.data)

      // console.log("Data Added:", data.message);

      if (response.data.success === true) {
        // setFormData({
        //   name: '',
        //   artist: '',
        //   description: '',
        //   category: '',
        //   mediumUsed: '',
        //   materialUsed: '',
        //   dimension: '',
        //   auctionDate: '',
        //   auctionTime: '',
        //   auctionDuration: '',
        //   basePrice: '',
        //   image: '',
        // });

        alert("Item is Added");
      } else {
        alert("Error adding item")
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
                  <label htmlFor="producedYear" className="form-label">Production Year</label>
                  <input type="number" className="form-control" name="producedYear" min="1900" max="2099" id="producedYear" value={formData.productionYear} onChange={handleChange} required />
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
                    <option value="Photographic">Photographic</option>
                    <option value="Sculptures">Sculptures</option>
                    <option value="Carvings">Carvings</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="row">
                <div className="col-md-3">
                  <label htmlFor="subjectClassification" className="form-label">Classification</label>
                  <select
                    className="form-control"
                    name="subjectClassification"
                    id="subjectClassification"
                    value={formData.subjectClassification}
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
                  <input type="file" className="form-control" name="image" id="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])} required />
                </div>
                <div className="col-md-3">
                  <label htmlFor="materialUsed" className="form-label">Material Used / Medium Used</label>
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
              <label htmlFor="auctionDuration" className="form-label">Auction Duration (In Minute)</label>
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
