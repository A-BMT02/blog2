import React, {useState} from 'react'
import useDebounceEffect from 'use-debounce-effect'

const App = () => {
  const [text, setText] = useState('');
  const [delayedText, setDelayedText] = useState('');

  useDebounceEffect(() => {
    setDelayedText(text);
  }, 1000, [text])

  return (
    <div>
      <input type="text" onChange={e => setText(e.currentTarget.value)} value={text} />

      <p>Text: {text}</p>
      <p>Delay: {delayedText}</p>
    </div>
  )
}
export default App