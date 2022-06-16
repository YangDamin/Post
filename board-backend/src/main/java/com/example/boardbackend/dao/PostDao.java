package com.example.boardbackend.dao;

import com.example.boardbackend.model.PostModel;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface PostDao {
    List<PostModel> getPosts();          // 저장된 게시물 get
    void insert(PostModel post);         // 게시물 Create
    PostModel viewPost(int id);         // 게시물 조회
    void deletePost(int id);
    PostModel infoPost(int id);         // 게시물 내용 전달
    void updatePost(PostModel postModel);       // 게시물 수정
    void updateViewCnt(PostModel postModel);    // 게시물 조회수 증가
}
