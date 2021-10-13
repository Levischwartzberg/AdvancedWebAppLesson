package com.astontech.virl.student.controllers;

import com.astontech.virl.student.domain.Mentee;
import com.astontech.virl.student.services.MenteeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/mentee")
public class MenteeController {

    private static final Logger Log = LoggerFactory.getLogger(MenteeController.class);

    MenteeService menteeService;

    public MenteeController(MenteeService menteeService) {
        this.menteeService = menteeService;
    }

    @GetMapping("/")
    public List<Mentee> getAllMentees() {
        return menteeService.findAllMentees();
    }

    @GetMapping("/{id}")
    public Mentee getMenteeById(@PathVariable String id) {
        return menteeService.findMenteeById(id);
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<Mentee> getMenteeByName(@PathVariable String name) {

        HttpHeaders headers = new HttpHeaders();
        headers.add("Company", "Aston Technoliges");
        headers.add("Business-Unit", "Software Development");

        Mentee mentee = menteeService.findMenteeByName(name);
        if (mentee == null) {
            Log.info("Mentee " + name + " not found!");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).headers(headers).body(null);
        }
        else {
            return ResponseEntity.ok().headers(headers).body(mentee);
        }
    }

    @PostMapping("/")
    public ResponseEntity<Mentee> saveMentee(@RequestBody Mentee mentee) {
        Mentee savedMentee = menteeService.saveMentee(mentee);
        if(savedMentee.getId() == null) {
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(savedMentee);
        }
        else {
            return ResponseEntity.status(HttpStatus.CREATED).body(savedMentee);
        }
    }

    @DeleteMapping("/{id}")
    public void deleteMentee(@PathVariable String id) {
        menteeService.deleteMentee(id);
    }

    //Test
    @GetMapping("/add")
    public List<Mentee> addTestMenteeToTestSaveMenteeMethod() {
        Mentee testMentee = new Mentee();
        testMentee.setName("Buddy");
        testMentee.setBu("Allianz");
        testMentee.setSite("MN");
        testMentee.setAssignedVirlInstance("virl0x");
        menteeService.saveMentee(testMentee);
        return menteeService.findAllMentees();
    }
}
