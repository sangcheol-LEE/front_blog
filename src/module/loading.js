
const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';


export const startLoading = () => ({
  type : START_LOADING,
  requestType : this.type
})

export const finishLoading = () => ({
  type : FINISH_LOADING,
  requestType: this.type
})


const initialState = {};

const loadingReducer = (state=initialState, action) => {
  switch(action.type) {
    case START_LOADING :
      return ({
        ...state,
        [action.payload] : true
      })

    case FINISH_LOADING :
      return ({
        ...state,
        [action.payload] : false
      })
    default :
      return state
  }
}

export default loadingReducer;