package us.stcorp.team3.hackathonproject.dto;

import us.stcorp.team3.hackathonproject.domain.Matzip;
import us.stcorp.team3.hackathonproject.domain.MatzipReview;

public record MatzipReviewRequest(String content, Integer rating) {

    public static MatzipReview mapToMatzipReview(Matzip matzip, MatzipReviewRequest matzipReviewRequest) {
        String anonymousAuthorForReview = String.valueOf(matzipReviewRequest.content().hashCode());
        return MatzipReview.of(matzipReviewRequest.content, anonymousAuthorForReview,
            anonymousAuthorForReview, matzip, matzipReviewRequest.rating);
    }
}
