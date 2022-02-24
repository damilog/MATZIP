package us.stcorp.team3.hackathonproject.service;

import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import us.stcorp.team3.hackathonproject.dto.CategoryResponse;
import us.stcorp.team3.hackathonproject.repository.CategoryRepository;

@RequiredArgsConstructor
@Service
public class CategoryService {

    private CategoryRepository categoryRepository;

    public List<CategoryResponse> findCategories() {
        return categoryRepository.findAll().stream().map(CategoryResponse::categoryToDto)
            .collect(Collectors.toList());
    }
}
