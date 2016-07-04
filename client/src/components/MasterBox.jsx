var React = require('react');
var PropTypes = React.PropTypes;
var QuestionBox = require('./QuestionBox.jsx');
var People = require('./People.jsx');

var MasterBox = React.createClass({

  render: function() {

    var displayBox = null;
    // if(this.state.display){
    //   displayBox = <QuizPeople people={this.state.display}/>
    // }

    return (
      <div id="body">
        <h1>Guess Who</h1>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
        </select>
      </div>
    );
  }

});

module.exports = MasterBox;
