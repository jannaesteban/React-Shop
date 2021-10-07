package backend.shop.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

   /* //get all items
    @GetMapping
    List<Product> getProducts() {
        return productRepository.findAll();
    }*/

    //get single item
    @GetMapping("/{id}")
    public Product getProduct(@PathVariable("id") Long id) {
        return productService.getProductById(id);
    }
/*
    //update a single item
    @PostMapping
    Product addProduct(@RequestBody Product newProduct) {
        return productRepository.save(newProduct);
    }

    //add new item
    @PutMapping("/{id}")
    Product replaceProduct(@RequestBody Product newProduct, @PathVariable Long id) {
        return productRepository.findById(id).map(product -> {
            product.setImg(newProduct.getImg());
            product.setDescription(newProduct.getDescription());
            product.setName(newProduct.getName());
            product.setPrice(newProduct.getPrice());
            return productRepository.save(product);
        }).orElseGet(() ->{
            newProduct.setId(id);
            return productRepository.save(newProduct);
        });
    }

    //delete a single item
    @DeleteMapping("/{id}")
    void deleteProduct(@PathVariable Long id){
        productRepository.deleteById(id);
    }
    */

}
