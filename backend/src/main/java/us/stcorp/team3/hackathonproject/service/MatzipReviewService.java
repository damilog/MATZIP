package us.stcorp.team3.hackathonproject.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import us.stcorp.team3.hackathonproject.domain.Matzip;
import us.stcorp.team3.hackathonproject.dto.MatzipReviewRequest;
import us.stcorp.team3.hackathonproject.repository.MatzipRepository;
import us.stcorp.team3.hackathonproject.repository.ReviewRepository;

@Service
@RequiredArgsConstructor
public class MatzipReviewService {

    private final ReviewRepository reviewRepository;
    private final MatzipRepository matzipRepository;

    public void saveMatzipReview(Long matzipId, MatzipReviewRequest matzipReviewRequest) {
        Matzip matzip = matzipRepository.findById(matzipId)
            .orElseThrow(() -> new IllegalArgumentException("no such data"));
        reviewRepository.save(MatzipReviewRequest.mapToMatzipReview(matzip, matzipReviewRequest));
    }
}
