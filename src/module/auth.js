const SAMPLE_ACTION = 'auth/SAMPLE_ACTION' ;

export const sampleAction = () => ({
  type : "SAMPEL_ACTION"
});

const initialState = {

};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SAMPLE_ACTION : 
      return {
        ...state,
        auth : ""
      }
    default : 
      return state
  }
};


export default authReducer