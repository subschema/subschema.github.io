import React, {Component} from "react";
import PropTypes from "subschema-prop-types";

export default class Example extends Component {

    static contextTypes = PropTypes.contextTypes;

    static propTypes = {
        conf: PropTypes.any,
        doc: PropTypes.string
    };

    render() {
        const Doc = this.context.loader.loadDoc(this.props.doc);
        return <Doc/>
    }
}
