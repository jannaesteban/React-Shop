import axios from "axios";

export default function getData(url :string){

    const service = axios.create({
        baseURL: "http://localhost:3001"
    });

    return service.get("http://localhost:3001/" + url);
}

