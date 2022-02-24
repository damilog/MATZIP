package us.stcorp.team3.hackathonproject.service;

import static us.stcorp.team3.hackathonproject.domain.QMatzip.matzip;
import static us.stcorp.team3.hackathonproject.domain.QMatzipReview.matzipReview;

import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import us.stcorp.team3.hackathonproject.domain.Matzip;
import us.stcorp.team3.hackathonproject.domain.QMatzip;
import us.stcorp.team3.hackathonproject.dto.MatzipReviewRequest;
import us.stcorp.team3.hackathonproject.repository.MatzipRepository;
import us.stcorp.team3.hackathonproject.repository.ReviewRepository;

@Service
@RequiredArgsConstructor
public class MatzipReviewService {

    private final ReviewRepository reviewRepository;
    private final MatzipRepository matzipRepository;
    private final JPAQueryFactory queryFactory;

    @Transactional
    public void saveMatzipReview(Long matzipId, MatzipReviewRequest matzipReviewRequest) {
        Matzip matzip = matzipRepository.findById(matzipId)
            .orElseThrow(() -> new IllegalArgumentException("no such data"));
        reviewRepository.save(MatzipReviewRequest.mapToMatzipReview(matzip, matzipReviewRequest));

        QMatzip qMatzip = QMatzip.matzip;
        JPAQueryFactory queryFactory = new JPAQueryFactory(entityManager);
        Double ratingAverage = queryFactory.select(matzipReview.rating.avg())
            .from(matzipReview).fetchOne();
        queryFactory.update(qMatzip)
            .set(qMatzip.rating, ratingAverage)
            .where(qMatzip.id.eq(matzipId))
            .execute();
    }

    @Transactional
    public void deleteMatzipReview(Long matzipReviewId, Long matzipId) {
        reviewRepository.deleteById(matzipReviewId);
        Double ratingAverage = queryFactory.select(matzipReview.rating.avg())
            .from(matzipReview).fetchOne();

        queryFactory.update(matzip)
            .set(matzip.rating, ratingAverage)
            .where(matzip.id.eq(matzipId))
            .execute();
    }
}
