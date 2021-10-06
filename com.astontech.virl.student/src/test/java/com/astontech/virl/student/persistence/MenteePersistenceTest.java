package com.astontech.virl.student.persistence;

import com.astontech.virl.student.Application;
import com.astontech.virl.student.domain.Mentee;
import com.astontech.virl.student.repositories.MenteeRepository;
import com.astontech.virl.student.services.MenteeService;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.Optional;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = Application.class)
public class MenteePersistenceTest {

    @Autowired
    private MenteeRepository menteeRepository;

    @Autowired
    private MenteeService menteeService;

    @Test
    public void testMenteeRepository() {
        Mentee mentee = new Mentee();
        mentee.setName("Levi");
        mentee.setBu("cisco");
        mentee.setSite("MN");
        mentee.setAssignedVirlInstance("virl101");

        Mentee savedMentee = menteeRepository.save(mentee);
        Assert.assertNotNull(savedMentee.getId());

        Mentee foundMentee = menteeRepository.findById(savedMentee.getId()).orElse(null);
        Assert.assertNotNull(foundMentee);

        foundMentee.setSite("WI");
        Mentee updatedMentee = menteeRepository.save(foundMentee);
        Assert.assertEquals("WI", updatedMentee.getSite());

        String idToDelete = updatedMentee.getId();
        menteeRepository.deleteById(updatedMentee.getId());
        Assert.assertEquals(Optional.empty(), menteeRepository.findById(idToDelete));

        System.out.println(menteeRepository.findAll().toString());
    }

    @Test
    public void testMenteeService() {
        Mentee mentee = new Mentee();
        mentee.setName("Brad");
        mentee.setBu("cisco");
        mentee.setSite("CA");
        mentee.setAssignedVirlInstance("virl102");

        Mentee savedMentee = menteeService.saveMentee(mentee);
        Assert.assertNotNull(savedMentee.getId());

        Mentee foundMentee = menteeService.findMenteeById(savedMentee.getId());
        Assert.assertNotNull(foundMentee);

        foundMentee.setName("Bubbo");
        Mentee updatedMentee = menteeService.saveMentee(foundMentee);
        Assert.assertEquals("Bubbo", updatedMentee.getName());

        String idToDelete = updatedMentee.getId();
        menteeService.deleteMentee(updatedMentee.getId());
        Assert.assertEquals(null, menteeService.findMenteeById(idToDelete));

        System.out.println(menteeService.findAllMentees().toString());
    }
}
