import React from 'react';
import { Link, Switch, Route, useRouteMatch } from "react-router-dom"
import ProtectedRoute from "../../ProtectedRoute"

import ListQuestions from "../list-questions/ListQuestions"

import "./Home.scss"
function Home(props) {

    let { path, url } = useRouteMatch();

    console.log(path, url)

    return (
      
        <div className="container">
            <section className="left-section">
                {/* replace button with Link */}
                <Link to={`${url}/all-questions`}><button>Questions</button></Link>
                <br></br>
                <Link to={`${url}/all-exams`}><button>All test</button></Link>
                <br></br>
                <Link to={`${url}/test`}><button>Try test</button></Link>
            </section>
            <section className="right-section">
                
                {/* Switch and ProtectedRoute here */}
                <Switch>

                    {/* public route */}
                    <Route path={path} exact component={() => <div> Chào mừng.... </div>} />
                    
                    {/* private route */}
                    <ProtectedRoute path={`${path}/all-questions`} exact component={ListQuestions} />
                    {/* <ProtectedRoute path={`${path}/all-exams`} exact component={ListQuestions} />
                    <ProtectedRoute path={`${path}/all-questions`} exact component={ListQuestions} /> */}

                </Switch>
            </section>
        </div>
       
    );
}

export default Home;