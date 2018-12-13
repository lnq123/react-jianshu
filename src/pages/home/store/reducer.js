import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: "手绘",
      imgUrl:
        "https://upload.jianshu.io/users/upload_avatars/3436165/9213a653c071?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp"
    },
    {
        id: 2,
        title: "社会热点",
        imgUrl:
          "https://upload.jianshu.io/users/upload_avatars/12958119/9aacd7c7-ceed-48b5-a2d1-d4f24b173646.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp"
      },
      {
        id: 3,
        title: "简书电影",
        imgUrl:
        "https://cdn2.jianshu.io/assets/default_avatar/4-3397163ecdb3855a0a4139c34a695885.jpg"
      },
      {
        id: 4,
        title: "读书",
        imgUrl:
          "https://cdn2.jianshu.io/assets/default_avatar/1-04bbeead395d74921af6a4e8214b4f61.jpg"
      },
      {
        id: 5,
        title: "摄影",
        imgUrl:
          "https://cdn2.jianshu.io/assets/default_avatar/4-3397163ecdb3855a0a4139c34a695885.jpg"
      },
      {
        id: 6,
        title: "旅行",
        imgUrl:
          "https://cdn2.jianshu.io/assets/default_avatar/9-cceda3cf5072bcdd77e8ca4f21c40998.jpg"
      },
      {
        id: 7,
        title: "历史",
        imgUrl:
          "https://upload.jianshu.io/users/upload_avatars/11225123/0f017c62-aa77-4914-9301-5a1a6ab981e1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp"
      },
  ]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
