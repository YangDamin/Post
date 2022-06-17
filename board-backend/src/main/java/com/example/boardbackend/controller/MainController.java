package com.example.boardbackend.controller;

import com.example.boardbackend.model.PostModel;
import com.example.boardbackend.service.PostService;
import lombok.RequiredArgsConstructor;
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
@RequiredArgsConstructor        // 생성자 자동으로 생성
public class MainController {

    private final PostService postService;

    // 게시물 조회
    @GetMapping("/")
    public List<PostModel> getPosts() {
        return postService.getPosts();
    }

    // 게시물 작성
    @PostMapping("/posts/write")
    public void insert(@RequestBody PostModel postModel) {
        postService.insert(postModel);
    }

    // 게시물 상세
    @GetMapping("/posts/{id}")
    public PostModel viewPost(@PathVariable("id") int id) {
        // 게시물 조회수 증가
        postService.updateViewCnt(id);

        return postService.viewPost(id);
    }

    // 게시물 삭제
    @DeleteMapping("/posts/{id}")
    public void deletePost(@PathVariable("id") int id) {
        postService.deletePost(id);
    }

    // 게시물 정보 보내기
    @GetMapping("/posts/update/{id}")
    public PostModel infoPost(@PathVariable("id") int id) {
        return postService.infoPost(id);
    }

    // 게시물 수정하기
    @PutMapping("/posts/update/{id}")
    public void updatePost(@RequestBody PostModel postModel) {
        postService.updatePost(postModel);
    }

    // 추천 수 버튼 클릭한 만큼 증가
    @PutMapping("/posts/{id}")
    public int increaseRecommend(@PathVariable("id") int id) {
        postService.increaseRecommend(id);
        return postService.recommendCnt(id);
    }

}