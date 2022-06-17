package com.example.boardbackend.service;

import com.example.boardbackend.model.PostModel;

import java.util.List;

public interface PostService {
    List<PostModel> getPosts();
    /**
     * 게시물 전체 조회
     * List 형식으로 return
     * */

    void insert(PostModel postModel);
    /**
     * 게시물 작성
     * */

    void updateViewCnt(int id);
    /**
     * 게시물 조회수 증가
     * */

    PostModel viewPost(int id);
    /**
     * 게시물 상세
     * */

    void deletePost(int id);
    /**
     * 게시물 삭제
     * */

    PostModel infoPost(int id);
    /**
     * 게시물 정보 frontend로 보내기
     * */

    void updatePost(PostModel postModel);
    /**
     * 게시물 수정하기
     * */

    void increaseRecommend(int id);
    /**
     * 게시물 추천 수 증가
     * */

    int recommendCnt(int id);
    /**
     * 게시물 추천 수 frontend에 보내기
     * */

}
