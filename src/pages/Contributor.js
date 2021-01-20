import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_API } from "../utility/constant";
import { Link } from "react-router-dom";
import {
  Avatar,
  Card,
  CardButton,
  Button,
  Container,
} from "./ContributorElement.js";

const Contributor = () => {
  const [contrib, setContrib] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(BASE_API);
      setContrib(result.data.data);
    };
    fetchData();
  }, []); //componentWillUnmount
  return (
    <Container>
      {contrib.map((user) => (
        <Card>
          <Avatar>
            <img src={user.avatar} alt={user.first_name} />
          </Avatar>
          <div className="basic-info">
            <h2 className="basic-info__name">
              {user.first_name} {user.last_name}
            </h2>
          </div>
          <p className="email">{user.email}</p>
          <Button>
            <Link to={`/user-detail/${user.id}`}>
              <CardButton type="button">More info</CardButton>
            </Link>
          </Button>
        </Card>
      ))}
    </Container>
  );
};

export default Contributor;
