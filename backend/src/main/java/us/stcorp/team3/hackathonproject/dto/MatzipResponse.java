package us.stcorp.team3.hackathonproject.dto;

import us.stcorp.team3.hackathonproject.domain.Matzip;

public record MatzipResponse(Long id, String title, String content, String naverUrl, String thumbnail, Float rating,
                             String address, String price) {


    public static MatzipResponse matToRecord(final Matzip matzip) {
        return new MatzipResponse(matzip.getId(), matzip.getTitle(), matzip.getContent(),
            matzip.getNaverUrl(), matzip.getThumbnail(), matzip.getRating(), matzip.getAddress(),
            matzip.getPrice());
    }
}
