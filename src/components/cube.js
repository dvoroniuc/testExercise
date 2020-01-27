import React from "react";
import "./style.scss";
import { Row } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { select, reset } from "../actions/selecting";

function Cube(props) {
  const selectedId = useSelector(state => state.selected);
  const dispatch = useDispatch();
  const cubeId = props.id;
  const selectOnClick = () => {
    selectedId !== props.id ? dispatch(select(props.id)) : dispatch(reset());
  };
  const savedId = localStorage.getItem("id");
  // if (isNaN(selectedId)) {
  localStorage.setItem("id", selectedId);
  // }

  return (
    <div className="cube-parent-container">
      <Row
        onClick={() => selectOnClick()}
        style={
          selectedId === cubeId || savedId === cubeId
            ? { opacity: 50 + "%" }
            : {}
        }
      >
        <div className="cube-container">
          <div
            className="cube"
            style={{
              background: props.color
            }}
          >
            <div className="cube-abbr">{props.abbr}</div>
          </div>
        </div>
        <div className="cube-label">
          <span style={{ opacity: 0.8 }}>&#8226;</span>

          <span>{props.label}</span>
        </div>
      </Row>
    </div>
  );
}

export default Cube;
