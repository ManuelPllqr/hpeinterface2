import React, {Component} from 'react';
import { Box, Button, Collapsible, Drop, TextArea, Heading, RadioButton, Grommet, Menu, Layer, ResponsiveContext, Image, Text, DataTable, Meter, FormField, Anchor, RangeInput, Chart, CheckBox, RadioButtonGroup} from 'grommet';
import { FormClose, Notification, Facebook } from 'grommet-icons';
import { LineChart, RadarChart} from 'grommet-controls/chartjs';
import { hpe } from 'grommet-theme-hpe';
{/*import libraries above*/}


const AppBar = (props) => (
    <Box
        tag='header'
        direction='row'
        align='center'
        justify='start'
        background='white'
        style={{ zIndex: '1' }}
        {...props}
    />

);

{/*sets theme and HPE color id*/}
const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

class App extends Component {
  constructor(props){
    super(props);
    this.state = { name: '' }
    {/*this statements are used to update the text typed by the user inside the date input text boxes*/}
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.targetRef = React.createRef();
    this.state = { value: 0 };
    this.state = { value: 'dy/mm/year' }
    {/*default value inside date textboxes*/}
    {/* below are the functions used for the date user input textboxes */}
  }



  handleStartDateChange(startdate){
    this.setState({startdate});
  }



  handleEndDateChange(enddate){
    this.setState({enddate});
  }

  handleSubmit(){

  }

  componentDidMount() {
    this.forceUpdate();
  }

  render() {
    const { value } = this.state;

    return (

        <Grommet theme={hpe} full>


          <Box fill>
            {/*direction 'row' allows elements inside the box to be aligned horizontally, gap sets the gap between elements of the box*/}
            <AppBar flex margin={{top:'7%'}}  gap='10%'>
              <Image
                  style={{width:100,height:120}}
                  src='https://www.hpe.com/etc/designs/hpeweb/logo.jpg'
              /> {/*link to hpe logo*/}
              {/*alignSelf and textAlign centers the text*/}
              <Heading level='3' size='small' color='#00b388' alignSelf='center' textAlign='center'>Predictive Maintenance - Analytics</Heading>
              <Image
                  style={{width:50,height:50}}
                  src='https://media.licdn.com/dms/image/C4D0BAQEZ2_r-IM1lRw/company-logo_200_200/0?e=2159024400&v=beta&t=cbDc9rSI649EBVMWOgbddgWmR4yItafGXzOL_t2TmdM'
              /> {/*link to dataiku image*/}
              <Box align='center'>
                <Box
                    background='dark-4'
                    pad='medium'
                    align='center'
                    justify='start'
                    ref={this.targetRef}
                >
                </Box>

                {/*Drop ;enu defined below*/}
                {this.targetRef.current && (

                    <Drop flex
                        align={{ top: 'bottom', left: 'left' }}
                        target={this.targetRef.current}
                    >
                      {/*pad is the space between box elements and the box border*/}
                      <Box pad='medium' flex gap='5%'>
                        <Heading level='5' textAlign='center'>DataIku Scenario</Heading>
                        <Text textAlign='center' size='9px'>From Date</Text>
                        {/*default value inside the textarea set zith defaultValue=*/}
                        {/* value = {this.state.enddate} updates value of text inside textarea*/}
                        {/* onChangeText={this.handleEndDateChange} actions performed when the text inside the textarea is modified*/}
                        <TextArea
                            defaultValue = 'dy/mm/year'
                            value = {this.state.enddate}
                            onChangeText={this.handleEndDateChange}
                        />
                        <Text textAlign='center' size='9px'>To Date</Text>
                        {/* value={this.state.startdate} updates value of text inside textarea*/}
                        {/*onChangeText={this.handleStartDateChange} actions performed when the text inside the textarea is modified*/}
                        <TextArea
                            defaultValue='dy/mm/year'
                            value={this.state.startdate}
                            onChangeText={this.handleStartDateChange}
                        />
                        <Text textAlign='center' size='9px'>Scenario Measure</Text>
                        {/*RadioButtons are below with label indicating the text that will be displayed on the buttons*/}
                        <RadioButton flex size='xsmall'
                                     label="volt"
                        />
                        <RadioButton flex size='xsmall'
                                     label="rotate"
                        />
                        <RadioButton flex size='xsmall'
                                     label="pressure"
                        />
                        <RadioButton flex size='xsmall'
                                     label="vibration"
                        />
                        {/* active={true} button can be pressed if active is true, if we change it false the button can't be pressed*/}
                        {/* onClick={() => alert('Clicked')} action performed when the button is clicked*/}
                        <Button flex
                            color='green'
                            active={true}
                            label='Clear Selection'
                            onClick={() => alert('Clicked')}
                        />
                        {/*onPress={this.handleSubmit} updates information that the button has been pressed with this statement*/}
                        {/* onClick={() => alert('Clicked')} action performed when the button is clicked*/}
                        <Button
                            color='green'
                            active={true}
                            label='Run Datalku Scenario'
                            onPress={this.handleSubmit}
                            onClick={() => alert('Clicked')}
                        />


                        <Heading level='5' textAlign='center'>Item selection</Heading>
                        <Text>1</Text>
                        <Text>2</Text>
                        <Text>3</Text>
                        <Text>4</Text>
                      </Box>
                    </Drop>
                )}
              </Box>

            </AppBar>


            <br></br><br></br><br></br>




            <Box direction='row' gap='5%' style={{width:'60%',height:'10%'}} margin={{left:'3%', bottom:'3%'}}>
              <Heading level='3' size="9px">Chart1 Measure</Heading>
              <Box gap='10px'>
                {/*toggle={true} allows checkbox to be changed zhen clicked on*/}
                <CheckBox
                    label='volt'
                    toggle={true}
                    onChange={() => {}}
                />
              </Box>
              <Box>
                <CheckBox
                    label='rotate'
                    toggle={true}
                    onChange={() => {}}
                />
              </Box>

              <Box gap='10px'>
                <CheckBox
                    label='pressure'
                    toggle={true}
                    onChange={() => {}}
                />
              </Box>

              <Box gap='10px'>
                <CheckBox
                    label='vibration'
                    toggle={true}
                    onChange={() => {}}
                />
              </Box>

            </Box>


            {/*first data chart defined below*/}
            <Box  direction='row' overflow={{ horizontal: 'hidden' }} gap='1%' style={{width:'65%',height:'300%'}}>
              {/*data defined below, horizontal labels are also defined*/}
              <LineChart
                  data={{
                    labels: ["01/01/2016","01/02/2016","01/03/2016","01/04/2016","01/05/2016","01/06/2016","01/07/2016","01/08/2016","01/09/2016","01/10/2016","01/11/2016","01/12/2016"],
                    datasets: [
                      {
                        label: "1",
                        data: [240,240,240,240,240,240,240,240,240,240,240,240],
                        fill: false,
                        color:'yellow',
                      },
                      {
                        label: "2",
                        data: [225,225,225,225,225,225,225,225,225,225,225,225],
                        fill: false,
                        color:'orange',
                      },
                      {
                        label: "3",
                        data: [125,125,125,125,125,125,125,125,125,125,125,125],
                        fill: false,
                        color:'orange',
                      },
                      {
                        label: "4",
                        data: [140,120,144,250,165,189,129,178,239,162,189,210,212],
                        fill: false,
                        color:'pink',
                      },
                      {
                        label: "5",
                        data: [210,171,190,120,140,193,237,137,162,179,167,231],
                        fill: false,
                        color:'magenta',
                      },
                      {
                        label: "6",
                        data: [237,137,162,179,167,231,210,171,190,120,140,193,118,232],
                        fill: false,
                        color:'blue',
                      },
                      {
                        label: "7",
                        data: [178,220,235,211,129,190,230,140,192,214,175,165,209],
                        fill: false,
                        color:'green',
                      },
                      {
                        label: "8",
                        data: [140,192,214,175,165,209,178,220,235,211,129,190,230],
                        fill: false,
                        color:'black',
                      }
                    ]
                  }}
              />
              <RadarChart
                  data={{
                    labels: ["January","February","March","April","May","June","July"],
                    datasets: [
                      {
                        label: "Dataset 1",
                        data: [94,94,97,92,96,91,99],
                        opacity: 0.2,
                      }
                    ]
                  }}
                  options={{
                    scale: {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  }}
              />


            </Box>
            {/*second data chart defined below*/}
            <Box direction='row' overflow={{ horizontal: 'hidden' }} gap='1%' style={{width:'65%',height:'300%'}}>
              <LineChart
                  data={{
                    labels: ["01/01/2016","01/02/2016","01/03/2016","01/04/2016","01/05/2016","01/06/2016","01/07/2016","01/08/2016","01/09/2016","01/10/2016","01/11/2016","01/12/2016"],
                    datasets: [
                      {
                        label: "1",
                        data: [240,240,240,240,240,240,240,240,240,240,240,240],
                        fill: false,
                        color:'yellow',
                      },
                      {
                        label: "2",
                        data: [225,225,225,225,225,225,225,225,225,225,225,225],
                        fill: false,
                        color:'orange',
                      },
                      {
                        label: "3",
                        data: [125,125,125,125,125,125,125,125,125,125,125,125],
                        fill: false,
                        color:'orange',
                      },
                      {
                        label: "4",
                        data: [140,120,144,250,165,189,129,178,239,162,189,210,212],
                        fill: false,
                        color:'red',
                      },
                      {
                        label: "5",
                        data: [210,171,190,120,140,193,237,137,162,179,167,231],
                        fill: false,
                        color:'cyan',
                      },
                      {
                        label: "6",
                        data: [237,137,162,179,167,231,210,171,190,120,140,193,118,232],
                        fill: false,
                        color:'blue',
                      },
                      {
                        label: "7",
                        data: [178,220,235,211,129,190,230,140,192,214,175,165,209],
                        fill: false,
                        color:'green',
                      },
                      {
                        label: "8",
                        data: [140,192,214,175,165,209,178,220,235,211,129,190,230],
                        fill: false,
                        color:'grey',
                      }
                    ]
                  }}
              />
            </Box>




            <Box Box direction='row' gap='5%' style={{width:'60%',height:'10%'}} margin={{left:'3%',bottom:'3%'}}>
              <Heading level='3' size="9px">Chart1 Measure</Heading>
              <Box gap='10px'>
                <CheckBox
                    label='volt'
                    toggle={true}
                    onChange={() => {}}
                />
              </Box>
              <Box>
                <CheckBox
                    label='rotate'
                    toggle={true}
                    onChange={() => {}}
                />
              </Box>
              <Box gap='10px'>
                <CheckBox
                    label='pressure'
                    toggle={true}
                    onChange={() => {}}
                />
              </Box>
              <Box gap='10px'>
                <CheckBox
                    label='vibration'
                    toggle={true}
                    onChange={() => {}}
                />
              </Box>
            </Box>
            {/*third data chart defined below*/}
            <Box direction='row' overflow={{ horizontal: 'hidden' }} style={{width:'65%',height:'300%'}}>
              <LineChart
                  data={{
                    labels: ["01/01/2016","01/02/2016","01/03/2016","01/04/2016","01/05/2016","01/06/2016","01/07/2016","01/08/2016","01/09/2016","01/10/2016","01/11/2016","01/12/2016"],
                    datasets: [
                      {
                        label: "1",
                        data: [240,240,240,240,240,240,240,240,240,240,240,240],
                        fill: false,
                        color:'yellow',
                      },
                      {
                        label: "2",
                        data: [225,225,225,225,225,225,225,225,225,225,225,225],
                        fill: false,
                        color:'orange',
                      },
                      {
                        label: "3",
                        data: [125,125,125,125,125,125,125,125,125,125,125,125],
                        fill: false,
                        color:'orange',
                      },
                      {
                        label: "4",
                        data: [140,120,144,250,165,189,129,178,239,162,189,210,212],
                        fill: false,
                        color:'red',
                      },
                      {
                        label: "5",
                        data: [210,171,190,120,140,193,237,137,162,179,167,231],
                        fill: false,
                        color:'cyan',
                      },
                      {
                        label: "6",
                        data: [237,137,162,179,167,231,210,171,190,120,140,193,118,232],
                        fill: false,
                        color:'blue',
                      },
                      {
                        label: "7",
                        data: [178,220,235,211,129,190,230,140,192,214,175,165,209],
                        fill: false,
                        color:'green',
                      },
                      {
                        label: "8",
                        data: [140,192,214,175,165,209,178,220,235,211,129,190,230],
                        fill: false,
                        color:'grey',
                      }
                    ]
                  }}
              />
            </Box>

            {/*fourth data chart defined below*/}
            <Box direction='row' overflow={{ horizontal: 'hidden' }} style={{width:'65%',height:'300%'}}>
              <LineChart
                  data={{
                    labels: ["01/01/2016","01/02/2016","01/03/2016","01/04/2016","01/05/2016","01/06/2016","01/07/2016","01/08/2016","01/09/2016","01/10/2016","01/11/2016","01/12/2016"],
                    datasets: [
                      {
                        label: "1",
                        data: [240,240,240,240,240,240,240,240,240,240,240,240],
                        fill: false,
                        color:'yellow',
                      },
                      {
                        label: "2",
                        data: [225,225,225,225,225,225,225,225,225,225,225,225],
                        fill: false,
                        color:'orange',
                      },
                      {
                        label: "3",
                        data: [125,125,125,125,125,125,125,125,125,125,125,125],
                        fill: false,
                        color:'orange',
                      },
                      {
                        label: "4",
                        data: [140,120,144,250,165,189,129,178,239,162,189,210,212],
                        fill: false,
                        color:'red',
                      },
                      {
                        label: "5",
                        data: [210,171,190,120,140,193,237,137,162,179,167,231],
                        fill: false,
                        color:'cyan',
                      },
                      {
                        label: "6",
                        data: [237,137,162,179,167,231,210,171,190,120,140,193,118,232],
                        fill: false,
                        color:'blue',
                      },
                      {
                        label: "7",
                        data: [178,220,235,211,129,190,230,140,192,214,175,165,209],
                        fill: false,
                        color:'green',
                      },
                      {
                        label: "8",
                        data: [140,192,214,175,165,209,178,220,235,211,129,190,230],
                        fill: false,
                        color:'grey',
                      }
                    ]
                  }}
              />

            </Box>
            <Box direction='row' overflow='visible' gap='10px' style={{width:900,height:450}}>

            </Box>
            <Box>

            </Box>
          </Box>


        </Grommet>
    );
  }
}

export default App;
