package com.example.boardbackend.model;

import lombok.Getter;

@Getter             // getter 생성 어노테이션
public class PostModel {            // 게시물


    private int id;
    private String title;
    private String content;
    private String date;
    private int viewCnt;
    private int recommendCnt;
}
