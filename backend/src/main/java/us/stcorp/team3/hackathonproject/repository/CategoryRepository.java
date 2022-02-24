package us.stcorp.team3.hackathonproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import us.stcorp.team3.hackathonproject.domain.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

}
