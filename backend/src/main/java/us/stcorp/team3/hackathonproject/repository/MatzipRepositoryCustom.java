package us.stcorp.team3.hackathonproject.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import us.stcorp.team3.hackathonproject.domain.Category;
import us.stcorp.team3.hackathonproject.dto.EntireMatzipResponse;

public interface MatzipRepositoryCustom {

    Page<EntireMatzipResponse> findEntireMatzipWithPaging(Category category, Pageable pageable);

}
