import React, { Component } from 'react';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';

class Queue extends Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: [],
    };
    this.addNewTicketToList = this.addNewTicketToList.bind(this);
  }

  addNewTicketToList(newTicket) {
    let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }

  render() {
    return (
      <div>
        <TicketList
          ticketList = {this.state.masterTicketList} />
        <NewTicketControl onNewTicketCreation = {this.addNewTicketToList} />
      </div>
    );
  }
}

export default Queue;
