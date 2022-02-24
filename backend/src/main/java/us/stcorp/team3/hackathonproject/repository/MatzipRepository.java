package us.stcorp.team3.hackathonproject.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import us.stcorp.team3.hackathonproject.domain.Category;
import us.stcorp.team3.hackathonproject.domain.Matzip;

public interface MatzipRepository extends JpaRepository<Matzip, Long>,
    QuerydslPredicateExecutor<Matzip> {

    Page<Matzip> findAll(Pageable pageable);

    Page<Matzip> findAllByCategory(Category category, Pageable pageable);
}
