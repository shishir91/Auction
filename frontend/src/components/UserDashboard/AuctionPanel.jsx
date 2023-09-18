import React from 'react';

const AuctionPanel = () => {
  return (
    <>
      <h3 className=' d-flex justify-content-center mt-2 fw-bold '>Auction Panel</h3>
      <div className="container" style={{ marginTop: "2rem", border: "2px solid black" }}>
        <div className="row">
          <div className="col-md-6 Image-Part">
            <h4 className='fw-bold'>Image Details</h4>
            <div className="mb-3">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="itemImage" className="form-label">Item Image</label>
                  <input type="file" className="form-control" id="itemImage" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="baseBidPrice" className="form-label">Base Bid Price</label>
                  <input type="text" className="form-control" id="baseBidPrice" />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className='row'>
                <div className="col-md-6">
                  <label htmlFor="itemTitle" className="form-label">Item Title</label>
                  <input type="text" className="form-control" id="itemTitle" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="artistName" className="form-label">Artist Name</label>
                  <input type="text" className="form-control" id="artistName" />
                </div>
              </div>
            </div>

          </div>
          <div className="col-md-6">
            <h4 className='fw-bold'>Product Details</h4>
            <div className="mb-3">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="dimension" className="form-label">Dimension</label>
                  <input type="text" className="form-control" id="dimension" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="frame" className="form-label">Frame</label>
                  <input type="text" className="form-control" id="frame" />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="pieceTitle" className="form-label">Piece Title</label>
                  <input type="text" className="form-control" id="pieceTitle" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="productionDate" className="form-label">Period/Date of Production</label>
                  <input type="text" className="form-control" id="productionDate" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea className="form-control" id="description" rows="3"></textarea>
        </div>
        <div className="row mt-4">
          <h4 className='fw-bold'>Auction Details</h4>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="auctionTitle" className="form-label">Auction Title</label>
              <input type="text" className="form-control" id="auctionTitle" />
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">Location</label>
              <input type="text" className="form-control" id="location" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="auctionDate" className="form-label">Auction Date</label>
              <input type="date" className="form-control" id="auctionDate" />
            </div>
            <div className="mb-3">
              <div className="row">
                <div className="col-md-6">

                  <label htmlFor="lotReferenceNumber" className="form-label">Lot Reference Number</label>
                  <input type="text" className="form-control" id="lotReferenceNumber" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="lotNumber" className="form-label">Lot Number</label>
                  <input type="text" className="form-control" id="lotNumber" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-grid gap-2 m-3">
          <button class="btn btn-danger fw-bold" type="button">Submit</button>
        </div>
      </div>
    </>
  );
}

export default AuctionPanel;
