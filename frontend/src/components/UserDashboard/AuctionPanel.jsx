import React from 'react';

const AuctionPanel = () => {
  return (
    <>
      <h3 className='d-flex justify-content-center mt-2 fw-bold'>Auction Panel</h3>
      <div className="container" style={{ marginTop: "2rem", border: "2px solid black", backgroundColor: "rgb(63 220 233)" }}>
        <div className="row">
          <div className="col-md-11">
            <h4 className='fw-bold'>Product Details</h4>
            <div className="mb-3">
              <div className="row">
                <div className="col-md-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" required />
                </div>
                <div className="col-md-3">
                  <label htmlFor="artist" className="form-label">Artist</label>
                  <input type="text" className="form-control" id="artist" required />
                </div>
                <div className="col-md-3">
                  <label htmlFor="productionYear" className="form-label">Production Year</label>
                  <input type="text" className="form-control" id="productionYear" required />
                </div>
                <div className="col-md-3">
                  <label htmlFor="category" className="form-label">Category</label>
                  <select
                    className="form-control"
                    id="category"
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
                    id="classification"
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
                  <input type="file" className="form-control" id="image" required />
                </div>
                <div className="col-md-3">
                  <label htmlFor="materialUsed" className="form-label">Material Used</label>
                  <input type="text" className="form-control" id="materialUsed" required />
                </div>
                <div className="col-md-3">
                  <label htmlFor="dimensions" className="form-label">Dimensions</label>
                  <input type="text" className="form-control" id="dimensions" required />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea className="form-control" id="description" rows="3" required></textarea>
        </div>
        <div className="row mt-4">
          <h4 className='fw-bold'>Auction Details</h4>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="auctionDate" className="form-label">Auction Date</label>
              <input type="date" className="form-control" id="auctionDate" required />
            </div>
            <div className="mb-3">
              <label htmlFor="auctionTime" className="form-label">Auction Time</label>
              <input type="time" className="form-control" id="auctionTime" required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="auctionDuration" className="form-label">Auction Duration</label>
              <input type="number" className="form-control" id="auctionDuration" required />
            </div>
            <div className="mb-3">
              <label htmlFor="basePrice" className="form-label">Base Price</label>
              <input type="number" id="basePrice" name="basePrice" className="form-control" step="0.01" min="0" placeholder="0.00" required />
            </div>
          </div>
        </div>
        <div className="d-grid gap-2 m-3">
          <button className="btn btn-danger fw-bold" type="button">Submit</button>
        </div>
      </div>
    </>
  );
}

export default AuctionPanel;
