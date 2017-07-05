import React, {Component} from "react";
import PropTypes from "subschema-prop-types";
import camelCase from "lodash/camelCase";
import capitalize from "lodash/capitalize";
import {DownloadButton} from "subschema-component-playground";
import {loader} from './PropTypes';

export default class UpdateValue extends Component {
    static contextTypes = {
        loader: PropTypes.loader
    };
    static propTypes = {
        filename: PropTypes.value,
        description: PropTypes.value,
        example:loader

    };

    static defaultProps = {
        filename: "name",
        description: "description",
        example: 'Basic'
    };

    name(name) {
        name = name || 'sample';
        this.setState({
            jsName: camelCase(filename),
            filename: `${filename}`,
            name: name, title: capitalize(filename.replace('-', ' '))
        });
    }

    description(description) {
        this.setState({
            description
        });
    }

    render() {
        let {filename, description, example} = this.props;
        filename = filename || 'simple';

        const data = {
            jsName: camelCase(filename),
            name: filename,
            title: capitalize(filename.replace('-', ' ')),
            sample:example
        };

        return (<div className="btn-group">
            <DownloadButton filename={filename} data={data} type='project' key="project"/>
            <DownloadButton filename={filename} data={data} type='page' key="page" buttonTxtPage="Preview"/>
        </div>);
    }
}
