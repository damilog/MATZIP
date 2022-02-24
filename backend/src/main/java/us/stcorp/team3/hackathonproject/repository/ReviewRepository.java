package us.stcorp.team3.hackathonproject.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import us.stcorp.team3.hackathonproject.domain.MatzipReview;

public interface ReviewRepository extends JpaRepository<MatzipReview, Long>,
    QuerydslPredicateExecutor<MatzipReview> {

    List<MatzipReview> findAllByMatzipId(Long matzipId);
}
