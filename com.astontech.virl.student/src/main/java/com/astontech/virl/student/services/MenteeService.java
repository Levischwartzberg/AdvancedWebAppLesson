package com.astontech.virl.student.services;

import com.astontech.virl.student.domain.Mentee;

import java.util.List;

public interface MenteeService {

    Mentee saveMentee(Mentee mentee);

    Mentee findMenteeById(String id);

    List<Mentee> findAllMentees();

    void deleteMentee(String id);
}
