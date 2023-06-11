import React from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0';

class RandomQuote extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {
            quotes: [],
            quote: '',
            author: ''
        }
        this.newQote = this.newQote.bind( this );
        this.fetchApiToEntries = this.fetchApiToEntries.bind( this )
    }

    newQote () {
        let q = this.state.quotes[Math.floor( Math.random() * this.state.quotes.length )]
        this.setState( {
            ...this.state,
            quote: q.text,
            author: q.author
        } )
    }


    fetchApiToEntries = ( apiToFetch ) => {
        fetch( apiToFetch )
            .then( result => result.json() )
            .then( ( quotes ) => {
                let q = quotes[Math.floor( Math.random() * quotes.length )]
                this.setState( {
                    ...this.state,
                    quotes,
                    quote: q['text'],
                    author: q['author']
                } )
            } )
            .catch( ( error ) => console.log( error ) );
    }
    componentDidMount () {
        this.fetchApiToEntries( "https://type.fit/api/quotes" )
    }

    render () {
        return (
            <>
                <h1 id="text">
                    <i class="fa-solid fa-quote-left"></i>
                    {this.state.quote}
                    <i class="fa-solid fa-quote-right"></i>
                </h1>
                <h2 id="author">{this.state.author || 'Unknown'}</h2>
                <footer>
                    <a id='tweet-quote' href={`https://twitter.com/intent/tweet?text=${this.state.quote} -${this.state.author}&via=freecodecamp`} target="_top">
                        <i class="fa-brands fa-twitter fa-4x fa-fw"></i>
                    </a>
                    <button id='new-quote' onClick={this.newQote}>new quote</button>

                </footer>

            </>
        )
    }
}

ReactDOM.render( <RandomQuote />, document.getElementById( 'quote-box' ) )
// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would
    like to complete from the dropdown
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank
    pen.
  - Click the "TESTS" button to see
    the individual test cases.
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go
    from red to green.
  - As you start to build out your
    project, when tests are failing,
    you should get helpful errors
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 

