import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import useStyles from "./styles";
import { Container } from "react-bootstrap";
import Upload from "./components/Upload/Upload";
import Home from "./components/Home/Home";

const App = () => {
  const classes = useStyles();

  return (
    <Container fluid className={classes.jumbotron}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/upload' component={Upload} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
};

export default App;
