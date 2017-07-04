import React, {Component} from "react";
import {render} from "react-dom";
import docs from "subschema.wiki";

function renderDoc(key) {
    const Doc = docs[key];
    try {
        return <div id={key} key={`key-${key}`}><Doc/></div>;
    } catch (e) {
        console.trace(e);
        return <div key={`error-${key}`}>Error ${key}: {e.message}</div>

    }
}
function renderLink(key) {
    return <li key={`a-${key}`}><a href={`#${key}`}>{key}</a></li>
}
class App extends Component {

    render() {
        return <div>
            <ul>
                {Object.keys(docs).map(renderLink)}

            </ul>
            <div>
                {Object.keys(docs).map(renderDoc)}
            </div>

        </div>
    }
}

render(<App/>, document.getElementById('content'));