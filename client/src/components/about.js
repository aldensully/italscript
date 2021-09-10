import React from 'react';

export default function About() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <button onClick={() => handleClickOpen()} style={{ width: 'fit-content', height: '3vh', fontSize: '20px', padding: '0' }}>about</button>
      <dialog open={open} onClose={handleClose} style={{ border: 0, borderRadius: 5 }}>

        <p style={{ fontSize: '1.4vh', textAlign: 'left', height: '70vh', lineHeight: '1.6vh', overflowY: 'auto' }}>
          <br />*a way to visualize notes
          <br /> using an annotation style to create nodes and edges.
          <br />*just a poc.
          <br />
          <br />*type CTRL+ENTER to graph or click 'G' button
          <br />*use your left/right/middle mouse buttons to move the camera around
          <br />
          <br />---------FORMAT---------
          <br />
          <br />*The first entry must be the root node that the graph grows from
          <br />and looks like...
          <br /> R : this is the root
          <br />
          <br />*Each new entry after that starts on a new line and has a prefix
          <br />which is colon at minimum
          <br />*Any entry whose prefix is just a colon will always connect to the most recent
          <br />root node(there can be more than one) example...
          <br />
          <br />R: this is the root;
          <br />: this will connect to the root;
          <br />: and so will this;
          <br />
          <br />*The prefix 'c:' means continue and will create an edge from the current entry
          <br />to the previous
          <br />For example ...
          <br />
          <br />R: this is the root;
          <br />: this will connect to the root;
          <br />c: and this will connect to previous line;
          <br />
          <br />*After 'c' is an optional type for organization purposes. They are R - root,
          <br />T - Topic,I - Idea,C - Comment,Q - Question,L - Link,A - Answer,P - Problem
          <br />For example ...
          <br />
          <br />R: this is the root;
          <br />I: this is an idea
          <br />C: this is a comment
          <br />
          <br />*After type is 's' and 't' which stand for source and target, for
          <br />example ... s:some idea ... and ... t:another idea will have an edge between them.
          <br />A target must have a previous source to connect to but they can be many lines apart
          <br />*After that is an optional 's', so that an entry can contain a target and also a source
          <br />example...
          <br />
          <br />R: this is the root;
          <br />s: this will connect to the root and is also a source;
          <br />c: this is continuing from the previous line;
          <br />: connecting to root node;
          <br />t:s: this will connect to entry 2 and is a new source node itself;
          <br />







        </p>

        <button style={{ backgroundColor: '#fafbff', border: '1px solid #222', fontSize: '20px' }} onClick={() => handleClose()}>close</button>
      </dialog>
    </div>
  )
}