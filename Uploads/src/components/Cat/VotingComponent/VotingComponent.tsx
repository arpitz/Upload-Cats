import { useState, useEffect, useCallback } from "react";
import useStyles from "./styles";
import _ from "lodash";
import { Row, Col } from "react-bootstrap";
import {
  ThumbDownAltOutlined,
  ThumbDownAlt,
  ThumbUpAltOutlined,
  ThumbUpAlt,
} from "@material-ui/icons";
import { Tooltip } from "@material-ui/core";
import { useActions } from "../../../hooks/useActions";

interface VotingProps {
  id: string;
}

const DEBOUNCE_DELAY = 500;

const VotingComponent: React.FC<VotingProps> = ({ id }) => {
  const { sendLikes } = useActions();
  const classes = useStyles();
  const [likes, setLikes] = useState(-1);

  const handleDebounceAction = async (likes: number, id: string) => {
    if (likes === -1) return;
    sendLikes(likes, id);
  };

  const sendLikesFn = useCallback(
    _.debounce(handleDebounceAction, DEBOUNCE_DELAY),
    [likes]
  );

  useEffect(() => {
    sendLikesFn(likes, id);
  }, [likes, sendLikesFn, id]);

  return (
    <>
      <Row style={{ marginLeft: "2em" }}>
        <Col className={classes.thumbUp}>
          <Tooltip title={likes < 0 ? 0 : likes} placement='top' arrow={true}>
            {likes !== 1 ? (
              <ThumbUpAltOutlined onClick={() => setLikes(1)} />
            ) : (
              <ThumbUpAlt onClick={() => setLikes(1)} />
            )}
          </Tooltip>
        </Col>
        <Col className={classes.thumbDown}>
          <Tooltip title={likes < 0 ? 0 : likes} placement='top' arrow={true}>
            {likes !== 0 ? (
              <ThumbDownAltOutlined onClick={() => setLikes(0)} />
            ) : (
              <ThumbDownAlt onClick={() => setLikes(0)} />
            )}
          </Tooltip>
        </Col>
      </Row>
      <Row>
        <Col className={classes.score}>Score: {likes < 0 ? 0 : likes}</Col>
      </Row>
    </>
  );
};

export default VotingComponent;
