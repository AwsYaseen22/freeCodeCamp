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