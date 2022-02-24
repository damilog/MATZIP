package us.stcorp.team3.hackathonproject.controller;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import us.stcorp.team3.hackathonproject.dto.MatzipResponse;
import us.stcorp.team3.hackathonproject.service.MatzipService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/matzip")
public class MatzipController {

    private final MatzipService matzipService;

    @GetMapping
    public ResponseEntity<List<MatzipResponse>> allMatzip(@PageableDefault(size = 12) Pageable pageable) {
        return ResponseEntity.ok(matzipService.findAllMatzip(pageable));
    }
}
