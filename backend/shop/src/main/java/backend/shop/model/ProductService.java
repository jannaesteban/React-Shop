package backend.shop.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository repository) {
        this.productRepository = repository;
    }

    public ProductService() {
    }

    public Product getProductById(Long id) {
       Optional<Product> product = productRepository.findById(id);
       return product.orElse(null);
    }

    public List<Product> getAllProducts() {
        Optional<List<Product>> products = Optional.of(productRepository.findAll());
        return products.orElse(null);
    }

    public Product addProduct(Product newProduct) {
            return productRepository.save(newProduct);
    }

    public Product updateProductById( Product newProduct, Long id) {
        return productRepository.findById(id).map(product -> {
            product.setImg(newProduct.getImg());
            product.setDescription(newProduct.getDescription());
            product.setName(newProduct.getName());
            product.setPrice(newProduct.getPrice());
            product.setCategory(newProduct.getCategory());
            return productRepository.save(product);
        }).orElseGet(() ->{
            newProduct.setId(id);
            return productRepository.save(newProduct);
        });
    }

    public ResponseEntity<String> deleteProductById(Long id) {
        try{
            productRepository.deleteById(id);
            return new ResponseEntity<>("Product with id{"+id+"} was succesfully deleted", HttpStatus.OK);
        }catch(EmptyResultDataAccessException e){
            return new ResponseEntity("Id not found",HttpStatus.NOT_FOUND);
        }
    }
}
