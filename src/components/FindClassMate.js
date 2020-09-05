import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Card, Button, Popover, OverlayTrigger } from "react-bootstrap/";
import data from "../assets/userData.json";
import "../styles.css";

let page = 0;

// function getData(num) {
//   console.log(data.persons.slice(page, page + num));
//   return data.persons.slice(page, (page += num));
// }
// function flitData(classID) {
//   console.log(data.persons.filter((person) => person.class.includes(classID)));
//   return data.persons.filter((person) => person.class.includes(classID));
// }

const FindClassMate = () => {
  const [result, setResult] = useState(data.persons);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadMore(12);
  }, [result]);

  const getData = (num) => {
    return result.slice(page, (page += num));
  };

  const flitData = (classID) => {
    setItems([]);
    page = 0;
    if (classID === "") setResult(data.persons);
    else if (classID.length === 1) {
      setResult(
        data.persons.filter((person) => person.classes.includes(classID))
      );
    } else {
      let index = classID.length - 1;
      let output = result.filter((p) =>
        p.classes.includes(classID.substring(index, index + 1))
      );
      index--;
      while (index >= 0) {
        output = output.filter((p) =>
          p.classes.includes(classID.substring(index, index + 1))
        );
        index--;
        console.log(output);
      }
      console.log("-------");
      console.log(output);
      console.log("-------");
      setResult(output);
    }
  };

  const loadMore = (nums) => {
    if (isLoading) return;
    setIsLoading(true);
    setItems(items.concat(getData(nums)));
    setIsLoading(false);
    // setTimeout(() => setIsLoading(false), 1000);
  };

  const reLoad = (classID) => {
    if (isLoading) return;
    setIsLoading(true);
    flitData(classID);
    setIsLoading(false);
    // setTimeout(() => setIsLoading(false), 1000);
  };

  const onSearchChanged = (e) => {
    reLoad(e.target.value);
  };

  return (
    <div className="findmate">
      <input
        className="search-class"
        onChange={onSearchChanged}
        placeholder="Search..."
      ></input>
      <div>
        <Grid container spacing={3} style={{ padding: "0px 100px" }}>
          {items.map((res) => (
            <Grid item xs={3} key={res.id}>
              <Card
                bg={res.teacher ? "warning" : "light"}
                style={{
                  width: "70%",
                  margin: "0 50%",
                  transform: "translateX(-50%)"
                }}
              >
                <Card.Img
                  style={{
                    height: "15rem"
                  }}
                  variant="top"
                  src={
                    res.avatar
                      ? res.avatar
                      : "https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
                  }
                />
                <Card.Body>
                  <Card.Title>{res.name}</Card.Title>
                  <Card.Text>
                    <strong>{res.teacher ? "Teacher" : "Student"}</strong>{" "}
                    <br></br>
                    Classes: "{res.classes.join(",")}"
                  </Card.Text>
                  <OverlayTrigger
                    trigger="focus"
                    placement="right"
                    overlay={
                      <Popover id="popover-basic">
                        <Popover.Title as="h3">
                          <strong>Name</strong>: {res.name}
                        </Popover.Title>
                        <Popover.Content>
                          <strong>Number: </strong>
                          {res.phone}
                        </Popover.Content>
                        <Popover.Content>
                          <strong>Email: </strong>
                          {res.email}
                        </Popover.Content>
                        <Popover.Content>
                          <strong>About: </strong>
                          {res.about}
                        </Popover.Content>
                      </Popover>
                    }
                  >
                    <Button variant="danger">Info</Button>
                  </OverlayTrigger>
                </Card.Body>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      <div className="load-more">
        <a className="load-more-button" onClick={() => loadMore(12)}>
          {isLoading ? "..." : "Load More"}
        </a>
      </div>
    </div>
  );
};

export default FindClassMate;
