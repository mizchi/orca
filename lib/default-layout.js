// Generated by CoffeeScript 1.9.1
(function() {
  var T;

  T = React.PropTypes;

  module.exports = React.createClass({
    childContextTypes: {
      shared: T.any
    },
    getChildContext: function() {
      return {
        shared: this.state.activeContext
      };
    },
    getInitialState: function() {
      return {
        activeContext: null,
        templateProps: {}
      };
    },
    render: function() {
      var ref;
      if (this.state.activeContext != null) {
        this.state.templateProps.ref = 'root';
        return React.createFactory((ref = this.state.activeContext) != null ? ref.constructor.component : void 0)(this.state.templateProps);
      } else {
        return React.createElement('div');
      }
    }
  });

}).call(this);