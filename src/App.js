import React from 'react';
import KnowledgeCheck from './KnowlegeCheck'

function App({ blocks = [{type: 'KnowledgeCheck' }] } = {}) {
  return blocks.map((block) => {
    const Component = BLOCKS[block.type]
    return (
      <Component {...block.data}/>
    );
  })
}

const BLOCKS = {
  KnowledgeCheck,
}

export default App;
