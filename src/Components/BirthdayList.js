import React from "react";
import moment from "moment";
import "font-awesome/css/font-awesome.min.css";

class BirthdayList extends React.Component {
  state = {
    newTaskText: "",
    dateSelected: moment().format("YYYY-MM-DD"),
    showModal: false
  };

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

  handleClickDropdown = () => {
    if (
      typeof this.state.newTaskText !== "string" ||
      this.state.newTaskText == ""
    ) {
      this.setState({
        showModal: true
      });
    } else {
      this.props.addTaskFunc(this.state.newTaskText, this.state.dateSelected);
      this.setState({
        newTaskText: ""
      });
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col-4">{this.props.name}</div>
        <div className="col-2">
          {moment().diff(this.props.dateOfBirth, "years")}
        </div>
        <div className="col-2">
          <button type="button" class="btn btn-link">
            {" "}
            <a
              href={
                moment().diff(this.props.dateOfBirth, "years") > 12
                  ? "https://www.amazon.com/s?k=gift&ref=nb_sb_noss_2"
                  : "https://www.amazon.com/gcx/Gifts-for-Kids-4-7/gfhz/?canBeGiftWrapped=false&categoryId=kid4-neutral&isPrime=false&starRatingFrom=0"
              }
              target="blank"
            >
              <i className="fa fa-gift"></i>
            </a>
          </button>
        </div>
        <div className="col-2">
          <button type="button" class="btn btn-primary">
            edit
          </button>
        </div>
        <div className="col-2">
          <p>
            {" "}
            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            <i className="fa fa-caret-down"></i>  </button>
     
          </p>
          <div className="collapse" id="collapseExample">
            <div className="card card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BirthdayList;
