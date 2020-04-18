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
          <p className='processing_request'></p>
          <Spinner style={{ marginLeft: "25px" }} color='primary'></Spinner>
          <p className='getstarted_para'>
            This will load Space X's list of Rockets they have on a public list. Though they many to
            on a list to choose from, we choose this one. This was a Lambda School Project working
            with React.Js, Redux and Middleware. Everything under the hood can be seen by "pressing
            F12".{" "}
          </p>{" "}
          {/* make sure to add a paragraph here to give a description*/}
        </div>
      ) : (
        <Button color='primary' onClick={() => props.getApi()}>
          Rockets
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
