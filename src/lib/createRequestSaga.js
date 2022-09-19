import { call, put } from "redux-saga/effects";
import { startLoading, finishLoading } from "../module/loading";

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function*(action) {
    yield put (startLoading(type)); // loading start
  }
}