import { delay } from 'redux-saga/effects';
import { select } from 'redux-saga/effects';
import { fork, takeLatest, takeEvery, put } from 'redux-saga/effects';

let ideasList = JSON.parse(localStorage.getItem("ideasList")) || [
    { id: "1", created_date: "1575921600000", title: "Flying Cars", body: "Using hydrogen we can fly cars.", img: "https://static.euronews.com/articles/stories/03/83/78/88/945x531_cmsv2_8e055c3d-1f36-5f3f-ac17-b2f2f05cd7a3-3837888.jpg" },
    { id: "2", created_date: "1576008000000", title: "Hyperloop", body: "Reinvent transportation to eliminate the barriers of distance.", img: "https://www.thetimes.co.uk/raconteur/s3/raconteur-prod/uploads/2017/11/Hardt-Hyperloop-hero-shot-credits-Hardt-Hyperloop.jpg" },
    { id: "3", created_date: "1576094400000", title: "Swimming Cars", body: "Cars like boats are more fun to ride.", img: "https://i.pinimg.com/originals/6a/97/c1/6a97c17cb22aa3d8d4c9c3da88600479.jpg" }
];


function* getAllIdeas(params) {
    yield delay(1000);
    yield put({ type: 'STORE_ALL_IDEAS', ideasList });
}

function* deleteIdeaAsync(params) {
    yield delay(1000);
    let store = yield select((data) => data);
    let ideasList = [...store.ideasList];

    let idea = ideasList.find((item) => item.id === params.id);
    ideasList.splice(ideasList.indexOf(idea), 1);
    yield put({ 
        type: 'DELETE_IDEA_ASYNC', 
        notification: {message:"Idea deleted"},
        ideasList
     });
    localStorage.setItem("ideasList", JSON.stringify(ideasList));
}

function* addIdeaAsync(params) {
    yield delay(1000);
    let store = yield select((data) => data);
    let ideasList = [...store.ideasList];
    ideasList.push({ id: ideasList.length + 1, created_date: new Date().getTime() })
    yield put({
        type: 'ADD_IDEA_ASYNC', 
        notification: {message:"New idea added"},
        ideasList
    });
    localStorage.setItem("ideasList", JSON.stringify(ideasList));
}

function* updateIdeaAsync(params) {
    yield delay(1000);
    let store = yield select((data) => data);
    let ideasList = [...store.ideasList];

    let idea = ideasList.find((item) => item.id === params.data.id);
    idea.title = params.data.title;
    idea.body = params.data.body;
    yield put({ 
        type: 'UPDATE_IDEA_ASYNC',
        notification: {message:"Idea updated"},
        ideasList 
    });
    localStorage.setItem("ideasList", JSON.stringify(ideasList));
}

export default function* rootSaga() {
    yield takeLatest('GET_IDEAS', getAllIdeas);
    yield takeEvery('DELETE_IDEA', deleteIdeaAsync);
    yield takeLatest('ADD_IDEA', addIdeaAsync);
    yield takeLatest('UPDATE_IDEA', updateIdeaAsync);
}