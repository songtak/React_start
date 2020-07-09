import React,{Component} from 'react';

interface HelloProps {
    name: string
}
interface HelloState {
    name : string
}

class HelloName extends Component<HelloProps, HelloState> {
    public state = {name: ""}
    props: any

    constructor(props: HelloProps) {
        super(props);
        this.state.name = props.name
    }
    public handleClick = () => {
        this.setState({
            name: "안녕 " + this.state.name
        })
    }

    public render() {
        return <div>
            <h1>{this.state.name}</h1>
            <button onClick={this.handleClick}>클릭</button>
        </div>
    }
}
export default HelloName
