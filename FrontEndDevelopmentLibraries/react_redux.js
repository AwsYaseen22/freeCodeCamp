// Getting Started with React Redux
// class DisplayMessages extends React.Component {
//     // Change code below this line
//     constructor( props ) {
//         super( props )
//         this.state = {
//             input: '',
//             messages: []
//         }
//     }
//     // Change code above this line
//     render () {
//         return <div />
//     }
// };







// Manage State Locally First
// class DisplayMessages extends React.Component {
//     constructor( props ) {
//         super( props );
//         this.state = {
//             input: '',
//             messages: []
//         }
//         this.handleChange = this.handleChange.bind( this )
//         this.submitMessage = this.submitMessage.bind( this )
//     }
//     // Add handleChange() and submitMessage() methods here
//     handleChange ( e ) {
//         this.setState( { input: e.target.value } )
//     }
//     submitMessage () {
//         this.setState( {
//             messages: this.state.messages.concat( this.state.input ),
//             input: ''

//         } )
//     }

//     render () {
//         return (
//             <div>
//                 <h2>Type in a new Message:</h2>
//                 { /* Render an input, button, and ul below this line */}
//                 <input value={this.state.input} onChange={this.handleChange} />
//                 <button type="button" onClick={this.submitMessage}>Add message</button>
//                 <ul>{this.state.messages.map( ( m, i ) => ( <li key={i + Date()}>{m}</li> ) )}</ul>
//                 { /* Change code above this line */}
//             </div>
//         );
//     }
// };




// Extract State Logic to Redux
// Define ADD, addMessage(), messageReducer(), and store here:
// const ADD = 'ADD'

// // action creator
// const addMessage = ( message ) => ( { type: ADD, message } )

// // reducer
// const messageReducer = ( state = [], action ) => {
//     switch ( action.type ) {
//         case ADD:
//             return [...state, action.message]
//         default:
//             return state
//     }
// }

// const store = Redux.createStore( messageReducer )





// Use Provider to Connect Redux to React
// // Redux:
// const ADD = 'ADD';

// const addMessage = ( message ) => {
//     return {
//         type: ADD,
//         message
//     }
// };

// const messageReducer = ( state = [], action ) => {
//     switch ( action.type ) {
//         case ADD:
//             return [
//                 ...state,
//                 action.message
//             ];
//         default:
//             return state;
//     }
// };



// const store = Redux.createStore( messageReducer );

// // React:

// class DisplayMessages extends React.Component {
//     constructor( props ) {
//         super( props );
//         this.state = {
//             input: '',
//             messages: []
//         }
//         this.handleChange = this.handleChange.bind( this );
//         this.submitMessage = this.submitMessage.bind( this );
//     }
//     handleChange ( event ) {
//         this.setState( {
//             input: event.target.value
//         } );
//     }
//     submitMessage () {
//         this.setState( ( state ) => {
//             const currentMessage = state.input;
//             return {
//                 input: '',
//                 messages: state.messages.concat( currentMessage )
//             };
//         } );
//     }
//     render () {
//         return (
//             <div>
//                 <h2>Type in a new Message:</h2>
//                 <input
//                     value={this.state.input}
//                     onChange={this.handleChange} /><br />
//                 <button onClick={this.submitMessage}>Submit</button>
//                 <ul>
//                     {this.state.messages.map( ( message, idx ) => {
//                         return (
//                             <li key={idx}>{message}</li>
//                         )
//                     } )
//                     }
//                 </ul>
//             </div>
//         );
//     }
// };

// const Provider = ReactRedux.Provider;

// class AppWrapper extends React.Component {
//     // Render the Provider below this line
//     render () {
//         return (
//             <Provider store={store}>
//                 <DisplayMessages />
//             </Provider>
//         )
//     }
//     // Change code above this line
// };







// Map State to Props
// const state = [];

// // Change code below this line
// const mapStateToProps = ( state ) => ( { messages: state } )





// Map Dispatch to Props
// const addMessage = ( message ) => {
//     return {
//         type: 'ADD',
//         message: message
//     }
// };

// // Change code below this line
// const mapDispatchToProps = ( dispatch ) => {
//     return {
//         submitNewMessage: ( message ) => dispatch( addMessage( message ) )
//     }
// }





// Connect Redux to React
// const addMessage = ( message ) => {
//     return {
//         type: 'ADD',
//         message: message
//     }
// };

// const mapStateToProps = ( state ) => {
//     return {
//         messages: state
//     }
// };

// const mapDispatchToProps = ( dispatch ) => {
//     return {
//         submitNewMessage: ( message ) => {
//             dispatch( addMessage( message ) );
//         }
//     }
// };

// class Presentational extends React.Component {
//     constructor( props ) {
//         super( props );
//     }
//     render () {
//         return <h3>This is a Presentational Component</h3>
//     }
// };

// const connect = ReactRedux.connect;
// // Change code below this line
// const ConnectedComponent = connect( mapStateToProps, mapDispatchToProps )( Presentational )







// Connect Redux to the Messages App
// // Redux:
// const ADD = 'ADD';

// const addMessage = ( message ) => {
//     return {
//         type: ADD,
//         message: message
//     }
// };

// const messageReducer = ( state = [], action ) => {
//     switch ( action.type ) {
//         case ADD:
//             return [
//                 ...state,
//                 action.message
//             ];
//         default:
//             return state;
//     }
// };

// const store = Redux.createStore( messageReducer );

// // React:
// class Presentational extends React.Component {
//     constructor( props ) {
//         super( props );
//         this.state = {
//             input: '',
//             messages: []
//         }
//         this.handleChange = this.handleChange.bind( this );
//         this.submitMessage = this.submitMessage.bind( this );
//     }
//     handleChange ( event ) {
//         this.setState( {
//             input: event.target.value
//         } );
//     }
//     submitMessage () {
//         this.setState( ( state ) => {
//             const currentMessage = state.input;
//             return {
//                 input: '',
//                 messages: state.messages.concat( currentMessage )
//             };
//         } );
//     }
//     render () {
//         return (
//             <div>
//                 <h2>Type in a new Message:</h2>
//                 <input
//                     value={this.state.input}
//                     onChange={this.handleChange} /><br />
//                 <button onClick={this.submitMessage}>Submit</button>
//                 <ul>
//                     {this.state.messages.map( ( message, idx ) => {
//                         return (
//                             <li key={idx}>{message}</li>
//                         )
//                     } )
//                     }
//                 </ul>
//             </div>
//         );
//     }
// };

// // React-Redux:
// const mapStateToProps = ( state ) => {
//     return { messages: state }
// };

// const mapDispatchToProps = ( dispatch ) => {
//     return {
//         submitNewMessage: ( newMessage ) => {
//             dispatch( addMessage( newMessage ) )
//         }
//     }
// };

// const Provider = ReactRedux.Provider;
// const connect = ReactRedux.connect;

// // Define the Container component here:
// const Container = connect( mapStateToProps, mapDispatchToProps )( Presentational )

// class AppWrapper extends React.Component {
//     constructor( props ) {
//         super( props );
//     }
//     render () {
//         // Complete the return statement:
//         return (
//             <Provider store={store}>
//                 <Container />
//             </Provider>
//         );
//     }
// };







// Extract Local State into Redux
// Redux:
const ADD = 'ADD';

const addMessage = ( message ) => {
    return {
        type: ADD,
        message: message
    }
};

const messageReducer = ( state = [], action ) => {
    switch ( action.type ) {
        case ADD:
            return [
                ...state,
                action.message
            ];
        default:
            return state;
    }
};

const store = Redux.createStore( messageReducer );

// React:
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Change code below this line
class Presentational extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            input: '',
            // messages: []
        }
        this.handleChange = this.handleChange.bind( this );
        this.submitMessage = this.submitMessage.bind( this );
    }
    handleChange ( event ) {
        this.setState( {
            input: event.target.value
        } );
    }
    submitMessage () {
        this.props.submitNewMessage( this.state.input )
        this.setState( ( state ) => ( {
            input: '',
        } ) );
    }
    render () {
        return (
            <div>
                <h2>Type in a new Message:</h2>
                <input
                    value={this.state.input}
                    onChange={this.handleChange} /><br />
                <button onClick={this.submitMessage}>Submit</button>
                <ul>
                    {this.props.messages.map( ( message, idx ) => {
                        return (
                            <li key={idx}>{message}</li>
                        )
                    } )
                    }
                </ul>
            </div>
        );
    }
};
// Change code above this line

const mapStateToProps = ( state ) => {
    return { messages: state }
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        submitNewMessage: ( message ) => {
            dispatch( addMessage( message ) )
        }
    }
};

const Container = connect( mapStateToProps, mapDispatchToProps )( Presentational );

class AppWrapper extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <Container />
            </Provider>
        );
    }
};