package us.stcorp.team3.hackathonproject.domain;

import java.time.LocalDateTime;
import javax.persistence.Column;
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
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@ToString
@Entity
public class MatzipReview {

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
