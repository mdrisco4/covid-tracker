import React, { Component } from "react";
import styled from "styled-components";
import Dropdown from "./dropdown";

const Title = styled.div`
  text-align: center;
  text-decoration: underline;
  font-size: 30px;
`;

const FlexData = styled.div`
  display: flex;
`;

const FlexElement = styled.div`
  width: 50%;
`;

const DailyCases = styled.div`
  text-align: right;
  font-size: 25px;
`;

const TotalCases = styled.div`
  text-align: right;
  font-size: 25px;
`;

const DailyDeaths = styled.div`
  text-align: right;
  font-size: 25px;
`;

const TotalDeaths = styled.div`
  text-align: right;
  font-size: 25px;
`;

const Numbers = styled.div`
font-size: 25px;
`;

class AmericanAggregate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // today: "",
      todayCases: "",
      totalCases: "",
      todayDeaths: "",
      totalDeaths: "",
      states: [],
    };
  }
  componentDidMount() {
    // fetch("https://covidtracking.com/api/v1/us/daily.json")
    fetch("https://api.covidtracking.com/v1/us/daily.json")
      .then((response) => response.json())
      // .then((data) => console.log(data[0]))
      .then((response) => {
        this.setState({ todayCases: response[0].positiveIncrease });
        this.setState({ totalCases: response[0].positive });
        this.setState({ todayDeaths: response[0].deathIncrease });
        this.setState({ totalDeaths: response[0].death });
        this.setState({ states: response });
      });
  }

  render() {
    const States = [
      {
        id: 51,
        value: "US Total",
        selected: false,
        key: "location",
      },
      {
        id: 0,
        value: "Alaska",
        selected: false,
        key: "location",
      },
      {
        id: 1,
        value: "Alabama",
        selected: false,
        key: "location",
      },
      {
        id: 2,
        value: "Arkansas",
        selected: false,
        key: "location",
      },
      {
        id: 3,
        value: "Arizona",
        selected: false,
        key: "location",
      },
      {
        id: 4,
        value: "California",
        selected: false,
        key: "location",
      },
      {
        id: 5,
        value: "Colorado",
        selected: false,
        key: "location",
      },
      {
        id: 6,
        value: "Connecticut",
        selected: false,
        key: "location",
      },
      {
        id: 7,
        value: "DC",
        selected: false,
        key: "location",
      },
      {
        id: 8,
        value: "Deleware",
        selected: false,
        key: "location",
      },
      {
        id: 9,
        value: "Florida",
        selected: false,
        key: "location",
      },
      {
        id: 10,
        value: "Georgia",
        selected: false,
        key: "location",
      },
      {
        id: 11,
        value: "Hawaii",
        selected: false,
        key: "location",
      },
      {
        id: 12,
        value: "Iowa",
        selected: false,
        key: "location",
      },
      {
        id: 13,
        value: "Idaho",
        selected: false,
        key: "location",
      },
      {
        id: 14,
        value: "Illinois",
        selected: false,
        key: "location",
      },
      {
        id: 15,
        value: "Indiana",
        selected: false,
        key: "location",
      },
      {
        id: 16,
        value: "Kansas",
        selected: false,
        key: "location",
      },
      {
        id: 17,
        value: "Kentucky",
        selected: false,
        key: "location",
      },
      {
        id: 18,
        value: "Louisiana",
        selected: false,
        key: "location",
      },
      {
        id: 19,
        value: "Massachusetts",
        selected: false,
        key: "location",
      },
      {
        id: 20,
        value: "Maine",
        selected: false,
        key: "location",
      },
      {
        id: 21,
        value: "Maryland",
        selected: false,
        key: "location",
      },
      {
        id: 22,
        value: "Michigan",
        selected: false,
        key: "location",
      },
      {
        id: 23,
        value: "Minnesota",
        selected: false,
        key: "location",
      },
      {
        id: 24,
        value: "Missouri",
        selected: false,
        key: "location",
      },
      {
        id: 25,
        value: "Mississippi",
        selected: false,
        key: "location",
      },
      {
        id: 26,
        value: "Montana",
        selected: false,
        key: "location",
      },
      {
        id: 27,
        value: "North Carolina",
        selected: false,
        key: "location",
      },
      {
        id: 28,
        value: "North Dakota",
        selected: false,
        key: "location",
      },
      {
        id: 29,
        value: "Nebraska",
        selected: false,
        key: "location",
      },
      {
        id: 30,
        value: "New Hampshire",
        selected: false,
        key: "location",
      },
      {
        id: 31,
        value: "New Jersey",
        selected: false,
        key: "location",
      },
      {
        id: 32,
        value: "New Mexico",
        selected: false,
        key: "location",
      },
      {
        id: 33,
        value: "New York",
        selected: false,
        key: "location",
      },
      {
        id: 34,
        value: "Nevada",
        selected: false,
        key: "location",
      },
      {
        id: 35,
        value: "Ohio",
        selected: false,
        key: "location",
      },
      {
        id: 36,
        value: "Oklahoma",
        selected: false,
        key: "location",
      },
      {
        id: 37,
        value: "Oregon",
        selected: false,
        key: "location",
      },
      {
        id: 38,
        value: "Pennsylvania",
        selected: false,
        key: "location",
      },
      {
        id: 39,
        value: "Rhode Island",
        selected: false,
        key: "location",
      },
      {
        id: 40,
        value: "South Carolina",
        selected: false,
        key: "location",
      },
      {
        id: 41,
        value: "South Dakota",
        selected: false,
        key: "location",
      },
      {
        id: 42,
        value: "Tennessee",
        selected: false,
        key: "location",
      },
      {
        id: 43,
        value: "Texas",
        selected: false,
        key: "location",
      },
      {
        id: 44,
        value: "Utah",
        selected: false,
        key: "location",
      },
      {
        id: 45,
        value: "Virginia",
        selected: false,
        key: "location",
      },
      {
        id: 46,
        value: "Vermont",
        selected: false,
        key: "location",
      },
      {
        id: 47,
        value: "Washington",
        selected: false,
        key: "location",
      },
      {
        id: 48,
        value: "Wisconsin",
        selected: false,
        key: "location",
      },
      {
        id: 49,
        value: "West Virgina",
        selected: false,
        key: "location",
      },
      {
        id: 50,
        value: "Wyoming",
        selected: false,
        key: "location",
      },
    ];
    return (
      <>
        <Title>U.S. Cases</Title>
        <FlexData>
          <FlexElement>
            <DailyCases>New Cases: </DailyCases>
            <TotalCases>Total Cases: </TotalCases>
            <DailyDeaths>New Deaths: </DailyDeaths>
            <TotalDeaths>Total Deaths: </TotalDeaths>
          </FlexElement>
          <FlexElement>
            <Numbers>{this.state.todayCases}</Numbers>
            <Numbers>{this.state.totalCases}</Numbers>
            <Numbers>{this.state.todayDeaths}</Numbers>
            <Numbers>{this.state.totalDeaths}</Numbers>
          </FlexElement>
        </FlexData>
        <Dropdown title="Select a State" items={States} />

      </>
    );
  }
}
export default AmericanAggregate;
