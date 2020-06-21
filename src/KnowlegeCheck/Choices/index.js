import React from 'react';

function KnowledgeCheckChoices(props) {
  return (
    <ul className="border-t my-5 py-4 border-gray-200">
      {props.children}
    </ul>
  );
}
export default KnowledgeCheckChoices;
