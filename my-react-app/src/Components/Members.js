import React from 'react';
import MemberList from './MemberList';
import membersData from './MembersData'; 

function Members() {
  return (
    <div>
      <h1>Members</h1>
      <MemberList members={membersData} />
    </div>
  );
}

export default Members;
