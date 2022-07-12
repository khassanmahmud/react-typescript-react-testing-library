import React from "react";
import { Container } from "react-bootstrap";
import Followers from "../../components/Followers/Followers";

const FollowersPage: React.FC = () => {
  return (
    <div>
      <Container>
        <Followers />
      </Container>
    </div>
  );
};

export default FollowersPage;
