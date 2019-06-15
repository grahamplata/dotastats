import React from "react";
import styled from "styled-components";

function UserProfile(props) {
  return (
    <PlayerRowStyle>
      <a href={props.community}>
        <ProfileStyle src={props.profile} alt={props.profile} />
      </a>
      <Username>{props.username}</Username>
    </PlayerRowStyle>
  );
}

const PlayerRowStyle = styled.div`
  display: flex;
  flex-direction: row
  align-items: center
  justify-content: space-between
`;

const ProfileStyle = styled.img`
  border: 2px;
  color: white;
  margin-top: 5px;
  max-width: 60px;
  border-radius: 50%;
  border-style: solid;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const Username = styled.h3`
  margin-left: 5px;
`;
export default UserProfile;
