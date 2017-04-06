"use strict";

/*
 * Let it snow!
 */

document.getElementById("Submit").style.display="none";
    
/**
 * Countdown Component
 */
var Countdown = React.createClass({
  displayName: "Countdown",

  render: function render() {
    return React.createElement(
      "div",
      { className: "countdown-clock" },
      React.createElement(
        "ul",
        { id: "countdown" },
        React.createElement(
          "li",
          { id: "days" },
          React.createElement(
            "div",
            { className: "number" },
            "00"
          ),
          React.createElement(
            "div",
            { className: "label" },
            "Days"
          ),
          React.createElement(
            "svg",
            { width: "100", height: "100", className: "pie-plate" },
            React.createElement("circle", { r: "50", cx: "50", cy: "50", className: "pie" })
          )
        ),
        React.createElement(
          "li",
          { id: "hours" },
          React.createElement(
            "div",
            { className: "number" },
            "00"
          ),
          React.createElement(
            "div",
            { className: "label" },
            "Hours"
          ),
          React.createElement(
            "svg",
            { width: "100", height: "100", className: "pie-plate" },
            React.createElement("circle", { r: "50", cx: "50", cy: "50", className: "pie" })
          )
        ),
        React.createElement(
          "li",
          { id: "minutes" },
          React.createElement(
            "div",
            { className: "number" },
            "00"
          ),
          React.createElement(
            "div",
            { className: "label" },
            "Minutes"
          ),
          React.createElement(
            "svg",
            { width: "100", height: "100", className: "pie-plate" },
            React.createElement("circle", { r: "50", cx: "50", cy: "50", className: "pie", "stroke-dasharray": "10" })
          )
        ),
        React.createElement(
          "li",
          { id: "seconds" },
          React.createElement(
            "div",
            { className: "number" },
            "00"
          ),
          React.createElement(
            "div",
            { className: "label" },
            "Seconds"
          ),
          React.createElement(
            "svg",
            { width: "100", height: "100", className: "pie-plate" },
            React.createElement("circle", { r: "50", cx: "50", cy: "50", className: "pie" })
          )
        )
      ),

    );
  }
});
ReactDOM.render(React.createElement(Countdown, null), document.querySelector('#clock'));

/**
 * Date Countdown timer
 * @link http://codepen.io/chrisjdesigner/pen/dMbmoE
 */
var thisYear = new Date();
var thisChristmas = thisYear.getFullYear() + "/04/08 00:00:00";
var christmas = new Date(thisChristmas),
    days,
    hours,
    mins,
    secs;

/* Display the current Year in the subheading */
$('.this-year').text(thisYear.getFullYear());

$(function () {
  // Calculate time to Christmas
  timeToXmas();
  // Transition from 0
  numberTrans('#days .number', days, 1000, 'easeOutQuad');
  numberTrans('#hours .number', hours, 1000, 'easeOutQuad');
  numberTrans('#minutes .number', mins, 1000, 'easeOutQuad');
  numberTrans('#seconds .number', secs, 1000, 'easeOutQuad');
  // Begin countdown
  setTimeout(countdownTimer, 1001);
});

// function to calc Time to Christmas
function timeToXmas() {
    
  var today = new Date();
  // diff between dates
  var diff = (today - christmas) / 1000;
    
  var diff = Math.abs(Math.floor(diff));

  // Day to target
  days = Math.floor(diff / (24 * 60 * 60));
  secs = diff - days * 24 * 60 * 60;
  // Hours
  hours = Math.floor(secs / (60 * 60));
  secs = secs - hours * 60 * 60;
  // Minutes
  mins = Math.floor(secs / 60);
  secs = secs - mins * 60;
    
   
    

}

// function to display the countdown Timer
function countdownTimer() {
    

  var secResult1 = 315 * (secs / 60) + ' ' + 360;


  timeToXmas();
  // display in front-end clock
  // Seems like multiplying by 360(degrees) gives an inaccurate measure - 315 is the proper number to be an even division of the pie graph clock
  $('#days .number').text(days);
  var dayResult = 315 * (days / 25) + ' ' + 360;
  $('#days .pie').css({ "stroke-dasharray": dayResult });
  $('#hours .number').text(hours);
  var hrResult = 315 * (hours / 24) + ' ' + 360;
  $('#hours .pie').css({ "stroke-dasharray": hrResult });
  $('#minutes .number').text(mins);
  var minResult = 315 * (mins / 60) + ' ' + 360;
  $('#minutes .pie').css({ "stroke-dasharray": minResult });
  $('#seconds .number').text(secs);
  var secResult = 315 * (secs / 60) + ' ' + 360;
  $('#seconds .pie').css({ "stroke-dasharray": secResult });
   var g = parseFloat(secResult)/60;
    var e=parseFloat(secResult1)/60;
  // repeat every second
  setTimeout(countdownTimer, 1000);
    var today = new Date();
  // diff between dates
  var diff = (today - christmas) / 1000;
   //alert(diff.toString());    
    if( diff >=0.0 )
        {
            document.getElementById("Submit").style.display="block";
            document.getElementById('text1').innerHTML = 'The time since this gift was unlocked :V :)';

            

        }

}




// Transition numbers
function numberTrans(id, endpt, transDur, transEase) {
  $({ numberCount: $(id).text() }).animate({ numberCount: endpt }, {
    duration: transDur,
    easing: transEase,
    step: function step() {
      $(id).text(Math.floor(this.numberCount));
    },
    complete: function complete() {
      $(id).text(this.numberCount);
    }
  });
};