
class App extends React.Component {
	render() {
		return {
			<div>
				Hello {this.props.name}, I am {2+2} years old
			</div>
		}
	}
}

ReactDOM.render (
	<App name="React" />,
	mountNode
)

class App extends React.Component {
	render() {
		return React.createElement(
			“div”，
			null,
			"Hello",
			this.props.name,
			", I am",
			2 + 2,
			"years old"
		)
	}
}

ReactDOM.render(React.createElement(App, { name: "React"}), mountNode)


function Comp (props) {
	return <h2>hi {props.name}</h2>
}

ReactDOM.render(
	<div id="demo">
		<span>hi</span>
		<Comp name="kaikeba"/>
	</div>
)






