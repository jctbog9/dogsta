import React from 'react';
import { Link } from 'react-router';

const ViewInquiries = props => {

  return(
    <div className="inquiries">
      <Link to={`/chats/${props.inbox}`}>
        <button>View Inquiries</button>
      </Link>
    </div>
  )
}

export default ViewInquiries;
