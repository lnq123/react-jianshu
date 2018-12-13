import styled from 'styled-components'

export const HomeWrapper=styled.div`
    width:960px;
    margin:0 auto;

    overflow:hidden;
`
export const HomeLeft=styled.div`
float:left;
    width:625px;
    margin-left:15px;
    .banner-img{
        width:625px;
        270px;
    }
`
export const HomeRight=styled.div`
    width:240px;
    float:right;
`
export const TopicWrapper=styled.div`
   padding:20px 0 10px 0;
   overflow:hidden;
   margin-left:-18px;
   border-bottom:1px solid #dcdcdc;
`
export const TopicItem=styled.div`
    height:32px;
    line-height:32px;
    margin:0 0 18px 18px;
    float:left;
    padding-right:10px;
    background:#f7f7f7;
    font-size:14px;
    color:#000;
    border:1px solid #dcdcdc;
    border-radius:4px;
    .topic-pic{
        width:32px;
        height:32px;
        float:left;
        margin-right:10px;
    }
`

export const ListItem = styled.div`
overflow:hidden;
padding:20px 0;
border-bottom:1px solid #dcdcdc;
.pic{
  display:block;
  width:125px;
  height:100px;
  float:right;
  border-radius:10px;
}
`

export const ListInfo = styled.div`
width:500px;
float:left;
.title{
  line-heifht:27px;
  font-size:18px;
  font-weight:bold;
  color:#333;
}
.body{
    line-heifht:24px;
  font-size:13px;
  color:#999;

}
`