import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { USER_API } from "../utility/constant";
import { Avatar, Card, Button } from "./ContributorElement.js";

const Details = () => {
  const [user, setUser] = useState([]);
  const [total, setTotal] = useState(0);

  const { id } = useParams();
  //Fetch per id
  useEffect(() => {
    const getDetails = async () => {
      const result = await axios(`${USER_API}${id}`);
      setUser(result.data.data);
    };
    const getTotal = async () => {
      const result = await axios(`${USER_API}`);
      setTotal(result.data.total);
    };
    getDetails();
    getTotal();
  }, [id]);

  //   const prevID = user.id === 1 ? total : user.id - 1;
  //   const prevID = user.id < 1 ? total : user.id - 1;
  //   const prevID = user.id === 1 ? "#" : user.id - 1;
  //   const nextID = user.id === 12 ? user.id : user.id + 1;
  const prevID = user.id === 1 ? window.location.replace("/404") : user.id - 1;
  const nextID =
    user.id === total ? window.location.replace("/404") : user.id + 1;

  return (
    <>
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
      </Card>
      <Button>
        <Link to={`./${nextID}`}>
          <p>NEXT</p>
        </Link>
      </Button>
      <Button>
        <Link to={`./${prevID}`}>
          <p>PREV</p>
        </Link>
      </Button>
    </>
  );
};

export default Details;
