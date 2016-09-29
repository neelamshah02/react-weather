var React = require('react');

module.exports=React.createClass({
    render: function(){
        console.log(this.props.data.main.img_src)
    
    return  <div className="col-md-2">
        <div className="date">{this.props.data.dt_txt}</div>
        <div className="weather-txt">{this.props.data.main.weather}</div>
        <div><img src={this.props.data.main.img_src} alt=""  width="70" height="70"/></div>
        <h1 className="temp"><span id="currentTemperature"></span><span>{this.props.data.main.temp}°C</span></h1>
        </div>
},

})
