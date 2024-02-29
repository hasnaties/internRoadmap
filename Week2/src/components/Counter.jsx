import { Component } from "react";

class Counter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSub = this.handleSub.bind(this);
  }


  handleAdd() {
    this.setState({ count: this.state.count + 1 });
  }

  handleSub() {
    this.setState({ count: this.state.count - 1 });
  }

  componentDidMount() {
    console.log('Component has mounted.');
  }
  componentDidUpdate() {
    console.log('Component re-renders.');
  }
  componentWillUnmount() {
    console.log('Component will unmount.');
  }

  render() {

    return (
      <div>
        <h1>Counter <em>{this.state.count}</em></h1>
        <div>
          <button onClick={this.handleAdd}>+1</button>
          <button disabled={this.state.count < 1} onClick={this.handleSub}>-1</button>
        </div>
      </div>
    );
  }

}

export default Counter;