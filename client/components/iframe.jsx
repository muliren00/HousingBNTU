import React, { Component, PropTypes } from 'react';

class Iframe extends Component {

    // static propTypes: Object = {
    //     src: PropTypes.string.isRequired,
    //     onLoad: PropTypes.func,
    // }

    componentDidMount () {
        let iframe = ReactDOM.findDOMNode(this.refs.iframe);
        iframe.addEventListener('load', this.props.onLoad);
    }

    render () {
        const iframeStyle = {
            width: '100%',
            height: '100%',
            border: '0',
            position: 'absolute',
        }

        return (
            <iframe
                ref="iframe"
                {...this.props.img}
                frameBorder={'0'}
                width={'100%'}
                height={'100%'}
                style={iframeStyle}
            />
        )
    }

}

export default Iframe