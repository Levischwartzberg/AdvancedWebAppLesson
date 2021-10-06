package com.astontech.virl.student.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

@Data
@NoArgsConstructor
@AllArgsConstructor
@RedisHash("mentee")
public class Mentee {

    @Id
    private String id;

    String name;
    String site;
    String bu;
    String assignedVirlInstance;
}
