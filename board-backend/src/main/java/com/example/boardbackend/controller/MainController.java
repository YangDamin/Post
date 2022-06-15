package com.example.boardbackend.controller;

import com.example.boardbackend.dao.PostDao;
import com.example.boardbackend.model.PostModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class MainController {

    @Autowired
    PostDao postDao;

    // 게시물 조회
    @GetMapping("/")
    public List<PostModel> getPosts() {
        return postDao.getPosts();
    }

    // 게시물 작성
    @PostMapping("/write")
    public void insert(@RequestBody PostModel postModel){
        postDao.insert(postModel);
    }

    // 게시물 상세
    @GetMapping("/view/{id}")
    public PostModel viewPost(@PathVariable("id") int id){
        return postDao.viewPost(id);
    }

    // 게시물 삭제
    @DeleteMapping("/view/{id}")
    public void deletePost(@PathVariable("id") int id){
        postDao.deletePost(id);
    }
}
