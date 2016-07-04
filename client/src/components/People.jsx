var React = require('react');
var PropTypes = React.PropTypes;

var People = React.createClass({

  render: function() {
    return (
      // return the name of the person as button
      <div>
        <button>{this.person.name}</button>
      </div>
    );
  }

});

module.exports = People;
