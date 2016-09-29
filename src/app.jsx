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
            if(this.state.data && this.state.data.length){
                return <div>
                    <WeatherInfo weatherData={this.state.data}/>
                </div>


            }else {
                return <h4>loading...</h4>
            }
        }
    
})

var options={
    "city":{"id":1851632,"name":"London",
    "coord":{"lon":138.933334,"lat":34.966671},
    "country":"JP",
        "cod":"200",
            "message":0.0045,
                "cnt":38,
                    "list":[{
                        "dt":1406106000,
                        "main":{
                            "temp":23,
                            "temp_min":298.77,
                            "temp_max":298.774,
                            "pressure":1005.93,
                            "sea_level":1018.18,
                            "grnd_level":1005.93,
                            "humidity":87,
                            "weather":"Cloudy",
                            "img_src":"./img/cloudy.jpg",
                            "temp_kf":0.26},
                        "weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],
                        "clouds":{"all":88},
                        "wind":{"speed":5.71,"deg":229.501},
                        "sys":{"pod":"d"},
                        "dt_txt":"1 jul 2016"},
                            {
                                "dt":7875765,
                                "main":{
                                    "temp":29,
                                    "temp_min":298.77,
                                    "temp_max":298.774,
                                    "pressure":1005.93,
                                    "sea_level":1018.18,
                                    "grnd_level":1005.93,
                                    "humidity":87,
                                    "temp_kf":0.26,
                                    "img_src":"./img/sunny.jpg",
                                    "weather":"Sunny"},
                               
                                "weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],
                                "clouds":{"all":88},
                                "wind":{"speed":5.71,"deg":229.501},
                                "sys":{"pod":"d"},
                                "dt_txt":"1 jul 2016"},
                            {
                                "dt":7887657,
                                "main":{
                                    "temp":27,
                                    "temp_min":298.77,
                                    "temp_max":298.774,
                                    "pressure":1005.93,
                                    "sea_level":1018.18,
                                    "grnd_level":1005.93,
                                    "humidity":87,
                                    "weather":"Rainy",
                                    "img_src":"./img/rainy.jpg",
                                    "temp_kf":0.26},
                                "weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],
                                "clouds":{"all":88},
                                "wind":{"speed":5.71,"deg":229.501},
                                "sys":{"pod":"d"},
                                "dt_txt":"3 jul 2016"},
                            {
                                "dt":78675765,
                                "main":{
                                    "temp":21,
                                    "temp_min":298.77,
                                    "temp_max":298.774,
                                    "pressure":1005.93,
                                    "sea_level":1018.18,
                                    "grnd_level":1005.93,
                                    "humidity":87,
                                    "weather":"Cloudy",
                                    "img_src":"./img/cloudy.jpg",
                                    "temp_kf":0.26},
                                "weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],
                                "clouds":{"all":88},
                                "wind":{"speed":5.71,"deg":229.501},
                                "sys":{"pod":"d"},
                                "dt_txt":"4 jul 2016"},
                            {
                                "dt":6666,
                                "main":{
                                    "temp":27,
                                    "temp_min":298.77,
                                    "temp_max":298.774,
                                    "pressure":1005.93,
                                    "sea_level":1018.18,
                                    "grnd_level":1005.93,
                                    "humidity":87,
                                    "weather":"Rainy",
                                    "img_src":"./img/rainy.jpg",
                                    "temp_kf":0.26},
                                "weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],
                                "clouds":{"all":88},
                                "wind":{"speed":5.71,"deg":229.501},
                                "sys":{"pod":"d"},
                                "dt_txt":"3 jul 2016"},
                           ]
           }


}
            
var element = React.createElement(Main, {});
ReactDOM.render(element, document.querySelector('.container'));
