package us.stcorp.team3.hackathonproject.service;

import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import us.stcorp.team3.hackathonproject.domain.Matzip;
import us.stcorp.team3.hackathonproject.dto.EntireMatzipResponse;
import us.stcorp.team3.hackathonproject.dto.MatzipRequest;
import us.stcorp.team3.hackathonproject.dto.MatzipResponse;
import us.stcorp.team3.hackathonproject.dto.ReviewResponse;
import us.stcorp.team3.hackathonproject.repository.MatzipRepository;
import us.stcorp.team3.hackathonproject.repository.ReviewRepository;

@Service
@RequiredArgsConstructor
public class MatzipService {

    private final MatzipRepository matzipRepository;
    private final ReviewRepository reviewRepository;

    @Transactional(readOnly = true)
    public List<EntireMatzipResponse> findAllMatzip(final Pageable pageable) {
        final Pageable pageRequest = addSortToPageable(pageable);
        return matzipRepository.findAll(pageRequest).stream()
            .map(EntireMatzipResponse::mapToEntireMatzipResponse)
            .toList();
    }

    @Transactional
    public void saveMatzip(final MatzipRequest matzipRequest) {
        matzipRepository.save(MatzipRequest.mapToEntity(matzipRequest));
    }

    @Transactional(readOnly = true)
    public MatzipResponse findMatzip(final long matzipId) {
        final Optional<Matzip> matzipOptional = matzipRepository.findById(matzipId);
        final List<ReviewResponse> reviewResponses = reviewRepository.findAllByMatzipId(matzipId).stream()
            .map(ReviewResponse::matToReviewResponse)
            .toList();
        if (matzipOptional.isPresent()) {
            final Matzip matzip = matzipOptional.get();
            return MatzipResponse.mapToMatzipResponse(matzip, reviewResponses);
        }
        throw new IllegalArgumentException("존재하지 않는 맛집입니다.");
    }

    private PageRequest addSortToPageable(final Pageable pageable) {
        return PageRequest.of(pageable.getPageNumber(), pageable.getPageSize(),
            Sort.by(Direction.DESC, "rating"));
    }
}
