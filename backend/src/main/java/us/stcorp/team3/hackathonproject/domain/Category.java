package us.stcorp.team3.hackathonproject.domain;

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
import us.stcorp.team3.hackathonproject.common.BaseTimeEntity;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@ToString
@Entity
public class Category extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CATEGORY_ID")
    private Long id;

    @NotNull
    private String name;
    @NotNull
    private String createdBy;
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
