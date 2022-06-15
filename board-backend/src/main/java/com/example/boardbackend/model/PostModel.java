package com.example.boardbackend.model;

import lombok.Builder;
import lombok.Getter;

@Getter             // getter 생성 어노테이션
@Builder
public class PostModel {            // 게시물


    private int id;
    private String title;
    private String content;
    private String date;
}