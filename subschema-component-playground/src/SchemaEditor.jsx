import React, {PureComponent} from "react";
import {Editor} from "subschema-component-playground";
import PropTypes from "subschema-prop-types";
import AceEditor from "react-ace";
import "brace/theme/chrome";
import "brace/mode/json";


const parseJson = (v, cb = console.trace) => {
    if (v == null) {
        return v;
    }
    if (typeof v === 'string') {
        try {
            return JSON.parse(v);
        } catch (e) {
            cb && cb(e);
            return;
        }
    }
    return v;
};

export default class SchemaEditor extends PureComponent {
    static propTypes = {
        onChange: PropTypes.valueEvent,
        value: PropTypes.value
    };
    static defaultProps = {
        mode: "application/json"
    };

    state = {
        codeText: JSON.stringify(this.props.value, null, 2)
    };

    componentWillReceiveProps(props) {
        if (props.value != this.props.value) {
            this.setState({codeText: JSON.stringify(props.value, null, 2)});
        }
    }

    handleChange = (codeText) => {
        clearTimeout(this._to);
        this.setState({codeText});
        const schema = parseJson(codeText, this._handleError);

        if (schema) {
            this.setState({errors: null});
            this.props.onChange(schema);
        }
    };
    _handleError = (e) => {
        const pos = parseInt((e + '').replace(/.*at position (\d*)$/, '$1'),
            10);
        const message = e.message.replace(/at position \d*$/, '');
        if (pos) {
            const {codeText} = this.state;
            let line = 2;
            let offset = 0;

            for (let i = 0, l = codeText.length; i < l; i++) {
                if (codeText[i] === '\n') {
                    line++;
                    offset = 0;
                } else if (i === pos) {
                    break;
                } else {
                    offset++;
                }
            }
            this.setState({errors: [{message, loc: {line, offset}}]});
        } else {
            console.trace(e);
        }
    };

    render() {
        return <AceEditor
            mode="json"
            theme="chrome"
            name="code"
            width="100%"
            maxLines={50}
            ref="ace"
            fontSize={12}
            value={this.state.codeText}
            editorProps={{$blockScrolling: Infinity}}
            onChange={this.handleChange}
            onLoad={(editor) => {
                editor.focus();
                editor.getSession().setUseWrapMode(true);
            }}
        />
    }
}
