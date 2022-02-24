package us.stcorp.team3.hackathonproject.dto;

import us.stcorp.team3.hackathonproject.domain.Category;

public record CategoryResponse(Long id, String name) {

    public static CategoryResponse categoryToDto(Category category) {
        return new CategoryResponse(category.getId(), category.getName());
    }
}
