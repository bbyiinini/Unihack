import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Card, Button } from "react-bootstrap/";
import data from "../assets/userData.json";

let page = 0;

// function getData(num) {
//   console.log(data.persons.slice(page, page + num));
//   return data.persons.slice(page, (page += num));
// }
// function flitData(classID) {
//   console.log(data.persons.filter((person) => person.class.includes(classID)));
//   return data.persons.filter((person) => person.class.includes(classID));
// }

const findPeople = (classID) => {
  return "Hi " + classID;
};

const FindClassMate = () => {
  const [result, setResult] = useState(data.persons);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);

  const getData = (num) => {
    console.log(result.slice(page, page + num));
    return result.slice(page, (page += num));
  };

  const flitData = (classID) => {
    setItems([]);
    page = 0;
    classID === ""
      ? setResult(data.persons)
      : setResult(
          data.persons.filter((person) => person.class.includes(classID))
        );
    console.log(result);
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

  useEffect(() => {
    loadMore(3);
  }, [result]);

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
                  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599275590436&di=1711384d414d959a18b3eaa316e8bab8&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D3616242789%2C1098670747%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D900%26h%3D1350"
                />
                <Card.Body>
                  <Card.Title>{res.name}</Card.Title>
                  <Card.Text>
                    This gay also takes "{res.class.join(",")}" {res.number}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      <div className="load-more">
        <a className="load-more-button" onClick={() => loadMore(3)}>
          {isLoading ? "..." : "Load More"}
        </a>
      </div>
    </div>
  );
};

export default FindClassMate;
