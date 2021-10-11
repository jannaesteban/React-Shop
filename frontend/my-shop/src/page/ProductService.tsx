import axios from "axios";

class ProductService{

    private service = axios.create({
        baseURL: "http://localhost:8080"
    });

    getAllProducts(){
        return this.service.get("/products");
    }

    getSingleProduct(id :string){
        return this.service.get("/products/" + id);
    }

}
 
export default ProductService;

