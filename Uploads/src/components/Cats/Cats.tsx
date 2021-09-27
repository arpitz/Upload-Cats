import Cat from "../Cat/Cat";
import { Row } from "react-bootstrap";

interface CatProps {
  id: string;
  url: string;
  original_filename: string;
}

interface CatsProps {
  cats: object[];
}
const Cats: React.FC<CatsProps> = ({ cats }: any) => {
  return (
    <>
      <Row xs={1} sm={2} md={3} lg={4} className='g-4'>
        {cats.length > 0 ? (
          cats.map((c: CatProps) => <Cat key={c.id} cat={c} />)
        ) : (
          <h3>No Cats present, Click on Upload to upload some of them.</h3>
        )}
      </Row>
    </>
  );
};

export default Cats;
