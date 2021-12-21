package backend.shop.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/products")
public class ProductController {

    private ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    public ProductController() {
    }

   //get all items
    @GetMapping
    public ResponseEntity<List<Product>> getProducts() {
        return ResponseEntity.ok().body(productService.getAllProducts());
    }

    //get single item
    @GetMapping("/{id}")
    public ResponseEntity<Product> getProduct(@PathVariable("id") Long id) {
        return ResponseEntity.ok().body(productService.getProductById(id));
    }

    //add a single item
    @PostMapping
    public ResponseEntity<Product> addProduct(@RequestBody Product newProduct) {
        return ResponseEntity.ok().body(productService.addProduct(newProduct));
    }

    //update new item
    @PutMapping("/{id}")
    public ResponseEntity<Product> replaceProduct(@RequestBody Product newProduct, @PathVariable Long id) {
        System.out.println(newProduct);
        return ResponseEntity.ok().body(productService.updateProductById(newProduct, id));
    }

    //delete a single item
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable Long id){
           return productService.deleteProductById(id);

    }


}
