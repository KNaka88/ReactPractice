import React, { Component } from "react";
import NewTicketForm from "./NewTicketForm";
import PropTypes from 'prop-types';

class NewTicketControl extends Component {
  constructor(props) {
    super(props);
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.state = {formVisibleOnPage: false};
  }

  showForm() {
    this.setState({formVisibleOnPage: true});
  }

  hideForm() {
    this.setState({formVisibleOnPage: false});
  }

  render() {
    const formVisibleOnPage = this.state.formVisibleOnPage;
    let formAreaContent = null;

    if (formVisibleOnPage) {
        formAreaContent = <NewTicketForm
                            onNewTicketCreation={this.props.onNewTicketCreation}
                            hideFormAfterSubmission = {this.hideForm}
                          />
    } else {
      formAreaContent = <button onClick={this.showForm}>Request Help</button>;
    }

    return (
      <div>
        {formAreaContent}
      </div>
    );
  }
}

NewTicketControl.propTypes = {
  onNewTicketCreation: PropTypes.func
}

export default NewTicketControl;
