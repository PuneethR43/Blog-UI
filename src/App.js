 import React from 'react'
 import { BrowserRouter, Route, Link } from 'react-router-dom'
 
 import Home from './components/static/Home'
 import Users from './components/static/Users'
 import UserShow from './components/static/UserShow'
 import Posts from './components/static/Posts'
 import PostShow from './components/static/PostShow'

function App() {
  return (
        <BrowserRouter>
        <div>   
            <Link to = "/">Home</Link> -
            <Link to = "/users">Users </Link> -
            <Link to = "/posts">Posts </Link>


            <Route path = "/" component = {Home} exact = {true} />
            <Route path = "/users" component = {Users} exact = {true}/>
            <Route path = "/users/:id" component = {UserShow} />
            <Route path = "/posts" component = {Posts} exact = {true}/>
            <Route path = "/posts/:id" component = {PostShow} />

        </div>
        </BrowserRouter>
      )
  }
   

export default App


//import Tasks from './components/tasks/Tasks'

//import Tips from './Tips'
//import Series from './Series'
//import Tasks from './components/tasks/Tasks'
//import Users from './RCAutoFill18'
//import RCuserDetailsForm19 from './RCuserDetailsForm19'
//import UserIdName from './RCuserIDname21'

//WITHIN RENDER
// <Tasks/> 

//  <Series/> 
// <Tips/> 
// <Users/>
// <RCuserDetailsForm19 />
//  <UserIdName/> 