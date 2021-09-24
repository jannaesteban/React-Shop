import axios from "axios";

class ProductService{

    private service = axios.create({
        baseURL: "http://localhost:3001/"
    });

    getAllData(url :string){
        return this.service.get(url);
    }

    getSingleData(url :string, id :string){
        return this.service.get(url + id);
    }


}
 
export default ProductService;

