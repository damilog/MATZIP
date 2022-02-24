package us.stcorp.team3.hackathonproject.dto;

import us.stcorp.team3.hackathonproject.domain.Matzip;

public record EntireMatzipResponse(Long id, String title, String content, String thumbnail,
                                   Double rating, Integer price) {

    public static EntireMatzipResponse mapToEntireMatzipResponse(final Matzip matzip) {
        return new EntireMatzipResponse(matzip.getId(), matzip.getTitle(), matzip.getContent(),
            matzip.getThumbnail(), matzip.getRating(), matzip.getPrice());
    }
}
