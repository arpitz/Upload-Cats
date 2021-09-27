import React, { useState } from "react";
import { ProgressBar, Row, Col } from "react-bootstrap";
import axios from "axios";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";

const Upload: React.FC = () => {
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const classes = useStyles();
  const history = useHistory();

  const uploadFile = ({
    target: { files },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (!files) return;
    let formData = new FormData();
    formData.append("file", files[0]);
    formData.append("sub_id", "my-user-1234");

    const options = {
      onUploadProgress: (progressEvent: { loaded: number; total: number }) => {
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);

        if (percent < 100) {
          setUploadPercentage(percent);
        }
      },
      headers: {
        "x-api-key": "49609112-c398-4aa6-a569-a2bab7c17639",
      },
    };

    axios
      .post("https://api.thecatapi.com/v1/images/upload", formData, options)
      .then((res: any) => {
        setUploadPercentage(100);
        setTimeout(() => {
          setUploadPercentage(0);
          history.push("/");
        }, 2000);
      });
  };

  return (
    <>
      <h2 className={classes.row}> Select cat photos to upload here ... </h2>
      <Row className='justify-content-md-center'>
        <Col>
          <input
            type='file'
            className={`${classes.input} form-control`}
            onChange={uploadFile}
          />
          {uploadPercentage > 0 && (
            <ProgressBar
              now={uploadPercentage}
              animated
              label={`${uploadPercentage}%`}
              className={classes.progress}
            />
          )}
        </Col>
      </Row>
    </>
  );
};

export default Upload;
