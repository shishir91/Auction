import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Demo from "../images/auction.png";
import api from "../api/config.js";
const socket = io.connect("http://localhost:5000")
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

var previousBid = 0;
var bidCount = 0;
const Bidding = () => {
    const item = useLocation().state.item;
    const username = localStorage.getItem("username")
    const userEmail = localStorage.getItem("userEmail")
    const room = item.lotNumber
    const socket = io.connect("http://localhost:5000/")
    // const join_room = async () => {
    //     const userEmail = localStorage.getItem("userEmail")
    //     const room = item.lotNumber
    //     if (userEmail !== "" && room !== "") {
    //         await socket.emit("join_room", { userEmail, room })
    //     }
    // }
    // join_room();

    const [bid, setbid] = useState("");

    const placeBid = async () => {
        if (bid !== "") {
            const bidData = {
                room,
                bid,
                bidder: username,
                bidCount,
                previousBid
            }
            await socket.emit("place_bid", bidData);
            // console.log(bidData);
        }
    };

    useEffect(() => {
        socket.on("receive_bidData", (data) => {
            console.log(data);
            bidCount++
            previousBid = data.bid;
            console.log(previousBid, bidCount);
        });
    }, [socket])


    return (
        <div>
            <div className="row">
                <div
                    className="col-md-4"
                    style={{
                        paddingLeft: "3rem",
                        margin: "1rem",
                    }}
                >
                    <div>
                        <img
                            src={item.image}
                            alt=""
                            style={{
                                width: "25rem",
                                height: "auto",
                            }}
                        />
                    </div>

                    {/* {bidList.map((bidContent) => {
                        return (
                            <div>
                                {(bidContent.currentBid) ?
                                    <h5>$
                                        {bidContent.currentBid}
                                    </h5>
                                    :
                                }
                            </div>
                        );
                    })} */}
                    <h4 className="mt-3">Current Bid</h4>
                    <h5>$
                        {item.basePrice}
                        &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; 8 Bids
                    </h5>
                    <h6>Current Bidder: </h6>

                    <div style={{ marginTop: "3rem" }}> 
                        <h6>Submit Your Bid</h6>
                        <input type="number" className="p-2" onChange={(event) => { setbid(event.target.value) }} />{" "}
                        <button className="p-2 btn btn-success" onClick={placeBid}>Submit</button>
                    </div>
                </div>

                <div
                    className="col-md-6"
                    style={{
                        paddingLeft: "3rem",
                        margin: "1rem",
                    }}
                >
                    <h4>{item.name}</h4>
                    <h6>By The Name of the Artist or Whatever</h6> <br />
                    <h5>Description</h5>
                    <p>
                        {item.description}
                    </p>
                    <h5>Product Details</h5>
                    <ul>
                        <li className="d-flex">
                            <b>Dimension: &nbsp; </b> <p>{item.description}</p>
                        </li>
                        <li className="d-flex">
                            <b>Frame: &nbsp;</b> <p>{item.frame}</p>
                        </li>
                        <li className="d-flex">
                            <b>Artist: &nbsp;</b> <p>{item.artist}</p>
                        </li>
                        <li className="d-flex">
                            <b>Piece Title: &nbsp;</b> <p>{item.pieceTitle}</p>
                        </li>
                        <li className="d-flex">
                            <b>Period/Date of Production: &nbsp;</b> <p>{item.producedYear}</p>
                        </li>
                    </ul>
                    <h5>Auctions Details</h5>
                    <ul>
                        <li className="d-flex">
                            <b>Auction Title: &nbsp; </b>{" "}
                            <p>
                                21st Century English Painting from Emergent Artist - The Blast
                                Collection
                            </p>
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
