var React = require('react');
var ReactDOM = require('react-dom');
var WeatherInfo=require('./WeatherInfo');

var Main=React.createClass({
    getInitialState:function(){
        return {
            data:[]
        }
    },
    componentWillMount: function() {
        fetch("http://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=json&appid=1d289256a2048d949237aaaf23f82861")
            .then(function(response) {
            return response.json()
        }).then(function(json) {
            console.log('parsed json', json)
            this.setState({
                data: json,
            })
        }.bind(this)).catch(function(ex) {
            console.log('parsing failed', ex)
        }.bind(this))
    },
    render : function(){
        console.log(this.state.data)
        return <div>{this.renderData()}</div>
    },
        renderData : function(){
            if(this.state.data && Object.keys(this.state.data).length){
                return <div>
                    <WeatherInfo weatherData={this.state.data}/>
                </div>


            }else {
                return <h4>loading...</h4>
            }
        }
    
})


            
var element = React.createElement(Main, {});
ReactDOM.render(element, document.querySelector('.container'));
