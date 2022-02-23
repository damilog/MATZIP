package us.stcorp.team3.hackathonproject.domain;

import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

@NoArgsConstructor
@Getter
@ToString
@Entity
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CATEGORY_ID")
    private Long id;

    @Setter
    @Column(nullable = false)
    private String name;

    @Column(nullable = false, insertable = false, updatable = false, columnDefinition = "datetime DEFAULT CURRENT_TIMESTAMP")
    @CreatedDate
    private LocalDateTime createdAt;
    @Setter
    @Column(nullable = false)
    private String createdBy;
    @Column(nullable = false, insertable = false, updatable = false, columnDefinition = "datetime DEFAULT CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP")
    @LastModifiedDate
    private LocalDateTime modifiedAt;
    @Setter
    @Column(nullable = false)
    private String modifiedBy;

}
