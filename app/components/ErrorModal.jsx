var React = require('react');

var ErrorModal = React.createClass({
    getDefaultProps: function() {
        return {
            title: 'Error',
            buttonText: 'Okay'
        }
    },
    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired,
        buttonText: React.PropTypes.string
    },
    componentDidMount : function() {
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    render: function(){
        var {title, message, buttonText} = this.props;

        return (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button hollow" data-close="">{buttonText}</button>
                </p>
            </div>
        );
    }
});
module.exports = ErrorModal;
