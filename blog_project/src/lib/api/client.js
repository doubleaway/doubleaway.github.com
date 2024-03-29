import axios from "axios";

const client =axios.create();
/*
//글로벌 설정 예시
client.defaults.baseURL='https://external-api-server.com/'

//헤더 설정
client.defaults.headers.common['Authorization']='Bearer a1b2c3d4';

//인터셉터 설정
axios.interceptors.response.use(
    response=>{
    //요청 성공 시 특정작업 수행
    return response
},
        error=>{
    //요청 실패시 특정 작업 수행
            return Promise.reject(error);
        }
)*/

//758
export default client;