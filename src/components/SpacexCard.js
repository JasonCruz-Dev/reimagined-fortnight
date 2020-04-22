import React from "react";
import { useSelector } from "react-redux";
import "../App.css";
import {
  Col,
  Row,
  CardImg,
  Card,
  CardTitle,
  CardBody,
  CardHeader,
  CardText,
  CardFooter,
} from "reactstrap";

const SpacexCard = () => {
  const data = useSelector((state) => state.id);
  const error = useSelector((state) => state.error);

  console.log(data);

  return (
    <Row>
      {error ? (
        <div className='error'>{error}</div>
      ) : (
        data.map((param) => (
          <Col lg='4'>
            <Card className='cardgroup'>
              <div key={param.id}>
                <CardHeader className='container'>
                  <CardImg
                    className='cardimage'
                    top
                    width='100%'
                    alt='Space X images'
                    src={param.flickr_images[0]}
                  />
                </CardHeader>
                <div>
                  <CardBody className='cardtitle-box'>
                    <CardTitle className='cardtitle'> {param.name} </CardTitle>
                  </CardBody>
                  <div className='parabox'>
                    <CardText className='cardparagraph'> {param.description} </CardText>
                    <CardFooter>
                      {" "}
                      <a
                        className='cardbutton'
                        href={param.wikipedia}
                        rel='noopener noreferrer'
                        target='_blank'>
                        More Info
                      </a>
                    </CardFooter>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        ))
      )}
    </Row>

    // <>
    //   {error ? (
    //     <div className='error'>{error}</div>
    //   ) : (
    //     data.map((param) => (
    //       <div className='cardgroup'>
    //         <div key={param.id}>
    //           <div className='container'>
    //             <img
    //               className='cardimage'
    //               top
    //               width='100%'
    //               alt='Space X images'
    //               src={param.flickr_images[0]}
    //             />
    //           </div>
    //           <div>
    //             <div className='cardtitle-box'>
    //               <div className='cardtitle'> {param.name} </div>
    //             </div>
    //             <div className='parabox'>
    //               <div className='cardparagraph'> {param.description} </div>
    //               <button className='cardbutton' href={param.wikipedia} target='_blank'>
    //                 More Info
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     ))
    //   )}
    // </>
  );
};

export default SpacexCard;
