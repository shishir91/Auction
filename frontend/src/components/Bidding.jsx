import React from 'react';
import Demo from '../images/auction.png';

const Bidding = () => {
    return (
        <div>
            <div className="row">
                <div
                    className="col-md-4"
                    style={{
                        paddingLeft: '3rem',
                        margin: '1rem'
                    }}
                >
                    <div>
                        <img
                            src={Demo}
                            alt=""
                            style={{
                                width: '25rem',
                                height: 'auto'
                            }}
                        />
                    </div>

                    <h4 className='mt-3'>Current Bid</h4>
                    <h5>$ 1200  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; 8 Bids</h5>

                    <div style={{ marginTop: "3rem" }}>
                        <h6>Submit Your Bid</h6>
                        <input type="number" className='p-2' /> <button className='p-2 btn btn-success '>Submit</button>
                    </div>
                </div>

                <div className="col-md-6"
                    style={{
                        paddingLeft: '3rem',
                        margin: '1rem'
                    }}>
                    <h4>Heading Goes Here</h4>
                    <h6>By The Name of the Artist or Whatever</h6> <br />

                    <h5>Description</h5>
                    <p>Comedian: "So I was trying to use this new AI chatbot website called ChatGPT and I got an error message that said 'A lot of people are checking out ChatGPT right now. Please check back soon!'"

                    </p>

                    <h5>Product Details</h5>
                    <ul>
                        <li className="d-flex">
                            <b>Dimension: &nbsp; </b> <p>5cm</p>
                        </li>
                        <li className="d-flex">
                            <b>Frame: &nbsp;</b> <p>Minimalist Black Metallic Frame</p>
                        </li>
                        <li className="d-flex">
                            <b>Artist: &nbsp;</b> <p>Charles Bellender</p>
                        </li>
                        <li className="d-flex">
                            <b>Piece Title: &nbsp;</b> <p>Emergent Wealth</p>
                        </li>
                        <li className="d-flex">
                            <b>Period/Date of Production: &nbsp;</b> <p>2006</p>
                        </li>
                    </ul>

                    <h5>Auctions Details</h5>
                    <ul>
                        <li className="d-flex">
                            <b>Auction Title: &nbsp; </b> <p>21st Century English Painting from Emergent Artist - The Blast Collection</p>
                        </li>
                        <li className="d-flex">
                            <b>Location: &nbsp;</b> <p>Minimalist Black Metallic Frame</p>
                        </li>
                        <li className="d-flex">
                            <b>Auction Date: &nbsp;</b> <p>Charles Bellender</p>
                        </li>
                        <li className="d-flex">
                            <b>Lot Reference Number: &nbsp;</b> <p>Emergent Wealth</p>
                        </li>
                        <li className="d-flex">
                            <b>Lot Number: &nbsp;</b> <p>2006</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Bidding;
