package us.stcorp.team3.hackathonproject.service;

import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import us.stcorp.team3.hackathonproject.dto.MatzipResponse;
import us.stcorp.team3.hackathonproject.repository.MatzipRepository;

@Service
@RequiredArgsConstructor
public class MatzipService {

    private final MatzipRepository matzipRepository;

    @Transactional(readOnly = true)
    public List<MatzipResponse> findAllMatzip(final Pageable pageable) {
        return matzipRepository.findAllByPage(pageable, Sort.by(Direction.DESC, "rating")).stream()
            .map(MatzipResponse::matToRecord)
            .collect(Collectors.toList());
    }
}
