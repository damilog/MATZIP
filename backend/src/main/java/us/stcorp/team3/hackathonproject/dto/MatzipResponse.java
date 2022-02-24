package us.stcorp.team3.hackathonproject.dto;

import java.util.List;
import us.stcorp.team3.hackathonproject.domain.Category;
import us.stcorp.team3.hackathonproject.domain.Matzip;

public record MatzipResponse(Long id, String title, String content, Integer viewCount,
                             String thumbnail, String naverUrl, Double naverRating,
                             Long naverComment, String address, Integer price, Category category,
                             Double rating,
                             List<MatzipReviewResponse> review) {

    public static MatzipResponse mapToMatzipResponse(final Matzip matzip,
        final List<MatzipReviewResponse> reviews) {
        return new MatzipResponse(matzip.getId(), matzip.getTitle(), matzip.getContent(),
            matzip.getViewCount(), matzip.getThumbnail(), matzip.getNaverUrl(),
            matzip.getNaverRating(), matzip.getNaverComment(), matzip.getAddress(),
            matzip.getPrice(), matzip.getCategory(), matzip.getRating(), reviews);
    }
}
