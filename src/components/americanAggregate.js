import React, { Component } from "react";
import styled from "styled-components";

const Title = styled.div`
  text-align: center;
  text-decoration: underline;
`;

const FlexData = styled.div`
  display: flex;
`;

const FlexElement = styled.div`
  width: 50%;
`;

const DailyCases = styled.div`
  text-align: right;
`;

const TotalCases = styled.div`
  text-align: right;
`;

const DailyDeaths = styled.div`
  text-align: right;
`;

const TotalDeaths = styled.div`
  text-align: right;
`;

const Numbers = styled.div``;

class AmericanAggregate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // today: "",
      todayCases: "",
      totalCases: "",
      todayDeaths: "",
      totalDeaths: "",
    };
  }
  componentDidMount() {
    fetch("https://covidtracking.com/api/v1/us/daily.json")
      .then((response) => response.json())
      // .then((data) => console.log(data[0].date))
      .then((response) => {
        // this.setState({ today: response[0].date });
        this.setState({ todayCases: response[0].positiveIncrease });
        this.setState({ totalCases: response[0].positive });
        this.setState({ todayDeaths: response[0].deathIncrease });
        this.setState({ totalDeaths: response[0].death });
      });
  }

  render() {
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
      </>
    );
  }
}
export default AmericanAggregate;
