
// 액션 타입 정의
const CHANGE_FIELD = "auth/CHANGE_FIELD";

// 액션 생성 함수

export const changeField = (form, key, value) => ({
  type : CHANGE_FIELD,
  form,
  key, // username, password, passwordConfirm
  value, // 실제로 바꾸려는 값
});



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
      return ({
        ...state,
        [action.form]: {
          ...state[action.form],
          [action.key] : action.value
        }
      })
    default :
      return state
  }
};


export default authReducer