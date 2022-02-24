package us.stcorp.team3.hackathonproject.repository;

import java.util.List;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import us.stcorp.team3.hackathonproject.domain.Matzip;

public interface MatzipRepository extends JpaRepository<Matzip, Long> {

    List<Matzip> findAllByPage(Pageable pageable, Sort sort);
}
