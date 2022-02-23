package us.stcorp.team3.hackathonproject.domain;

import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import us.stcorp.team3.hackathonproject.common.BaseTimeEntity;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@ToString
@EntityListeners(AuditingEntityListener.class)
@Entity
public class Matzip extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String title;
    @NotNull
    private String content;
    @NotNull
    private Integer viewCount;
    @NotNull
    private Integer likeCount;
    private String distance;
    private String price;
    @NotNull
    private String createdBy;
    @NotNull
    private String modifiedBy;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "CATEGORY_ID")
    private Category category;

    private Matzip(String title, String content, Integer view, Integer like,
        String distance, String price, String createdBy,
        String modifiedBy) {
        this.title = title;
        this.content = content;
        this.viewCount = view;
        this.likeCount = like;
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
