package us.stcorp.team3.hackathonproject.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import us.stcorp.team3.hackathonproject.service.MatzipService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/matzip")
public class MatzipController {

    private final MatzipService matzipService;

    @GetMapping
    public ResponseEntity<Object> allMatzip(@RequestParam(defaultValue = "0") int page) {
        return ResponseEntity.ok(matzipService.findAllMatzip(page));
    }
}
