import client from "./client"

const endpoint ="/my/listings";

const getMyListings=()=>client.get(endpoint);

export default{getMyListings};