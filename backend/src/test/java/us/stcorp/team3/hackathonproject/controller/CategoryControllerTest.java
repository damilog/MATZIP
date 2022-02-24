package us.stcorp.team3.hackathonproject.controller;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
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
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import us.stcorp.team3.hackathonproject.domain.Category;
import us.stcorp.team3.hackathonproject.dto.CategoryResponse;
import us.stcorp.team3.hackathonproject.service.CategoryService;

@WebMvcTest(CategoryController.class)
class CategoryControllerTest {

    private final MockMvc mvc;
    private List<CategoryResponse> expectedResponse;

    @MockBean
    CategoryService categoryService;

    public CategoryControllerTest(@Autowired MockMvc mvc) {
        this.mvc = mvc;
    }

    @BeforeEach
    void setUp() {
        List<Category> categories = List.of(
            Category.한식,
            Category.일식,
            Category.디저트,
            Category.분식,
            Category.술집,
            Category.양식,
            Category.중식,
            Category.퓨전
        );

        expectedResponse = categories.stream()
            .map(CategoryResponse::categoryToDto).collect(
                Collectors.toList());


    }

    @DisplayName("[GET] /category - 전체 카테고리 항목 조회")
    @Test
    void getCategories() throws Exception {
        // given
        given(categoryService.findCategories()).willReturn(expectedResponse);

        // when-then
        mvc.perform(
                get("/api/category")
            )
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON))
            .andExpect(jsonPath("length()").value(8))
            .andDo(print());

    }
}
