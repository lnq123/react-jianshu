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
  ],
  articleList:[{
    id:1,
    title:"微信又来送钱，每人30万，快看你有没有资格！",
    body:"我发现大家的问题真的是很搞笑。 之前刘强东出事，一堆人问我，“我在京东金融买的理财会不会受影响？” 后来马云宣布退休，又有人问我，“余额宝和支付...",
    imgUrl:'https://upload-images.jianshu.io/upload_images/2114909-f638ee0f37077b2c?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
  },{
    id:2,
    title:"【南怀瑾老师】今天很坦然地把咒语的秘密告诉大家！",
    body:"今天很坦然地把咒语的秘密告诉大家！ 本文摘录自 《廿一世纪的前言后语》 “致知在格物，物格而后知至，知至而后意诚，意诚而后心正，心正而后身修，身...",
    imgUrl:'https://upload-images.jianshu.io/upload_images/13370728-222f260059838313.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
  
  },{
    id:3,
    title:"APP推荐类篇六：分享安装到手机上就舍不得卸载的6款APP 绝对黑科技",
    body:"手机的内存越来越大，手机里可以安装的APP也越来越多，但是很多APP，安装完后不久就卸载了，可总有那么几个是能够让你不忍心下载的。 以图识字 一...",
    imgUrl:'https://upload-images.jianshu.io/upload_images/13934390-4c9910dcb4dc0565?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
  
  },{
    id:4,
    title:"快乐大本营最催泪的一期，并不是每一个努力的人都幸运",
    body:"文/影子 这是我看过《快乐大本营》最催泪的一期，微博热搜，吴昕哭了，带着好奇心，点击进去看到了让人泪目的一段视频。 熟悉《延禧攻略》的人都应该知...",
    imgUrl:'https://upload-images.jianshu.io/upload_images/1633441-47e3155dbb84949b.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
  
  },{
    id:5,
    title:"5个手机必备的小程序，非常实用哦",
    body:" 1.小程序数据助手 小程序数据助手是每一个小程序管理人员必备的。 它提供了非常详细的数据，访问人数，添加人数，以及每日趋势走向图。非常直观便捷，...",
    imgUrl:'https://upload-images.jianshu.io/upload_images/10315399-c19855f58a6e5a02?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
  
  },]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  } 
};
