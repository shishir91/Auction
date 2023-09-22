import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Demo from "../images/auction.png";
import api from "../api/config.js";



const Bidding = () => {
    const item = useLocation().state.item;
    const [count, setCount] = useState(0);
    const [bid, setBid] = useState()
    const [highBid, setHigBid] = useState(item.basePrice)
    const [basePrice, setBasePrice] = useState(highBid); // Added basePrice state


    const itemID = item.id;

    const incrementCount = () => {
        setCount(count + 1);
    };

    const placeBid = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/bidding", {
                itemID: item.id,
                userID: localStorage.getItem("userID"),
                bid: bid,
            })

            console.log(response.data)

            if (response.data.success === true) {
                console.log("Bid Placed", response.data)
                if (bid > basePrice && bid > highBid) { // Check if bid is higher than basePrice
                    setHigBid(bid); // Update highBid with the new bid amount
                    setBasePrice(bid); // Update basePrice with the new bid amount
                } else {
                    alert("Bid must be higher than the base price.")
                    return ("Bid must be higher than the base price.");
                }
            }
            else {
                console.log("Error fetching highest bid")
            }
        } catch (error) {
            console.log("server error: ", error)
            alert("Server Error getting bid")
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            // Your code to execute every second goes here
            async function getHighestBid() {

                console.log("effect", itemID)
                const response = await api.get(`/bidding/getHighestBid/${itemID}`)
                console.log(response.data)
                try {
                    console.log(response.data.data.bid)
                    setHigBid(response.data.data.bid)
                    console.log(setHigBid)
                    if (response.data) { console.log("Highest bid fetched: ", response) }
                    else { console.log("Error fetching highest bid") }
                } catch (error) {
                    console.log("server error: ", error)
                    // alert("Server Error getting bid")
                }
            }
            getHighestBid();

        }, 500); // 500 milliseconds = 1 second
        return () => clearInterval(timer);
    }, []);


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

                    <h4 className="mt-3">Current Bid</h4>
                    {/* <h5>${item.basePrice < highBid.bid ? highBid.bid : item.basePrice} */}
                    <h5>$ {highBid}
                        &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; 8 Bids
                    </h5>
                    <h6>Current Bidder:  </h6>

                    <div style={{ marginTop: "3rem" }}>
                        <form action="post" onSubmit={placeBid}>
                            <h6>Submit Your Bid</h6>
                            <input type="number" className="p-2" onChange={(event) => { setBid(event.target.value) }} />{" "}
                            <button className="p-2 btn btn-success">Submit</button>
                        </form>
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