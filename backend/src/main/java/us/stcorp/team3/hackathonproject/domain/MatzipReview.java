package us.stcorp.team3.hackathonproject.domain;

import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
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

@NoArgsConstructor
@Getter
@ToString
@Entity
public class MatzipReview {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    @Setter
    @Column(nullable = false)
    private String comment;

    @Setter
    @Column(nullable = false)
    private String username;

    @Setter
    @Column(nullable = false)
    private String password;

    @Column(nullable = false, insertable = false, updatable = false, columnDefinition = "datetime DEFAULT CURRENT_TIMESTAMP")
    @CreatedDate
    private LocalDateTime createdAt;
    @Column(nullable = false)
    @Setter
    private String createdBy;
    @Column(nullable = false, insertable = false, updatable = false, columnDefinition = "datetime DEFAULT CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP")
    @LastModifiedDate
    private LocalDateTime modifiedAt;
    @Setter
    @Column(nullable = false)
    private String modifiedBy;

    @ManyToOne
    @JoinColumn(name = "MATZIPREVIEW_ID")
    private Matzip matzip;


}
