import React, {Component} from "react";
import PropTypes from "subschema-prop-types";
import "./Editor.css";
import AceEditor from "react-ace";
import "brace/theme/chrome";
import "brace/mode/jsx";
export default class Editor extends Component {

    static propTypes = {
        theme: PropTypes.string,
        readOnly: PropTypes.bool,
        external: PropTypes.bool,
        codeText: PropTypes.string,
        onChange: PropTypes.func,
        style: PropTypes.object,
        className: PropTypes.string,
        mode: PropTypes.string,
        lineNumbers: PropTypes.bool,
        lineWrapping: PropTypes.bool,
        smartIndent: PropTypes.bool,
        matchBrackets: PropTypes.bool,
        errors: PropTypes.array,
        firstLineNumber: PropTypes.number,
        maxLines: PropTypes.number

    };
    static defaultProps = {
        firstLineNumber: 1,
        mode: "jsx",
        lineNumbers: false,
        lineWrapping: true,
        smartIndent: false,
        matchBrackets: true
    };



    _handleChange = (value) => {
        if (!this.props.readOnly && this.props.onChange) {
            this.props.onChange(value);
        }
    };

    render() {
        return <AceEditor
            mode={this.props.mode}
            theme="chrome"
            onChange={this._handleChange}
            name="editor"
            readOnly={this.props.readOnly}
            lineNumbers={true}
            value={this.props.codeText}
            editorProps={{$blockScrolling: true}}
            maxLines={this.props.maxLines}
            setOptions={{firstLineNumber: this.props.firstLineNumber}}
        />

    }
}
