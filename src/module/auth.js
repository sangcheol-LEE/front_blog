
// 액션 타입 정의
const CHANGE_FIELD = "auth/CHANGE_FIELD";
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';


// 액션 생성 함수

export const changeField = (form, key, value) => ({
  type : CHANGE_FIELD,
  form, // register, login
  key, // username, password, passwordConfirm
  value, // 실제로 바꾸려는 값
});

export const initializeForm = form => ({ // register
  type : INITIALIZE_FORM,
  form
})




const initialState = {
  register : {
    username : '',
    password: '',
    passwordConfirm : '',
  },
  login : {
    username : '',
    password : ''
  }
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_FIELD :
      console.log("redux",action.form)
      const {form, key, value} = action.form;
      return {
        ...state[form],
          [key] : value
      }
    case INITIALIZE_FORM :
      return {
         ...state,
         [action.form] : initialState[action.form]
        }

    default :
      return state
  }
};


export default authReducer