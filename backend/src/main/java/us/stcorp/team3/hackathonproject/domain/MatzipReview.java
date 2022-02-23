package us.stcorp.team3.hackathonproject.domain;

import javax.persistence.Entity;
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
import us.stcorp.team3.hackathonproject.common.BaseTimeEntity;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@ToString
@Entity
public class MatzipReview extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String comment;

    @NotNull
    private String username;

    @NotNull
    private String password;
    @NotNull
    private String createdBy;
    @NotNull
    private String modifiedBy;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MATZIP_ID")
    private Matzip matzip;


    private MatzipReview(String comment, String username, String password, String createdBy,
        String modifiedBy, Matzip matzip) {
        this.comment = comment;
        this.username = username;
        this.password = password;
        this.createdBy = createdBy;
        this.modifiedBy = modifiedBy;
        this.matzip = matzip;
    }

    public MatzipReview of(String comment, String username, String password, String createdBy,
        String modifiedBy, Matzip matzip) {
        return new MatzipReview(comment, username, password, createdBy, modifiedBy, matzip);
    }
}
