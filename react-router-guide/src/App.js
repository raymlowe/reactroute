import React, { Fragment } from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Link, Switch, Redirect, useParams } from "react-router-dom";


/**
 * https://www.freecodecamp.org/news/a-complete-beginners-guide-to-react-router-include-router-hooks/
 */
export default function App() {
  const name = 'John Doe'
  return (
    <Router>
    <main>
      <nav>
        <ul>
          {/* This causes a reload */}
          <li><a href="/">Home</a></li>
          {/* this does not cause a reload */}
          <li><Link to="/">Home</Link></li>
          <li><Link to={`/about/${name}`}>About</Link></li>
          <li><Link to={`/aboutparams/${name}`}>About Params Hooks</Link></li>
          <li><Link to={"/john/"}>doe</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        </nav>
        <Switch>{/*Swtch enforces one route load only*/}
        <Route path="/" exact component={Home} />
        <Route path="/about/:name"  component={About} />
        <Route path="/john/:name"  component={John} />
        <Route path="/john/"  component={JohnNeed} />
        <Route path="/doeHint" component={DoeHint} />
        <Route path="/contact"  component={Contact} />
        <Route path="/aboutparams" component={AboutParams} />
        <Route render={() => <h1>404: page not found</h1>} />
        </Switch>
     </main>
     </Router>
  );
}
// Home Page
const Home = () => (
  <Fragment>
    <h1>Home</h1>
    <FakeText />
  </Fragment>
  );
// About Page
const About = (props) => (
  // props.match.params.name
  <Fragment>
    <h1>About {props.match.params.name}</h1>
    <FakeText />
  </Fragment>
);

const AboutParams = () => {
  const { name } = useParams()
  return(
    <Fragment>
    <h1>About {name}</h1>
    <FakeText />
  </Fragment>
  )

};

const John  = ({match:{params:{name}}}) => (
  // props.match.params.name
  <Fragment>
    { name !== 'doe' ? <Redirect to="/doeHint" /> : null }
    <h1>About {name}</h1>
    <FakeText />
  </Fragment>
);

const JohnNeed = () => (

<Fragment>
  <h1>Improper URL</h1>
  <p>John needs a /[last name]</p>
</Fragment>);

//Doe Hint
const DoeHint = () => (
<Fragment>
  <h1>DOE!!!!!</h1>
  <HintText />
</Fragment>
);

// Contact Page
const Contact = ({history}) => (
  <Fragment>
    <h1>Contact</h1>
    <button onClick={() => history.push('/') } >Go to home</button>
    <FakeText />
  </Fragment>
  );

const FakeText = () => (
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  )

const HintText = () => (
  <p>add /doe to the url ;)</p>
)