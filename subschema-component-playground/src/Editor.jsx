import React, {Component} from "react";
import PropTypes from "subschema-prop-types";
import AceEditor from "react-ace";
import "brace/theme/chrome";
import "brace/mode/javascript";

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
        useWorker: PropTypes.bool,
        errors: PropTypes.array,
        firstLineNumber: PropTypes.number,
        maxLines: PropTypes.number,
        highlightActiveLine: PropTypes.bool,
        useWrapMode: PropTypes.bool

    };
    static defaultProps = {
        theme: 'chrome',
        useWorker: true,
        firstLineNumber: 1,
        mode: 'javascript',
        lineNumbers: false,
        lineWrapping: true,
        smartIndent: false,
        matchBrackets: true,
        codeText: '',
        useWrapMode: true
    };
    handleLoad = (editor) => {
        editor.focus();
        editor.getSession().setUseWrapMode(this.props.useWrapMode);
        editor.setHighlightActiveLine(this.props.highlightActiveLine);
    };

    render() {
        return <AceEditor
            mode={this.props.mode}
            theme={this.props.theme}
            onChange={this.props.onChange}
            name='editor'
            readOnly={this.props.readOnly}
            lineNumbers={true}
            value={this.props.codeText.trim()}
            editorProps={{$blockScrolling: true}}
            maxLines={this.props.maxLines}
            width="100%"
            setOptions={{
                firstLineNumber: this.props.firstLineNumber,
                highlightActiveLine: this.props.highlightActiveLine,
                useWorker: this.props.useWorker
            }}
            onLoad={this.handleLoad}
        />

    }
}
