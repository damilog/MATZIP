package us.stcorp.team3.hackathonproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class HackathonProjectApplication {

    public static void main(String[] args) {
        SpringApplication.run(HackathonProjectApplication.class, args);
    }

}
