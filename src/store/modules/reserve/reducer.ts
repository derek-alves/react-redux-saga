import produce from "immer";

export default function reserve(state = [], action:ActionProps){
   
   switch(action.type){
        case 'ADD_RESERVE_SUCCESS':
           return produce<Array<Trip>, Array<Trip>>(state,draft=>{
              const tripIndex = draft.findIndex((trip:Trip) => trip.id === action.trip!.id);
              
               if(tripIndex >=0){
                  draft[tripIndex].amount += 1;
               }else{
                  draft.push({
                     ...action.trip!,
                     amount:1,
                  });
               }
           });

         case "REMOVE_RESERVE":
            return produce<Array<Trip>, Array<Trip>>(state,draft =>{
               const tripIndex = draft.findIndex((trip:Trip) => trip.id === action.id);
               console.log(tripIndex);
               if(tripIndex >= 0){
                  draft.splice(tripIndex,1);
               }
            });


          case "UPDATE_RESERVE":{
             if(action.amount! <= 0)
                return state;
             
           
            return produce<Array<Trip>, Array<Trip>>(state,draft =>{
                const tripIndex = draft.findIndex((trip:Trip) => trip.id === action.id);

                if(tripIndex >= 0){
                  draft[tripIndex].amount = Number(action.amount);
               }
            });   
          }
        default:
            return state;
   }
    
}

// export default function reserve(state = [], action:ActionProps){
//     console.log(state);
//    switch(action.type){
//         case 'ADD_RESERVE':
//            return [...state, {...action.trip, amount:1,}];
//         default:
//             return state;
//    }