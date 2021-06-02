import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import BlogPost from "./Components/BlogPost/BlogPost";
import Users from "./Components/Users/Users";

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar></NavBar>
                <Switch>
                    <Route exact path="/profile/"></Route>
                    <Route exact path="/users/">
                        <Users></Users>
                    </Route>
                    <Route exact path="/posts/:id">
                        <BlogPost></BlogPost>
                    </Route>
                    <Route exact path="/">
                        <Home></Home>
                        <Users></Users>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
