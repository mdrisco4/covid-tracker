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

class InternationalAggregate extends Component {
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
    fetch("https://api.covid19api.com/summary")
      .then((response) => response.json())
      // .then((data) => console.log(data))
      .then((response) => {
        // this.setState({ today: response[0].date });
        this.setState({ todayCases: response.Global.NewConfirmed });
        this.setState({ totalCases: response.Global.TotalConfirmed });
        this.setState({ todayDeaths: response.Global.NewDeaths });
        this.setState({ totalDeaths: response.Global.TotalDeaths });
      });
  }

  render() {
    return (
      <>
        <Title>Worldwide Cases</Title>
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
export default InternationalAggregate;
