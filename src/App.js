import React, { Component } from "react";
import AmericanAggregate from "./components/americanAggregate";
// import Dropdown from "./components/dropdown";
import InternationalAggregate from "./components/internationalAggregate";
import styled from "styled-components";
import { PieChart } from "react-minimal-pie-chart";

const Intro = styled.div`
  text-align: center;
  font-size: 30px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

const VirusPic = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
`;

const CurrentDate = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 35px;
`;

const CaseUpdateFlexBox = styled.div`
  display: flex;
`;

const CasesAndDropDown = styled.div`
  width: 50%;
`;

const PieChartContainer = styled.div`
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  /* position: absolute; */
`;

const Nations = [];

fetch("https://covidtracking.com/api/v1/us/daily.json")
  .then((response) => response.json())
  .then((data) => console.log(data));

fetch("https://covidtracking.com/api/v1/states/current.json")
  .then((response) => response.json())
  .then((data) => console.log(data));

fetch("https://api.covid19api.com/summary")
  .then((response) => response.json())
  // .then((data) => console.log(data.Countries));
  .then((data) => {
    Nations.push(...data.Countries);
  });

console.log(Nations);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Alaska: "",
      Alabama: "",
      Arkansas: "",
      Arizona: "",
      California: "",
      Colorado: "",
      Connecticut: "",
      DC: "",
      Deleware: "",
      Florida: "",
      Georgia: "",
      Hawaii: "",
      Iowa: "",
      Idaho: "",
      Illinois: "",
      Indiana: "",
      Kansas: "",
      Kentucky: "",
      Louisiana: "",
      Massachusetts: "",
      Maine: "",
      Maryland: "",
      Michagan: "",
      Minnesota: "",
      Missouri: "",
      Mississippi: "",
      Montana: "",
      NorthCarolina: "",
      NorthDakota: "",
      Nebraska: "",
      NewHampshire: "",
      NewJersey: "",
      NewMexico: "",
      NewYork: "",
      Nevada: "",
      Ohio: "",
      Oklahoma: "",
      Oregon: "",
      Pennsylvania: "",
      RhodeIsland: "",
      SouthCarolina: "",
      SouthDakota: "",
      Tennessee: "",
      Texas: "",
      Utah: "",
      Virginia: "",
      Vermont: "",
      Washington: "",
      Wisconsin: "",
      WestVirgina: "",
      Wyoming: "",
      listOpen: false,
      headerTitle: this.props.title,
      location: [
        {
          id: 0,
          title: "New York",
          selected: false,
          key: "location",
        },
        {
          id: 1,
          title: "Dublin",
          selected: false,
          key: "location",
        },
        {
          id: 2,
          title: "California",
          selected: false,
          key: "location",
        },
        {
          id: 3,
          title: "Istanbul",
          selected: false,
          key: "location",
        },
        {
          id: 4,
          title: "Izmir",
          selected: false,
          key: "location",
        },
        {
          id: 5,
          title: "Oslo",
          selected: false,
          key: "location",
        },
        {
          id: 6,
          title: "Oslotrgrgr",
          selected: false,
          key: "location",
        },
        {
          id: 7,
          title: "Oslo",
          selected: false,
          key: "location",
        },
        {
          id: 8,
          title: "Oslo",
          selected: false,
          key: "location",
        },
        {
          id: 9,
          title: "Oslo",
          selected: false,
          key: "location",
        },
        {
          id: 10,
          title: "Oslo",
          selected: false,
          key: "location",
        },
        {
          id: 11,
          title: "Oslo",
          selected: false,
          key: "location",
        },
        {
          id: 12,
          title: "Oslo",
          selected: false,
          key: "location",
        },
        {
          id: 13,
          title: "Oslo",
          selected: false,
          key: "location",
        },
        {
          id: 14,
          title: "Oslo",
          selected: false,
          key: "location",
        },
        {
          id: 15,
          title: "Oslo",
          selected: false,
          key: "location",
        },
        {
          id: 16,
          title: "Oslo",
          selected: false,
          key: "location",
        },
        {
          id: 17,
          title: "Oslo",
          selected: false,
          key: "location",
        },
        {
          id: 18,
          title: "Oslo",
          selected: false,
          key: "location",
        },
        {
          id: 19,
          title: "Oslo",
          selected: false,
          key: "location",
        },
        {
          id: 20,
          title: "Oslo",
          selected: false,
          key: "location",
        },
        {
          id: 21,
          title: "Oslo",
          selected: false,
          key: "location",
        },
        {
          id: 22,
          title: "Oslo",
          selected: false,
          key: "location",
        },
        {
          id: 23,
          title: "Oslo",
          selected: false,
          key: "location",
        },
        {
          id: 24,
          title: "Oslo",
          selected: false,
          key: "location",
        },
        {
          id: 25,
          title: "Oslo",
          selected: false,
          key: "location",
        },
      ],
    };
  }
  componentDidMount() {
    fetch("https://covidtracking.com/api/v1/states/current.json")
      .then((response) => response.json())
      // .then((data) => console.log(data))
      .then((response) => {
        this.setState({ Alaska: response[0].positive });
        this.setState({ Alabama: response[1].positive });
        this.setState({ Arkansas: response[2].positive });
        this.setState({ Arizona: response[4].positive });
        this.setState({ California: response[5].positive });
        this.setState({ Colorado: response[6].positive });
        this.setState({ Connecticut: response[7].positive });
        this.setState({ DC: response[8].positive });
        this.setState({ Deleware: response[9].positive });
        this.setState({ Florida: response[10].positive });
        this.setState({ Georgia: response[11].positive });
        this.setState({ Hawaii: response[13].positive });
        this.setState({ Iowa: response[14].positive });
        this.setState({ Idaho: response[15].positive });
        this.setState({ Illinois: response[16].positive });
        this.setState({ Indiana: response[17].positive });
        this.setState({ Kansas: response[18].positive });
        this.setState({ Kentucky: response[19].positive });
        this.setState({ Louisiana: response[20].positive });
        this.setState({ Massachusetts: response[21].positive });
        this.setState({ Maryland: response[22].positive });
        this.setState({ Maine: response[23].positive });
        this.setState({ Michagan: response[24].positive });
        this.setState({ Minnesota: response[25].positive });
        this.setState({ Missouri: response[26].positive });
        this.setState({ Mississippi: response[28].positive });
        this.setState({ Montana: response[29].positive });
        this.setState({ NorthCarolina: response[30].positive });
        this.setState({ NorthDakota: response[31].positive });
        this.setState({ Nebraska: response[32].positive });
        this.setState({ NewHampshire: response[33].positive });
        this.setState({ NewJersey: response[34].positive });
        this.setState({ NewMexico: response[35].positive });
        this.setState({ Nevada: response[36].positive });
        this.setState({ NewYork: response[37].positive });
        this.setState({ Ohio: response[38].positive });
        this.setState({ Oklahoma: response[39].positive });
        this.setState({ Oregon: response[40].positive });
        this.setState({ Pennsylvania: response[41].positive });
        this.setState({ RhodeIsland: response[43].positive });
        this.setState({ SouthCarolina: response[44].positive });
        this.setState({ SouthDakota: response[45].positive });
        this.setState({ Tennessee: response[46].positive });
        this.setState({ Texas: response[47].positive });
        this.setState({ Utah: response[48].positive });
        this.setState({ Virginia: response[49].positive });
        this.setState({ Vermont: response[50].positive });
        this.setState({ Washington: response[51].positive });
        this.setState({ Wisconsin: response[52].positive });
        this.setState({ WestVirgina: response[53].positive });
        this.setState({ Wyoming: response[54].positive });
      });
    // console.log(this.state.California)
  }
  handleClickOutside() {
    this.setState({
      listOpen: false,
    });
  }
  toggleList() {
    this.setState((prevState) => ({
      listOpen: !prevState.listOpen,
    }));
  }
  render() {
    
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;
    return (
      <div className="App">
        <Intro>
          An interactive Covid-19 tracker app with data for individual states
          and nations
        </Intro>
        <VirusPic src={require("./images/covid-image.jpeg")} alt="Covid Pic" />
        <CurrentDate>{today}</CurrentDate>
        <CaseUpdateFlexBox>
          <CasesAndDropDown>
            <AmericanAggregate />
          </CasesAndDropDown>
          <CasesAndDropDown>
            <InternationalAggregate />
          </CasesAndDropDown>
        </CaseUpdateFlexBox>
        <PieChartContainer>
          <PieChart
            data={[
              {
                title: "Alaska",
                value: this.state.Alaska,
                color: "rgb(255, 0, 0)",
              },
              {
                title: "Alabama",
                value: this.state.Alabama,
                color: "rgb(240, 0, 0)",
              },
              {
                title: "Arkansas",
                value: this.state.Arkansas,
                color: "rgb(225, 0, 0)",
              },
              {
                title: "Arizona",
                value: this.state.Arizona,
                color: "rgb(210, 0, 0)",
              },
              {
                title: "California",
                value: this.state.California,
                color: "rgb(195, 0, 0)",
              },
              {
                title: "Colorado",
                value: this.state.Colorado,
                color: "rgb(180, 0, 0)",
              },
              {
                title: "Connecticut",
                value: this.state.Connecticut,
                color: "rgb(165, 0, 0)",
              },
              { title: "DC", value: this.state.DC, color: "rgb(150 ,0, 0)" },
              {
                title: "Deleware",
                value: this.state.Deleware,
                color: "rgb(135 ,0, 0)",
              },
              {
                title: "Florida",
                value: this.state.Florida,
                color: "rgb(120 ,0, 0)",
              },
              {
                title: "Georgia",
                value: this.state.Georgia,
                color: "rgb(105 ,0, 0)",
              },
              {
                title: "Hawaii",
                value: this.state.Hawaii,
                color: "rgb(90 ,0, 0)",
              },
              { title: "Iowa", value: this.state.Iowa, color: "rgb(75 ,0, 0)" },
              {
                title: "Idaho",
                value: this.state.Idaho,
                color: "rgb(60 ,0, 0)",
              },
              {
                title: "Illinois",
                value: this.state.Illinois,
                color: "rgb(255 ,255, 0)",
              },
              {
                title: "Indiana",
                value: this.state.Indiana,
                color: "rgb(255 ,240, 0)",
              },
              {
                title: "Kansas",
                value: this.state.Kansas,
                color: "rgb(255 ,225, 0)",
              },
              {
                title: "Kentucky",
                value: this.state.Kentucky,
                color: "rgb(255 ,210, 0)",
              },
              {
                title: "Louisiana",
                value: this.state.Louisiana,
                color: "rgb(255 ,195, 0)",
              },
            ]}
          />
        </PieChartContainer>
      </div>
    );
  }
}

// export default App;
