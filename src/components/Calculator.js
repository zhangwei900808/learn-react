import React,{Component} from 'react'

const scaleNames = {
    c:'Celsius',
    f:'Fahrenheit'
};

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function BoilingVerdict(props){
    if(props.celsius >= 100){
        return <p>The water would boild.</p>;
    }
    return <p>The water would not boil.</p>;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class TemperatureInput extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        // this.state = {temperature:''};
    }

    handleChange(e){
        // this.setState({temperature:e.target.value});
        this.props.onTemperatureChange(e.target.value);
    }

    render(){
        // const temperature = this.state.temperature;
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
                <fieldset>
                    <legend>Enter temperature in {scaleNames[scale]}:}</legend>
                    <input type="text" value={temperature} onChange={this.handleChange}/>
                </fieldset>
            );
    }
}


export default class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature:'',scale:'c'};
    }
    handleCelsiusChange(temperature){
        this.setState({scale:'c',temperature});
    }
    handleFahrenheitChange(temperature){
        this.setState({scale:'f',temperature});
    }
    render(){
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale ==='f'?tryConvert(temperature,toCelsius):temperature;
        const fahrenheit = scale === 'c' ?tryConvert(temperature,toFahrenheit):temperature;
        return (
                <div>
                    <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange}></TemperatureInput>
                    <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}></TemperatureInput>
                    <BoilingVerdict celsius={parseFloat(celsius)} />
                </div>
            );
    }
}