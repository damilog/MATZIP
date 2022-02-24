package us.stcorp.team3.hackathonproject.dto;

import us.stcorp.team3.hackathonproject.domain.MatzipReview;

public record ReviewResponse(Long id, String comment, Integer rating) {

    public static ReviewResponse matToReviewResponse(final MatzipReview review) {
        return new ReviewResponse(review.getId(), review.getComment(), review.getRating());
    }
}
