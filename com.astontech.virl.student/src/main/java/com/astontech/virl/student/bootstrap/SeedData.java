package com.astontech.virl.student.bootstrap;

import com.astontech.virl.student.domain.Mentee;
import com.astontech.virl.student.services.MenteeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import java.util.stream.IntStream;

@Component
public class SeedData implements ApplicationListener<ContextRefreshedEvent> {

    private static final Logger logger = LoggerFactory.getLogger(SeedData.class);
    
    MenteeService menteeService;
    
    public SeedData(MenteeService menteeService) {
        this.menteeService = menteeService;
    }

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        if(menteeService.findAllMentees().size() == 0) {
            logger.info("Inserting seed data into empty database");
            generateTestMenteeData(20);
        }
    }

    public void generateTestMenteeData(Integer numberOfMentees) {
        IntStream.range(1, numberOfMentees)
                .forEach(i -> {
                    Mentee mentee = new Mentee();
                    mentee.setName("Mentee" + i);
                    mentee.setBu("Cisco");
                    mentee.setSite((i % 2 == 0) ? "CA" : "MN");
                    menteeService.saveMentee(mentee);
                });
    }
}
