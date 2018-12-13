import React, {Component} from 'react'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
} from './style'
import List from './components/List'
import Recommend from './components/Recommend'
import Writter from './components/Writter'
import Topic from './components/Topic'

export default class Home extends Component{
    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img  alt='' className='banner-img' src = "//upload.jianshu.io/admin_banners/web_images/4581/313b30a87782c9934e69fa46cfd7df0549e55aea.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
<Topic /><List />

                </HomeLeft>
                <HomeRight>
                <Recommend />
                <Writter />
                </HomeRight>
                

            </HomeWrapper>
        )
    }
}