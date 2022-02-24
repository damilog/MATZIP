package us.stcorp.team3.hackathonproject.service;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import us.stcorp.team3.hackathonproject.dto.EntireMatzipResponse;
import us.stcorp.team3.hackathonproject.dto.MatzipRequest;
import us.stcorp.team3.hackathonproject.repository.MatzipRepository;

@Service
@RequiredArgsConstructor
public class MatzipService {

    private final MatzipRepository matzipRepository;

    @Transactional(readOnly = true)
    public List<EntireMatzipResponse> findAllMatzip(final Pageable pageable) {
        final Pageable pageRequest = addSortToPageable(pageable);
        return matzipRepository.findAll(pageRequest).stream()
            .map(EntireMatzipResponse::matToRecord)
            .toList();
    }

    @Transactional
    public void saveMatzip(final MatzipRequest matzipRequest) {
        matzipRepository.save(MatzipRequest.mapToEntity(matzipRequest));
    }

    private PageRequest addSortToPageable(final Pageable pageable) {
        return PageRequest.of(pageable.getPageNumber(), pageable.getPageSize(),
            Sort.by(Direction.DESC, "rating"));
    }
}
