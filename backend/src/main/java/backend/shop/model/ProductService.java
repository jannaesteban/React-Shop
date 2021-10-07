package backend.shop.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
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


}
