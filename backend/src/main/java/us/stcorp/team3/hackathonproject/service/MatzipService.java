package us.stcorp.team3.hackathonproject.service;

import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import us.stcorp.team3.hackathonproject.dto.MatzipResponse;
import us.stcorp.team3.hackathonproject.repository.MatzipRepository;

@Service
@RequiredArgsConstructor
public class MatzipService {

    private static final int PAGE_SIZE = 12;
    private static final String SORTING_STANDARD = "rating";

    private final MatzipRepository matzipRepository;

    @Transactional(readOnly = true)
    public Page<MatzipResponse> findAllMatzip(final int page) {
        final PageRequest pageRequest = createPageRequest(page);

        final List<MatzipResponse> matzipResponses = matzipRepository.findAll(pageRequest).stream()
            .map(matzip -> MatzipResponse.matToRecord(matzip))
            .collect(Collectors.toList());

        return new PageImpl<>(matzipResponses, pageRequest, matzipResponses.size());
    }

    private PageRequest createPageRequest(final int page) {
        return PageRequest.of(page, PAGE_SIZE, Sort.by(Direction.DESC, SORTING_STANDARD));
    }
}
