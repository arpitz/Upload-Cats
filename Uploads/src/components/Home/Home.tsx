import React, { useEffect } from "react";
import { Button, Row, Col, Spinner } from "react-bootstrap";
import useStyles from "./styles";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useHistory } from "react-router-dom";
import Cats from "../Cats/Cats";

const Home: React.FC = () => {
  const { fetchAllCats } = useActions();
  const history = useHistory();
  const classes = useStyles();
  const { data, error, loading } = useTypedSelector(
    (state) => state.catsReducer
  );

  useEffect(() => {
    fetchAllCats();
  }, []);

  return (
    <div>
      <Row>
        <Col>
          <h1>All Cats ...</h1>
        </Col>
        <Col xs lg='2'>
          <Button
            variant='outline-primary'
            onClick={() => {
              history.push("/upload");
            }}>
            Upload More Cats
          </Button>
        </Col>
      </Row>
      {error && <h3>{error}</h3>}
      {loading && (
        <Spinner
          className={classes.spinner}
          animation='border'
          variant='primary'
        />
      )}
      {!error && !loading && data && <Cats cats={data} />}
    </div>
  );
};

export default Home;
