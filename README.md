# Post
게시판 CRUD

## 사용 기술
* Backend
  * SpringBoot
  * mybatis
  * mysql
* Frontend
  * React
  * 패키지 : webpack, babel
----

### 메인 페이지
* 게시판의 모든 글들을 확인할 수 있다.
* AGGrid를 이용해 표로 간편하게 볼 수 있게 함.
![1  메인페이지](https://user-images.githubusercontent.com/71022026/175185832-bcf3649e-f281-40fa-9401-e369856f21bb.PNG)

### 글 작성 페이지
* 글을 작성할 수 있다.
![2  글쓰기페이지](https://user-images.githubusercontent.com/71022026/175186047-724cb546-f39b-4d5f-bb02-ef4bde8d8ede.PNG)

#### 글 작성 중...
![3  글 작성중](https://user-images.githubusercontent.com/71022026/175186109-4b9a0c89-826e-48ee-88f7-73c543e4263e.PNG)

#### 글 작성 후...
* 작성한 글이 저장된 것을 확인할 수 있다.
![4  글 작성 후](https://user-images.githubusercontent.com/71022026/175186475-fb0d4c51-4104-4455-a8a4-fba07f98c74a.PNG)

### 게시물 상세 페이지
* 해당 게시물을 자세히 볼 수 있다.
* 조회수 기능, 좋아요 기능이 추가 되어있다.
* 작성한 날짜도 같이 확인할 수 있다.
![5  상세 페이지](https://user-images.githubusercontent.com/71022026/175186581-27e584f5-8b7d-4c32-8b0b-586df51a932d.PNG)

##### => 좋아요 버튼 클릭 시, 계속 숫자가 올라간다.
![6  좋아요 기능](https://user-images.githubusercontent.com/71022026/175186808-3bebd591-8062-4337-b982-6f77a9599a5f.PNG)

### 글 수정 페이지
* 게시물을 수정할 수 있다.
* 기존의 내용이 그대로 나와 있고, 그것을 수정하면 된다.
![7  글 수정 페이지](https://user-images.githubusercontent.com/71022026/175186715-21c68a10-ae5e-4659-8d1d-93b6fd9af222.PNG)

#### -> 글 수정 후, 해당 게시물
* 기존의 내용이 수정된 것을 볼 수 있다.
![8  글 수정 후](https://user-images.githubusercontent.com/71022026/175186875-0d4a3c5f-1749-45f4-a7f0-0ea79f25a649.PNG)

#### -> 글 수정 후, 메인 페이지
* 수정된 내용이 적용된 것을 메인 페이지에서도 확인 가능하다.
![9  수정 후 메인 페이지](https://user-images.githubusercontent.com/71022026/175186972-65f98da3-c9b6-40ac-bd02-35cf31ebc5ca.PNG)

### 게시물 삭제
* 삭제 버튼 클릭 시, 게시물이 삭제된다.
![10삭제하기](https://user-images.githubusercontent.com/71022026/175187081-8cf89c48-af8b-4f6c-9abd-54cec642cc13.PNG)
