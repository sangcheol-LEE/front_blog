
// 액션 타입 정의
const CHANGE_FIELD = "auth/CHANGE_FIELD";
const FORM_STATUS = 'auth/FORM_STATUS'

// 액션 생성 함수

export const changeField = (form, key, value) => ({
  type : CHANGE_FIELD,
  form,
  key, // username, password, passwordConfirm
  value, // 실제로 바꾸려는 값
});

export const changeFormStatus = status => ({
  type : FORM_STATUS,
  status
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
      console.log("kind of",action)
      return ({
            ...state,
        })
    default :
      return state
  }
};


export default authReducer