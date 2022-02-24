package us.stcorp.team3.hackathonproject.dto;

import us.stcorp.team3.hackathonproject.domain.Category;
import us.stcorp.team3.hackathonproject.domain.Matzip;

public record MatzipRequest(String title, String content, String thumbnail, Double naverRating,
                            Long naverComment, String naverUrl, String address, Integer price,
                            Category category, String username) {

    public static Matzip mapToEntity(final MatzipRequest matzipRequest) {
        return Matzip.of(matzipRequest.title(), matzipRequest.content(), matzipRequest.thumbnail(),
            matzipRequest.naverRating(), matzipRequest.naverComment(), matzipRequest.naverUrl(),
            matzipRequest.address(), matzipRequest.price(), matzipRequest.category(),
            matzipRequest.username(), matzipRequest.username());
    }
}
