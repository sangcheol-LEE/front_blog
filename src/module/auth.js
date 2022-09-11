
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
      return {
        ...state,
        [action.form]: {
          ...state.register,
          username : action.key.username,
          password : action.key.password,
          passwordConfirm : action.key.passwordConfirm
        }
      }
    default :
      return state
  }
};


export default authReducer