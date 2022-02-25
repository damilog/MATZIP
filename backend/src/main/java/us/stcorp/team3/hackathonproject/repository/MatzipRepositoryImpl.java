package us.stcorp.team3.hackathonproject.repository;

import static us.stcorp.team3.hackathonproject.domain.QMatzip.matzip;

import com.querydsl.core.QueryResults;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import us.stcorp.team3.hackathonproject.domain.Category;
import us.stcorp.team3.hackathonproject.dto.EntireMatzipResponse;

@RequiredArgsConstructor
public class MatzipRepositoryImpl implements MatzipRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    @Override
    public Page<EntireMatzipResponse> findEntireMatzipWithPaging(Category category,
        Pageable pageable) {
        QueryResults<EntireMatzipResponse> results = queryFactory
            .select(Projections.constructor(EntireMatzipResponse.class, matzip.id, matzip.title,
                matzip.content, matzip.thumbnail, matzip.rating, matzip.price))
            .from(matzip)
            .where(categoryEq(category))
            .offset(pageable.getOffset())
            .limit(pageable.getPageSize())
            .orderBy(matzip.rating.desc())
            .fetchResults();
        return new PageImpl<>(results.getResults(), pageable, results.getTotal());
    }

    private BooleanExpression categoryEq(Category category) {
        return category != null ? matzip.category.eq(category) : null;
    }

}
