package us.stcorp.team3.hackathonproject.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import us.stcorp.team3.hackathonproject.domain.MatzipReview;

public interface ReviewRepository extends JpaRepository<MatzipReview, Long> {

    List<MatzipReview> findAllByMatzipId(Long matzipId);
}
