package us.stcorp.team3.hackathonproject.dto;

import us.stcorp.team3.hackathonproject.domain.MatzipReview;

public record MatzipReviewResponse(Long id, String comment, Integer rating) {

    public static MatzipReviewResponse matToReviewResponse(final MatzipReview review) {
        return new MatzipReviewResponse(review.getId(), review.getComment(), review.getRating());
    }
}
