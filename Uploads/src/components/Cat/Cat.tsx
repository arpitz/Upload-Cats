import { useState, useEffect } from "react";
import { Col, Card } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { FavoriteBorderOutlined, Favorite } from "@material-ui/icons";
import useStyles from "./styles";
import VotingComponent from "./VotingComponent/VotingComponent";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface CatProps {
  cat: {
    id: string;
    url: string;
    original_filename: string;
  };
}

const Cat: React.FC<CatProps> = ({ cat }) => {
  const classes = useStyles();
  const { setFavoriteAction } = useActions();
  const [showFav, setShowFav] = useState(false);
  const [favorite, setFavorite] = useState<boolean | null>(null);

  const { data } = useTypedSelector((state) => state.favReducer);

  const getClass = () => (showFav ? classes.opac6 : classes.opac0);

  useEffect(() => {
    if (favorite !== null) {
      favorite
        ? setFavoriteAction(favorite, cat.id)
        : setFavoriteAction(favorite, data.id);
    }
  }, [favorite]);

  return (
    <>
      <Col>
        <Card className={classes.card}>
          <div
            onMouseOver={() => setShowFav(true)}
            onMouseOut={() => setShowFav(false)}>
            <Card.Img
              variant='top'
              src={cat.url}
              alt={cat.original_filename}
              className={classes.image}
            />
            <div className={`${getClass()} ${classes.overlay}`}>
              <Button
                style={{ color: "white" }}
                size='small'
                onClick={(e) => {
                  e.stopPropagation();
                  setFavorite(!favorite);
                }}>
                {!favorite ? (
                  <FavoriteBorderOutlined fontSize='large' />
                ) : (
                  <Favorite fontSize='large' className={classes.fav} />
                )}
              </Button>
            </div>
          </div>
          <Card.Body>
            <Card.Title className={classes.title}>
              {cat.original_filename}
            </Card.Title>
            <div>
              <VotingComponent id={cat.id} />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Cat;
