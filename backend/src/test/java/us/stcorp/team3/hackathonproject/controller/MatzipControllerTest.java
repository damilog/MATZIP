package us.stcorp.team3.hackathonproject.controller;

import static org.mockito.BDDMockito.given;
import static org.mockito.BDDMockito.then;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.List;
import java.util.stream.Collectors;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import us.stcorp.team3.hackathonproject.domain.Matzip;
import us.stcorp.team3.hackathonproject.dto.MatzipResponse;
import us.stcorp.team3.hackathonproject.service.MatzipService;

@WebMvcTest(MatzipController.class)
class MatzipControllerTest {

    private final MockMvc mvc;
    List<MatzipResponse> matzipResponses;
    PageRequest pageRequest;

    @MockBean
    private MatzipService matzipService;

    public MatzipControllerTest(@Autowired MockMvc mvc) {
        this.mvc = mvc;
    }

    @BeforeEach
    void setUp() {
        pageRequest = PageRequest.of(0, 12, Sort.by(Direction.DESC, "rating"));

        List<Matzip> matzips = List.of(
            Matzip.of("루피네 한식당", "루피가 요리해줌", 1, 3.5f,
                "www.11st.co.kr", 3.5f, 12L, "www.11st.co.kr",
                "서울스퀘어", "2만원대", "민철", "민철"),
            Matzip.of("루피네 외식당", "루피가 요리해줌", 13, 3.5f,
                "www.11st.co.kr", 3.5f, 12L, "www.11st.co.kr",
                "서울스퀘어", "2만원대", "민철", "민철"),
            Matzip.of("루피네 양식당", "루피가 요리해줌", 15, 3.5f,
                "www.11st.co.kr", 3.5f, 12L, "www.11st.co.kr",
                "서울스퀘어", "2만원대", "민철", "민철"),
            Matzip.of("루피네 중식당", "루피가 요리해줌", 5, 3.5f,
                "www.11st.co.kr", 3.5f, 12L, "www.11st.co.kr",
                "서울스퀘어", "2만원대", "민철", "민철"));

        matzipResponses = matzips.stream()
            .map(matzip -> MatzipResponse.matToRecord(matzip))
            .collect(Collectors.toList());

    }

    @DisplayName("[GET] /matzip?page={} - 전체 맛집 조회(한 페이지당 12개씩")
    @Test
    void getAllMatzip_Use_Paging() throws Exception {
        // given
        given(matzipService.findAllMatzip(0)).willReturn(
            new PageImpl<>(matzipResponses, pageRequest, matzipResponses.size()));

        // when
        mvc.perform(
                get("/api/matzip")
            )
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON))
            .andExpect(jsonPath("$.content.length()").value(4))
            .andExpect(jsonPath("$.content[0].title", "루피네 한식당").exists())
            .andExpect(jsonPath("$.content[1].title", "루피네 외식당").exists());

        // then
        then(matzipService).should().findAllMatzip(0);
    }
}
