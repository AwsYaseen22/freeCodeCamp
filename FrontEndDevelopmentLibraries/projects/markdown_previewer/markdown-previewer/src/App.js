import './App.css';
import { useState } from 'react'

const markdownit = require( 'markdown-it' )( {
  html: false,
  breaks: true
} );



function App () {
  const text =
    'An h1 header\n' +
    '============\n' +
    '\n' +
    '[freecodecamp](www.freecodecamp.com)\n\n' +
    'Paragraphs are separated by a blank line.\n' +
    '\n' +
    '2nd paragraph. *Italic*, **bold**, and `monospace`. Itemized lists\n' +
    'look like:\n' +
    '\n' +
    '  * this one\n' +
    '  * that one\n' +
    '  * the other one\n' +
    '\n' +
    'Note that --- not considering the asterisk --- the actual text\n' +
    'content starts at 4-columns in.\n' +
    '\n' +
    '&gt; Block quotes are\n' +
    '&gt; written like so.\n' +
    '&gt;\n' +
    '&gt; They can span multiple paragraphs,\n' +
    '&gt; if you like.\n' +
    '\n' +
    'Use 3 dashes for an em-dash. Use ^2 dashes for ranges (ex., &quot;it&#39;s all\n' +
    'in chapters 12--14&quot;). Three dots ... will be converted to an ellipsis.\n' +
    'Unicode is supported. ☺\n' +
    '\n' +
    '> Block Quotes!' +
    '\n' +
    '\n' +
    'An h2 header\n' +
    '------------\n' +
    '\n' +
    'Here&#39;s a numbered list:\n' +
    '\n' +
    ' 1. first item\n' +
    ' 2. second item\n' +
    ' 3. third item\n' +
    '\n' +
    'Note again how the actual text starts at 4 columns in (4 characters\n' +
    'from the left side). Here&#39;s a code sample:\n' +
    '\n' +
    '    # Let me re-iterate ...\n' +
    '    for i in 1 .. 10 { do-something(i) }\n' +
    '\n' +
    'As you probably guessed, indented 4 spaces. By the way, instead of\n' +
    'indenting the block, you can use delimited blocks, if you like:\n' +
    '\n' +
    '```\n' +
    'function foobar() {\n' +
    '    console.log("Welcome to flavor country!")\n' +
    '}\n' +
    '```\n' +

    '\n' +
    '~~~\n' +
    'define foobar() {\n' +
    '    print &quot;Welcome to flavor country!&quot;;\n' +
    '}\n' +
    '~~~\n' +
    '\n' +
    '(which makes copying &amp; pasting easier). You can optionally mark the\n' +
    'delimited block for Pandoc to syntax highlight it:\n' +
    '\n' +
    '~~~\n' +
    'python\n' +
    'import time\n' +
    '# Quick, count to ten!\n' +
    'for i in range(10):\n' +
    '    # (but not *too* quick)\n' +
    '    time.sleep(0.5)\n' +
    '    print i\n' +
    '~~~\n' +
    '\n' +
    '\n' +
    '\n' +
    '### An h3 header ###\n' +
    '\n' +
    'Now a nested list:\n' +
    '\n' +
    ' 1. First, get these ingredients:\n' +
    '\n' +
    '      * carrots\n' +
    '      * celery\n' +
    '      * lentils\n' +
    '\n' +
    ' 2. Boil some water.\n' +
    '\n' +
    ' 3. Dump everything in the pot and follow\n' +
    '    this algorithm:\n' +
    '\n' +
    '        find wooden spoon\n' +
    '        uncover pot\n' +
    '        stir\n' +
    '        cover pot\n' +
    '        balance wooden spoon precariously on pot handle\n' +
    '        wait 10 minutes\n' +
    '        goto first step (or shut off burner when done)\n' +
    '\n' +
    '    Do not bump wooden spoon or it will fall.\n' +
    '\n' +
    'Notice again how text always lines up on 4-space indents (including\n' +
    'that last line which continues item 3 above).\n' +
    '\n' +
    'Here&#39;s a link to [a website](http://foo.bar), to a [local\n' +
    'doc](local-doc.html), and to a [section heading in the current\n' +
    'doc](#an-h2-header). Here&#39;s a footnote [^1].\n' +
    '\n' +
    '[^1]: Footnote text goes here.\n' +
    '\n' +
    'Tables can look like this:\n' +
    '\n' +
    'size  material      color\n' +
    '----  ------------  ------------\n' +
    '9     leather       brown\n' +
    '10    hemp canvas   natural\n' +
    '11    glass         transparent\n' +
    '\n' +
    'Table: Shoes, their sizes, and what they&#39;re made of\n' +
    '\n' +
    '(The above is the caption for the table.) Pandoc also supports\n' +
    'multi-line tables:\n' +
    '\n' +
    '--------  -----------------------\n' +
    'keyword   text\n' +
    '--------  -----------------------\n' +
    'red       Sunsets, apples, and\n' +
    '          other red or reddish\n' +
    '          things.\n' +
    '\n' +
    'green     Leaves, grass, frogs\n' +
    '          and other things it&#39;s\n' +
    '          not easy being.\n' +
    '--------  -----------------------\n' +
    '\n' +
    'A horizontal rule follows.\n' +
    '\n' +
    '***\n' +
    '\n' +
    'Here&#39;s a definition list:\n' +
    '\n' +
    'apples\n' +
    '  : Good for making applesauce.\n' +
    'oranges\n' +
    '  : Citrus!\n' +
    'tomatoes\n' +
    '  : There&#39;s no &quot;e&quot; in tomatoe.\n' +
    '\n' +
    'Again, text is indented 4 spaces. (Put a blank line between each\n' +
    'term/definition pair to spread things out more.)\n' +
    '\n' +
    'Here&#39;s a &quot;line block&quot;:\n' +
    '\n' +
    '| Line one\n' +
    '|   Line too\n' +
    '| Line tree\n' +
    '\n' +
    'and images can be specified like so:\n' +
    '\n' +
    '![example image](example-image.jpg &quot;An exemplary image&quot;)\n' +
    '\n' +
    'Inline math equations go in like so: $\omega = d\phi / dt$. Display\n' +
    'math should get its own line and be put in in double-dollarsigns:\n' +
    '\n' +
    '$$I = \int \rho R^{2} dV$$\n' +
    '\n' +
    'And note that you can backslash-escape any punctuation characters\n' +
    'which you wish to be displayed literally, ex.: \`foo\`, \*bar\*, etc.\n' +
    '![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n'
    ;
  const [source, setSource] = useState( text )
  const [result, setResult] = useState( { __html: markdownit.render( text ) } )

  const handleChange = ( e ) => {
    const converted = { __html: markdownit.render( e.target.value ) }
    setSource( e.target.value )
    setResult( converted )
  }
  return (
    <div className="App">
      <div className='wrapper'>
        <div className="textInputWrapper">
          <div className="textInputTitle">
            <p>Text input</p>
          </div>
          <textarea name="textarea" id="editor" className='textInput' value={source} onChange={handleChange} />
        </div>
        <div className="htmlWrapper">
          <div className="htmlTitle">
            <p>Markdown Preview:</p>
          </div>
          <div id="preview" className="htmlContent" dangerouslySetInnerHTML={result} ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
