import React from 'react'
import { Link } from 'react-router-dom'

const Painting = () => {
  return (
    <div>
      <h4 className='mx-4 px-3'>Drawings</h4>
      <div className='container m-3 p-3 d-flex'>
        <div class="card m-3" style={{ "width": "18rem" }} >
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="/bidding" class="btn btn-primary">Start Bidding</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Painting
