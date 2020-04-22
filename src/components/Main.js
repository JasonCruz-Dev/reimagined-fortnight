import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { getApi } from "../actions/Actions";
import { Spinner, Button } from "reactstrap";
import { connect } from "react-redux";
import "../App.css";

const Main = (props) => {
  // const fetchingData = useSelector((state) => state.isFetching);
  // const dispatch = useDispatch();
  return (
    <div className='getstarted'>
      {props.isFetching ? (
        <div>
          <div className='processing_request'></div>
          <Spinner style={{ marginLeft: "25px" }} color='primary'></Spinner>
        </div>
      ) : (
        <Button className='display_rockets' color='primary' onClick={() => props.getApi()}>
          Display Rockets
        </Button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    id: state.id,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getApi })(Main);

// export default Main;
