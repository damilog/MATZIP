package us.stcorp.team3.hackathonproject.domain;

import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@NoArgsConstructor
@Getter
@ToString
@EntityListeners(AuditingEntityListener.class)
@Entity
public class Matzip {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    @Column(nullable = false)
    private String title;
    @Setter
    @Column(nullable = false)
    private String content;
    @Setter
    @Column(nullable = false)
    private Integer view;
    @Setter
    @Column(nullable = false)
    private Integer like;
    @Setter
    private String distance;
    @Setter
    private String price;

    @Column(nullable = false, insertable = false, updatable = false, columnDefinition = "datetime DEFAULT CURRENT_TIMESTAMP")
    @CreatedDate
    private LocalDateTime createdAt;
    @Setter
    @Column(nullable = false, insertable = false, updatable = false, columnDefinition = "datetime DEFAULT CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP")
    private String createdBy;
    @Column(nullable = false)
    @LastModifiedDate
    private LocalDateTime modifiedAt;
    @Setter
    @Column(nullable = false)
    private String modifiedBy;

    @ManyToOne(targetEntity = Category.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "CATEGORY_ID")
    private Category category;

    public Matzip(String title, String content, Integer view, Integer like,
        String distance, String price, String createdBy,
        String modifiedBy) {
        this.title = title;
        this.content = content;
        this.view = view;
        this.like = like;
        this.distance = distance;
        this.price = price;
        this.createdBy = createdBy;
        this.modifiedBy = modifiedBy;
    }


    public static Matzip of(String title, String content, Integer view, Integer like,
        String distance, String price, String createdBy, String modifiedBy) {
        return new Matzip(title, content, view, like, distance, price, createdBy, modifiedBy);
    }
}
