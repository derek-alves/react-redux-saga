interface Trip {
  id: number;
  title: string;
  status: boolean;
  image: string;
  amount:Numeber?;
}

interface ActionProps{
    type: "ADD_RESERVE_SUCCESS" | "REMOVE_RESERVE" | "UPDATE_RESERVE" ;
    trip: Trip?;
    id?: Number;
    amount?:Number;
}


interface ReserveState{
  reserve: Array<Trip>;
}

interface Reserve{
  trip:Trips;
  amount:Number;
}