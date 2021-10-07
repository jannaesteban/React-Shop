package backend.shop.model;

import javax.persistence.*;

@Entity //creates a table in db
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue
    private Long id;
    private String img;
    private String description;
    private String name;
    private String price;


    public Product(String img, String desc, String name, String price) {
        this.img = img;
        this.description = desc;
        this.name = name;
        this.price = price;
    }

    public Product() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String desc) {
        this.description = desc;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }
}
