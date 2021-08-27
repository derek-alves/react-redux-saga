export function addReserveRequest(id:Number){
    return {
      type: "ADD_RESERVE_REQUEST",
      id,
    }
}

export function addReserveSuccess(trip:Trip){
    return {
      type: "ADD_RESERVE_SUCCESS",
      trip,
    }
}

export function removeReserve(id:Number){
    return {
      type: "REMOVE_RESERVE",
      id: id,
      trip: null,
    }
}


export function updateAmountReserve(id:Number, amount:Number){
    return {
      type: "UPDATE_RESERVE",
      id: id,
      trip: null,
      amount
    }
}