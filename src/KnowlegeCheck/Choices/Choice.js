import React from 'react';
import Checkmark from '../checkmark.svg'
import Close from '../close.svg'
import Circle from '../circle.svg'

function KnowledgeCheckChoice(props) {
  const classes = [
    "px-6 py-8 flex items-center"
  ]
  let icon = ''
  if (props.active) {
    icon = Circle
    if (props.submitted) {
      icon = props.correct ? Checkmark : Close
      classes.push('border-black border-2')
    }
  }
  if (!props.submitted) {
    classes.push('hover:bg-gray-100 cursor-pointer')
  }
  return (
    <li className={classes.join(' ')} onClick={!props.submitted && props.onClick}>
      <div className="border-2 border-gray-300 rounded-full mr-4">
        <img src={icon} className="w-2 h-2 m-1"/>
      </div>
      {props.children}
    </li>
  );
}
export default KnowledgeCheckChoice;
