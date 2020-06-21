import React, { useState } from 'react'
import Checkmark from './checkmark.svg'
import Close from './close.svg'
import Reload from './reload.svg'
import Title from './Title'
import Image from './Image'
import Choices from './Choices'
import Choice from './Choices/Choice'
import Action from './Action'


function KnowledgeCheck({ choices = [], prompt, media, feedback }) {
  const [submitted, setSubmit] = useState(false)
  const [choice, setChoice] = useState(null)
  return (
    <section className="container mx-auto my-10 px-10">
      <div className="shadow-lg border px-16 py-12">
        <Title>{prompt}</Title>
        {media && (
          <Image src={media} alt="test image"/>
        )}
        <Choices>
          {choices.map((c, i) => (
            <Choice
              {...c}
              key={i}
              onClick={() => setChoice(c)}
              active={choice === c}
              submitted={submitted}
            >
              {c.label}
            </Choice>
          ))}
        </Choices>
        {!submitted && (
          <div className="flex items-center justify-center">
            <Action disabled={!choice} onClick={() => setSubmit(true)}>submit</Action>
          </div>
        )}
        {submitted && (
          <div className="flex flex-col items-center justify-center bg-gray-100 py-8">
            <div className="flex flex-col items-center">
              <div className="border-2 border-gray-300 rounded-full">
                <img src={choice.correct ? Checkmark : Close} className="w-5 m-3"/>
              </div>
              <span className="text-xs mt-2">{choice.correct ? 'Correct' : 'Incorrect'}</span>
            </div>
            {feedback && (
              <div className="text-gray-600 text-sm pt-6">{feedback}</div>
            )}
          </div>
        )}
        {submitted && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => {
                setSubmit(false)
                setChoice(null)
              }}
              className="text-xs flex flex-col items-center justify-center focus:outline-none"
            >
              TAKE AGAIN
              <img src={Reload} className="w-5 m-3"/>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default KnowledgeCheck;
