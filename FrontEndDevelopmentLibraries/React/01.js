// 01
// Create a Simple JSX Element
// const JSX = <h1>Hello JSX!</h1>

// 02
// Create a Complex JSX Element
// const JSX = <div>
//     {/* this is a comment */}
//     <h1>React</h1>
//     <p>about react</p>
//     <ul>
//         <li>js</li>
//         <li>jsx</li>
//         <li>css</li>
//     </ul>
// </div>

// 03
// Add Comments in JSX
// const JSX = (
//     <div>
//         <h1>Hello World</h1>
//         <p>Lets render this to the DOM</p>
//     </div>
// );
// // Change code below this line
// ReactDOM.render( JSX, document.getElementById( 'challenge-node' ) )


// 04
// Render HTML Elements to the DOM
// const JSX = (
//     <div className="myDiv">
//         <h1>Add a class to this div</h1>
//     </div>
// );


// 05
// Define an HTML Class in JSX
// const JSX = (
//     <div>
//         <h2>Welcome to React!</h2>
//         <br />
//         <p>Be sure to close all tags!</p>
//         <hr />
//     </div>
// );


// 06
// Learn About Self-Closing JSX Tags
// const MyComponent = function () {
//     // Change code below this line
//     return (
//         <div>
//             this is from MyComponent
//         </div>
//     )
//     // Change code above this line
// }


// 07
// Create a Stateless Functional Component
// class MyComponent extends React.Component {
//     constructor( props ) {
//         super( props );
//     }
//     render () {
//         // Change code below this line
//         return (
//             <div>
//                 <h1>Hello React!</h1>
//             </div>
//         )
//         // Change code above this line
//     }
// };


// 08
// Create a React Component
// const ChildComponent = () => {
//     return (
//         <div>
//             <p>I am the child</p>
//         </div>
//     );
// };

// class ParentComponent extends React.Component {
//     constructor( props ) {
//         super( props );
//     }
//     render () {
//         return (
//             <div>
//                 <h1>I am the parent</h1>
//                 { /* Change code below this line */}
//                 <ChildComponent />
//                 { /* Change code above this line */}
//             </div>
//         );
//     }
// };


// 09
// Create a Component with Composition
// const TypesOfFruit = () => {
//     return (
//         <div>
//             <h2>Fruits:</h2>
//             <ul>
//                 <li>Apples</li>
//                 <li>Blueberries</li>
//                 <li>Strawberries</li>
//                 <li>Bananas</li>
//             </ul>
//         </div>
//     );
// };

// const Fruits = () => {
//     return (
//         <div>
//             { /* Change code below this line */}
//             <TypesOfFruit />
//             { /* Change code above this line */}
//         </div>
//     );
// };

// class TypesOfFood extends React.Component {
//     constructor( props ) {
//         super( props );
//     }

//     render () {
//         return (
//             <div>
//                 <h1>Types of Food:</h1>
//                 { /* Change code below this line */}
//                 <Fruits />
//                 { /* Change code above this line */}
//             </div>
//         );
//     }
// };


// 10
// Use React to Render Nested Components
// class Fruits extends React.Component {
//     constructor( props ) {
//         super( props );
//     }
//     render () {
//         return (
//             <div>
//                 <h2>Fruits:</h2>
//                 { /* Change code below this line */}
//                 <NonCitrus />
//                 <Citrus />
//                 { /* Change code above this line */}
//             </div>
//         );
//     }
// };

// class TypesOfFood extends React.Component {
//     constructor( props ) {
//         super( props );
//     }
//     render () {
//         return (
//             <div>
//                 <h1>Types of Food:</h1>
//                 { /* Change code below this line */}
//                 <Fruits/>
//                 { /* Change code above this line */}
//                 <Vegetables />
//             </div>
//         );
//     }
// };


// 11
// Compose React Components
// class TypesOfFood extends React.Component {
//     constructor( props ) {
//         super( props );
//     }
//     render () {
//         return (
//             <div>
//                 <h1>Types of Food:</h1>
//                 {/* Change code below this line */}
//                 <Fruits />
//                 <Vegetables />
//                 {/* Change code above this line */}
//             </div>
//         );
//     }
// };

// 12
// Render a Class Component to the DOM
// // Change code below this line
// ReactDOM.render( <TypesOfFood />, document.getElementById( 'challenge-node' ) )

// 13
// Write a React Component from Scratch
// Change code below this line
// class MyComponent extends React.Component {
//     constructor( props ) {
//         super( props )
//     }
//     render () {
//         return (
//             <div>
//                 <h1>My First React Component!</h1>
//             </div>
//         )
//     }
// }

// ReactDOM.render( <MyComponent />, document.getElementById( 'challenge-node' ) )



// Pass Props use defaultProps use propTypes
class CampSite extends React.Component {
    constructor( props ) {
        super( props );
    }
    render () {
        return (
            <div>
                <Camper />
            </div>
        );
    }
};
// Change code below this line
function Camper ( props ) {
    return (
        <div>
            <p>
                {props.name}
            </p>
        </div>
    )
}
Camper.defaultProps = {
    name: 'CamperBot'
}
Camper.propTypes = {
    name: PropTypes.string.isRequired
}


// Create a Stateful Component
class StatefulComponent extends React.Component {
    constructor( props ) {
        super( props );
        // Only change code below this line
        this.state = {
            firstName: 'Aws'
        }
        // Only change code above this line
    }
    render () {
        return (
            <div>
                <h1>{this.state.firstName}</h1>
            </div>
        );
    }
};

// Render State in the User Interface
class MyComponent extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            name: 'freeCodeCamp'
        }
    }
    render () {
        return (
            <div>
                { /* Change code below this line */}
                <h1>
                    {this.state.name}
                </h1>
                { /* Change code above this line */}
            </div>
        );
    }
};


// Render State in the User Interface Another Way
class MyComponent extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            name: 'freeCodeCamp'
        }
    }
    render () {
        // Change code below this line
        const name = this.state.name
        // Change code above this line
        return (
            <div>
                { /* Change code below this line */}
                <h1>
                    {name}
                </h1>
                { /* Change code above this line */}
            </div>
        );
    }
};


// Set State with this.setState
class MyComponent extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            name: 'Initial State'
        };
        this.handleClick = this.handleClick.bind( this );
    }
    handleClick () {
        // Change code below this line
        this.setState( {
            name: 'React Rocks!'
        } )
        // Change code above this line
    }
    render () {
        return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
                <h1>{this.state.name}</h1>
            </div>
        );
    }
};



// Bind 'this' to a Class Method
class MyComponent extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            text: "Hello"
        };
        // Change code below this line
        this.handleClick = this.handleClick.bind( this )
        // Change code above this line
    }
    handleClick () {
        this.setState( {
            text: "You clicked!"
        } );
    }
    render () {
        return (
            <div>
                { /* Change code below this line */}
                <button onClick={this.handleClick}>Click Me</button>
                { /* Change code above this line */}
                <h1>{this.state.text}</h1>
            </div>
        );
    }
};



// Use State to Toggle an Element
class MyComponent extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            visibility: false
        };
        // Change code below this line
        this.toggleVisibility = this.toggleVisibility.bind( this )
        // Change code above this line
    }
    // Change code below this line
    toggleVisibility () {
        this.setState( ( state ) => ( {
            visibility: !state.visibility
        } ) )
    }
    // Change code above this line
    render () {
        if ( this.state.visibility ) {
            return (
                <div>
                    <button onClick={this.toggleVisibility}>Click Me</button>
                    <h1>Now you see me!</h1>
                </div>
            );
        } else {
            return (
                <div>
                    <button onClick={this.toggleVisibility}>Click Me</button>
                </div>
            );
        }
    }
}


// Write a Simple Counter
class Counter extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            count: 0
        };
        // Change code below this line
        this.increment = this.increment.bind( this )
        this.decrement = this.decrement.bind( this )
        this.reset = this.reset.bind( this )
        // Change code above this line
    }
    // Change code below this line
    increment () {
        this.setState( ( state ) => ( { count: state.count + 1 } ) )
    }
    decrement () {
        this.setState( state => ( { count: state.count - 1 } ) )
    }
    reset () {
        this.setState( state => ( { count: 0 } ) )
    }
    // Change code above this line
    render () {
        return (
            <div>
                <button className='inc' onClick={this.increment}>Increment!</button>
                <button className='dec' onClick={this.decrement}>Decrement!</button>
                <button className='reset' onClick={this.reset}>Reset</button>
                <h1>Current Count: {this.state.count}</h1>
            </div>
        );
    }
};


// Create a Controlled Input
class ControlledInput extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            input: ''
        };
        // Change code below this line
        this.handleChange = this.handleChange.bind( this )
        // Change code above this line
    }
    // Change code below this line
    handleChange ( event ) {
        this.setState( { input: event.target.value } )
    }
    // Change code above this line
    render () {
        return (
            <div>
                { /* Change code below this line */}
                <input value={this.state.input} onChange={this.handleChange} />
                { /* Change code above this line */}
                <h4>Controlled Input:</h4>
                <p>{this.state.input}</p>
            </div>
        );
    }
};


// Create a Controlled Form
class MyForm extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            input: '',
            submit: ''
        };
        this.handleChange = this.handleChange.bind( this );
        this.handleSubmit = this.handleSubmit.bind( this );
    }
    handleChange ( event ) {
        this.setState( {
            input: event.target.value
        } );
    }
    handleSubmit ( event ) {
        // Change code below this line
        event.preventDefault()
        this.setState( state => ( { submit: state.input } ) )
        // Change code above this line
    }
    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* Change code below this line */}
                    <input value={this.state.input} onChange={this.handleChange} />
                    {/* Change code above this line */}
                    <button type='submit'>Submit!</button>
                </form>
                {/* Change code below this line */}
                <h1>{this.state.submit}</h1>
                {/* Change code above this line */}
            </div>
        );
    }
}



// Pass State as Props to Child Components
class MyApp extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            name: 'CamperBot'
        }
    }
    render () {
        return (
            <div>
                {/* Change code below this line */}
                <Navbar name={this.state.name} />
                {/* Change code above this line */}
            </div>
        );
    }
};

class Navbar extends React.Component {
    constructor( props ) {
        super( props );
    }
    render () {
        return (
            <div>
                {/* Change code below this line */}
                <h1>Hello, my name is: {this.props.name}</h1>
                {/* Change code above this line */}
            </div>
        );
    }
};




// Pass a Callback as Props
class MyApp extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            inputValue: ''
        }
        this.handleChange = this.handleChange.bind( this );
    }
    handleChange ( event ) {
        this.setState( {
            inputValue: event.target.value
        } );
    }
    render () {
        return (
            <div>
                { /* Change code below this line */}
                <GetInput input={this.state.inputValue} handleChange={this.handleChange} />
                <RenderInput input={this.state.inputValue} />
                { /* Change code above this line */}
            </div>
        );
    }
};

class GetInput extends React.Component {
    constructor( props ) {
        super( props );
    }
    render () {
        return (
            <div>
                <h3>Get Input:</h3>
                <input
                    value={this.props.input}
                    onChange={this.props.handleChange} />
            </div>
        );
    }
};

class RenderInput extends React.Component {
    constructor( props ) {
        super( props );
    }
    render () {
        return (
            <div>
                <h3>Input Render:</h3>
                <p>{this.props.input}</p>
            </div>
        );
    }
};