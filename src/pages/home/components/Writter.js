import React, {Component} from 'react'
import { connect } from "react-redux";
import { WriterWrapper, } from "../style";
class Writter extends Component{
    render(){
        return(
            <WriterWrapper>Writter</WriterWrapper>
        )
    }
}
export default connect()(Writter)