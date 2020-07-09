import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home,ChatBot } from './components';
import {Counter, Hello, Clock, Cat} from "./oop";
import './App.css'


class App extends Component<any, any> {
    public render(){
    return <Router>
            <Link to="/">홈으로</Link> <br/>
            <Link to="/chat">챗봇</Link><br/>
            <Link to="/counter">카운터</Link> <br/>
            <Link to="/hello">헬로</Link> <br/>
            <Link to="/clock">시계</Link> <br/>
            <Link to="/cat">고양이</Link> <br/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/chat' component={ChatBot}/>
            <Route exact path='/counter'><Counter startNumber={0}/></Route>
            <Route exact path='/hello'><Hello name={"홍길동"}/></Route>
            <Route exact path='/clock' component={Clock}/>
            <Route exact path='/cat' component={Cat}/>
        </Router>
}
}
export default App;