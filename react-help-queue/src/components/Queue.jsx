import React, { Component } from 'react';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';

function Queue(props) {
  return (
    <div>
      <TicketList />
      <NewTicketControl />
    </div>
  );
}

export default Queue;
