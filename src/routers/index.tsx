import React from "react";
import {Redirect} from 'react-router-dom'
import {Home} from '../pages'
import {Cat, Clock, ChatBot} from "../components";
import AdvancedCounter from "../components/fp/AdvancedCounter";


const routerConfig = [
    { path: '/', exact: true, component: () => <Redirect to="/home/"> },
            { path: '/home', component: Home },
            { path: '/chat', component: ChatBot },
            { path: '/cat', component: Cat },
            { path: '/clock', component: Clock },
            { path: '/counter', component: AdvancedCounter },
            ]
            export  default routerConfig