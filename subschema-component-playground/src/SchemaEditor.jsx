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

const toString = (value) => {
    if (value == null) return '';
    if (typeof value === 'string') return value;
    return JSON.stringify(value, null, 2);
}
export default class SchemaEditor extends PureComponent {
    static propTypes = {
        onChange: PropTypes.valueEvent,
        value: PropTypes.value
    };
    static defaultProps = {
        mode: 'application/json'
    };

    render() {
        return <AceEditor
            mode='json'
            theme='chrome'
            name='code'
            width='100%'
            maxLines={50}
            ref='ace'
            fontSize={12}
            value={toString(this.props.value)}
            editorProps={{$blockScrolling: Infinity}}
            onChange={this.handleChange}
            onLoad={(editor) => {
                editor.focus();
                editor.getSession().setUseWrapMode(true);
            }}
        />
    }
}
