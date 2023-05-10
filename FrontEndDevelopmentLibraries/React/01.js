// 01
// const JSX = <h1>Hello JSX!</h1>

// 02
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
// const JSX = (
//     <div>
//         <h1>Hello World</h1>
//         <p>Lets render this to the DOM</p>
//     </div>
// );
// // Change code below this line
// ReactDOM.render( JSX, document.getElementById( 'challenge-node' ) )


// 04
// const JSX = (
//     <div className="myDiv">
//         <h1>Add a class to this div</h1>
//     </div>
// );


// 05
// const JSX = (
//     <div>
//         <h2>Welcome to React!</h2>
//         <br />
//         <p>Be sure to close all tags!</p>
//         <hr />
//     </div>
// );


// 06
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

// // Change code below this line
// ReactDOM.render( <TypesOfFood />, document.getElementById( 'challenge-node' ) )

// 12
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


// 13
