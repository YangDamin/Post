package com.example.boardbackend.service.impl;

import com.example.boardbackend.dao.PostDao;
import com.example.boardbackend.model.PostModel;
import com.example.boardbackend.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class PostServiceImpl implements PostService {
    @Autowired
    PostDao postDao;

    public List<PostModel> getPosts() {
        return postDao.getPosts();
    }

    public void insert(PostModel postModel) {
        postDao.insert(postModel);
    }

    public void updateViewCnt(int id) {
        postDao.updateViewCnt(postDao.viewPost(id));
    }

    public PostModel viewPost(int id) {
        return postDao.viewPost(id);
    }

    public void deletePost(int id) {
        postDao.deletePost(id);
    }

    public PostModel infoPost(int id) {
        return postDao.infoPost(id);
    }

    public void updatePost(PostModel postModel) {
        postDao.updatePost(postModel);
    }

    public void increaseRecommend(int id){
        postDao.increaseRecommend(postDao.viewPost(id));
    }

    public int recommendCnt(int id){
        return postDao.viewPost(id).getRecommendCnt();
    }
}
