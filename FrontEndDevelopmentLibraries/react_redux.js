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
const ADD = 'ADD'

// action creator
const addMessage = ( message ) => ( { type: ADD, message } )

// reducer
const messageReducer = ( state = [], action ) => {
    switch ( action.type ) {
        case ADD:
            return [...state, action.message]
        default:
            return state
    }
}

const store = Redux.createStore( messageReducer )