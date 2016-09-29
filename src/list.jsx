var React = require('react');

module.exports=React.createClass({
    render: function(){
        
    return  <div className="col-md-6 main-data-div">
        Date : {this.props.data.dt_txt}
        <div className="temp"><span className="temp_max">max:{this.tempConverter(this.props.data.main.temp_max)}°C</span>
            <span className="temp_min">min:{this.tempConverter(this.props.data.main.temp_min)}°C</span></div>
        <div className="weather-txt">{this.props.data.weather[0].description}</div>
        <div><img src={'http://openweathermap.org/img/w/'+this.props.data.weather[0].icon+'.png '} alt=""  width="70" height="70"/></div>
        <h1 className="tempature"><span id="currentTemperature"></span><span>{this.tempConverter(this.props.data.main.temp)}°C</span></h1>
        </div>
},

    tempConverter : function(data){
       var temp= data - 273.15;
        temp = temp.toFixed();
        console.log(temp)
        return temp;
    }

})
