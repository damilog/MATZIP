package us.stcorp.team3.hackathonproject.controller;

import static org.mockito.BDDMockito.given;
import static org.mockito.BDDMockito.then;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.List;
import java.util.stream.Collectors;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import us.stcorp.team3.hackathonproject.domain.Category;
import us.stcorp.team3.hackathonproject.domain.Matzip;
import us.stcorp.team3.hackathonproject.dto.EntireMatzipResponse;
import us.stcorp.team3.hackathonproject.dto.MatzipRequest;
import us.stcorp.team3.hackathonproject.service.MatzipReviewService;
import us.stcorp.team3.hackathonproject.service.MatzipService;

@WebMvcTest(MatzipController.class)
class MatzipControllerTest {

    private final MockMvc mvc;
    private final ObjectMapper objectMapper;
    private List<EntireMatzipResponse> entireMatzipRespons;
    private List<EntireMatzipResponse> expectedResult;
    private PageRequest pageRequest;
    private MatzipRequest matzipRequest;

    @MockBean
    private MatzipService matzipService;
    @MockBean
    private MatzipReviewService matzipReviewService;


    public MatzipControllerTest(@Autowired MockMvc mvc,
        @Autowired ObjectMapper objectMapper) {
        this.mvc = mvc;
        this.objectMapper = objectMapper;
    }

    @BeforeEach
    void setUp() {
        pageRequest = PageRequest.of(0, 12);

        List<Matzip> matzips = List.of(
            Matzip.of("루피네 한식당", "루피가 요리해줌",
                "www.11st.co.kr", 4.5d, 12L, "www.11st.co.kr",
                "서울스퀘어", 20000, Category.디저트, "민철", "민철"),
            Matzip.of("루피네 외식당", "루피가 요리해줌",
                "www.11st.co.kr", 2.5d, 12L, "www.11st.co.kr",
                "서울스퀘어", 20000, Category.술집, "민철", "민철"),
            Matzip.of("루피네 양식당", "루피가 요리해줌",
                "www.11st.co.kr", 3.5d, 12L, "www.11st.co.kr",
                "서울스퀘어", 20000, Category.분식, "민철", "민철"),
            Matzip.of("루피네 중식당", "루피가 요리해줌",
                "www.11st.co.kr", 3.5d, 12L, "www.11st.co.kr",
                "서울스퀘어", 20000, Category.양식, "민철", "민철"),
            Matzip.of("루피네 중식당", "루피가 요리해줌",
                "www.11st.co.kr", 3.5d, 12L, "www.11st.co.kr",
                "서울스퀘어", 20000, Category.양식, "민철", "민철"),
            Matzip.of("루피네 중식당", "루피가 요리해줌",
                "www.11st.co.kr", 3.5d, 12L, "www.11st.co.kr",
                "서울스퀘어", 20000, Category.양식, "민철", "민철"),
            Matzip.of("루피네 중식당", "루피가 요리해줌",
                "www.11st.co.kr", 3.5d, 12L, "www.11st.co.kr",
                "서울스퀘어", 20000, Category.양식, "민철", "민철"),
            Matzip.of("루피네 중식당", "루피가 요리해줌",
                "www.11st.co.kr", 3.5d, 12L, "www.11st.co.kr",
                "서울스퀘어", 20000, Category.양식, "민철", "민철"),
            Matzip.of("루피네 중식당", "루피가 요리해줌",
                "www.11st.co.kr", 3.5d, 12L, "www.11st.co.kr",
                "서울스퀘어", 20000, Category.양식, "민철", "민철"),
            Matzip.of("루피네 중식당", "루피가 요리해줌",
                "www.11st.co.kr", 3.5d, 12L, "www.11st.co.kr",
                "서울스퀘어", 20000, Category.양식, "민철", "민철"),
            Matzip.of("루피네 중식당", "루피가 요리해줌",
                "www.11st.co.kr", 3.5d, 12L, "www.11st.co.kr",
                "서울스퀘어", 20000, Category.양식, "민철", "민철"),
            Matzip.of("루피네 중식당", "루피가 요리해줌",
                "www.11st.co.kr", 3.5d, 12L, "www.11st.co.kr",
                "서울스퀘어", 20000, Category.양식, "민철", "민철"),
            Matzip.of("루피네 중식당", "루피가 요리해줌",
                "www.11st.co.kr", 3.5d, 12L, "www.11st.co.kr",
                "서울스퀘어", 20000, Category.양식, "민철", "민철"));

        entireMatzipRespons = matzips.stream()
            .map(EntireMatzipResponse::mapToEntireMatzipResponse)
            .collect(Collectors.toList());

        List<Matzip> expected = List.of(
            Matzip.of("루피네 한식당", "루피가 요리해줌",
                "www.11st.co.kr", 4.5d, 12L, "www.11st.co.kr",
                "서울스퀘어", 20000, Category.디저트, "민철", "민철"),
            Matzip.of("루피네 양식당", "루피가 요리해줌",
                "www.11st.co.kr", 3.5d, 12L, "www.11st.co.kr",
                "서울스퀘어", 20000, Category.분식, "민철", "민철"),
            Matzip.of("루피네 중식당", "루피가 요리해줌",
                "www.11st.co.kr", 3.5d, 12L, "www.11st.co.kr",
                "서울스퀘어", 20000, Category.양식, "민철", "민철"),
            Matzip.of("루피네 중식당", "루피가 요리해줌",
                "www.11st.co.kr", 3.5d, 12L, "www.11st.co.kr",
                "서울스퀘어", 20000, Category.양식, "민철", "민철"),
            Matzip.of("루피네 중식당", "루피가 요리해줌",
                "www.11st.co.kr", 3.5d, 12L, "www.11st.co.kr",
                "서울스퀘어", 20000, Category.양식, "민철", "민철"),
            Matzip.of("루피네 중식당", "루피가 요리해줌",
                "www.11st.co.kr", 3.5d, 12L, "www.11st.co.kr",
                "서울스퀘어", 20000, Category.양식, "민철", "민철"),
            Matzip.of("루피네 중식당", "루피가 요리해줌",
                "www.11st.co.kr", 3.5d, 12L, "www.11st.co.kr",
                "서울스퀘어", 20000, Category.양식, "민철", "민철"),
            Matzip.of("루피네 중식당", "루피가 요리해줌",
                "www.11st.co.kr", 3.5d, 12L, "www.11st.co.kr",
                "서울스퀘어", 20000, Category.양식, "민철", "민철"),
            Matzip.of("루피네 중식당", "루피가 요리해줌",
                "www.11st.co.kr", 3.5d, 12L, "www.11st.co.kr",
                "서울스퀘어", 20000, Category.양식, "민철", "민철"),
            Matzip.of("루피네 중식당", "루피가 요리해줌",
                "www.11st.co.kr", 3.5d, 12L, "www.11st.co.kr",
                "서울스퀘어", 20000, Category.양식, "민철", "민철"),
            Matzip.of("루피네 중식당", "루피가 요리해줌",
                "www.11st.co.kr", 3.5d, 12L, "www.11st.co.kr",
                "서울스퀘어", 20000, Category.양식, "민철", "민철"),
            Matzip.of("루피네 중식당", "루피가 요리해줌",
                "www.11st.co.kr", 3.5d, 12L, "www.11st.co.kr",
                "서울스퀘어", 20000, Category.양식, "민철", "민철"));

        expectedResult = expected.stream()
            .map(EntireMatzipResponse::mapToEntireMatzipResponse)
            .collect(Collectors.toList());

        matzipRequest = new MatzipRequest("민철이네 분식", "떡볶이 존맛!!", "www.11st.co.kr", 5.0d, 123l,
            "www.11st.co.kr", "서울 어딘가", 20000, Category.분식, "민철");


    }

    @DisplayName("[GET] /matzip?page={} - 전체 맛집 조회(한 페이지당 12개씩")
    @Test
    void getAllMatzip_Use_Paging() throws Exception {
        // given
        given(matzipService.findAllMatzip(pageRequest)).willReturn(expectedResult);

        // when
        mvc.perform(
                get("/api/matzip?page=0")
            )
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON))
            .andExpect(jsonPath("length()").value(12))
            .andExpect(jsonPath("$.[?(@.title == '%s')]", "루피네 한식당").exists())
            .andExpect(jsonPath("$.[?(@.title == '%s')]", "루피네 양식당").exists())
            .andExpect(jsonPath("$.[?(@.title == '%s')]", "루피네 외식당").doesNotExist())
            .andDo(print());

        // then
        then(matzipService).should().findAllMatzip(pageRequest);
    }

    @DisplayName("[POST] /matzip - 새로운 맛집을 등록")
    @Test
    void registerNewMatzip() throws Exception {
        //given
        String request = objectMapper.writeValueAsString(matzipRequest);
        // when
        mvc.perform(
                post("/api/matzip")
                    .content(request)
                    .contentType(MediaType.APPLICATION_JSON)
                    .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isCreated())
            .andExpect(content().string("Your Request has Succeed"));
        // then
        then(matzipService).should().saveMatzip(matzipRequest);
    }

    @DisplayName("[GET] /category - 전체 카테고리 항목 조회")
    @Test
    void getCategories() throws Exception {
        // when-then
        mvc.perform(
                get("/api/matzip/category")
            )
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON))
            .andExpect(jsonPath("length()").value(8));

    }
}
