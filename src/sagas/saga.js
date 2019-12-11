import { delay } from 'redux-saga/effects';
import { takeLatest, put } from 'redux-saga/effects';

let ideasList = [
    { id: "1", created_date: "11/12/2019", title: "Flying Cars", body: "Using hydrogen we can fly cars.", img:"https://static.euronews.com/articles/stories/03/83/78/88/945x531_cmsv2_8e055c3d-1f36-5f3f-ac17-b2f2f05cd7a3-3837888.jpg" },
    { id: "2", created_date: "12/12/2019", title: "Swimming Cars", body: "Cars like boats are more fun to ride.", img:"https://i.pinimg.com/originals/6a/97/c1/6a97c17cb22aa3d8d4c9c3da88600479.jpg" },
    { id: "3", created_date: "12/12/2019", title: "Swimming Cars", body: "Cars like boats are more fun to ride.", img:"https://i.pinimg.com/originals/6a/97/c1/6a97c17cb22aa3d8d4c9c3da88600479.jpg" }
];


function* getAllIdeas(params) {
    // yield delay(1000);
    yield put({ type: 'STORE_ALL_IDEAS', ideasList });
}

export function* requestIdeas() {
    yield takeLatest('GET_IDEAS', getAllIdeas);
}