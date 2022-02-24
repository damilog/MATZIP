package us.stcorp.team3.hackathonproject.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import us.stcorp.team3.hackathonproject.domain.Matzip;

public interface MatzipRepository extends JpaRepository<Matzip, Long> {

    Page<Matzip> findAll(Pageable pageable);
}
