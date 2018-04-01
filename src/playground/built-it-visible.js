class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide Details' : "Show Details"}
                </button>
                {
                    this.state.visibility && (
                        <p>Here are some details you can see now</p>
                    )
                }
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'))

// let app = {
//     titleText: "Visibility Toggle",
//     hiddenText: "Hey there, this is an hidden message",
//     messageHidden: true,
//     buttonText: "Show Details"
// }

// const appRoot = document.getElementById("app")

// const toggleText = () => {
//     if (app.messageHidden) {
//         app.messageHidden = false
//         app.buttonText = "Hide Details"
//         render()
//     } else {
//         app.messageHidden = true
//         app.buttonText = "Show Details"
//         render()
//     }
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.titleText}</h1>
//             <button onClick={toggleText}>{app.buttonText}</button>
//             <p hidden={app.messageHidden}>{app.hiddenText}</p>
//         </div>
//     )
//     ReactDOM.render(template, appRoot)
// }

// render()
