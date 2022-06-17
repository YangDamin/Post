package com.example.boardbackend.controller;

import com.example.boardbackend.dao.PostDao;
import com.example.boardbackend.model.PostModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 1. MVC로 작성해보기
 * 2. URL을 좀더 REST스럽게
 * 3. 프론트, 백엔드 검증로직 작성해보기
 * 4.
 *
 * */

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
    public void insert(@RequestBody PostModel postModel) {
        postDao.insert(postModel);
    }

    // 게시물 상세
    @GetMapping("/view/{id}")
    public PostModel viewPost(@PathVariable("id") int id) {
        // 게시물 조회수 증가
        postDao.updateViewCnt(postDao.viewPost(id));

        return postDao.viewPost(id);
    }

    // 게시물 삭제
    @DeleteMapping("/view/{id}")
    public void deletePost(@PathVariable("id") int id) {
        postDao.deletePost(id);
    }

    // 게시물 정보 보내기
    @GetMapping("/update/{id}")
    public PostModel infoPost(@PathVariable("id") int id) {
        return postDao.infoPost(id);
    }

    // 게시물 수정하기
    @PutMapping("/update/{id}")
    public void updatePost(@RequestBody PostModel postModel) {
        postDao.updatePost(postModel);
    }

    // 추천 수 버튼 클릭한 만큼 증가
    @PutMapping("/view/{id}")
    public int increaseRecommend(@PathVariable("id") int id) {
        postDao.increaseRecommend(postDao.viewPost(id));
        return postDao.viewPost(id).getRecommendCnt();
    }

}