import React from "react";
import moment from "moment";
import "font-awesome/css/font-awesome.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class BirthdayList extends React.Component {
  updateBirthday = task => {
    const tasksCopy = this.state.completedTasks.slice();
    tasksCopy.push(task);
    this.setState({
      completedTasks: tasksCopy
    });
  };
  handleDelete = e => {
    this.props.deleteTaskFunc(this.props.id);
  };

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <p> Person's Info </p>
        </div>
      </div>
    );
  }
}

export default BirthdayList;
