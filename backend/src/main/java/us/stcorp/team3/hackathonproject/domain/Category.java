package us.stcorp.team3.hackathonproject.domain;

import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@ToString
@Entity
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CATEGORY_ID")
    private Long id;

    @NotNull
    private String name;

    @NotNull
    @Column(insertable = false, updatable = false, columnDefinition = "datetime DEFAULT CURRENT_TIMESTAMP")
    @CreatedDate
    private LocalDateTime createdAt;
    @NotNull
    private String createdBy;
    @NotNull
    @Column(insertable = false, updatable = false, columnDefinition = "datetime DEFAULT CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP")
    @LastModifiedDate
    private LocalDateTime modifiedAt;
    @NotNull
    private String modifiedBy;

    private Category(String name, String createdBy, String modifiedBy) {
        this.name = name;
        this.createdBy = createdBy;
        this.modifiedBy = modifiedBy;
    }

    public Category of(String name, String createdBy, String modifiedBy) {
        return new Category(name, createdBy, modifiedBy);
    }
}
