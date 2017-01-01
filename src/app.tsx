import React = require('react');

interface IAppProps {
    name: string;
};

interface IAppState {
    age: number;
};

class App extends React.Component<IAppProps, IAppState> {
    constructor() {
        super();
    }

    public render(): JSX.Element {
        return (<div>Hello{this.props.name}
        </div>);
    }
}

export default App;
