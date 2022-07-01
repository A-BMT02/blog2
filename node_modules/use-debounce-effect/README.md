# use-debounce-effect

> useEffect hook that debounces the effect

[![NPM](https://img.shields.io/npm/v/use-debounce-effect.svg)](https://www.npmjs.com/package/use-debounce-effect) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-debounce-effect
```

## Usage

```jsx
import React, { useState } from 'react'
import axios from 'axios';
import { useDebounceEffect } from '@bellawatt/react-hooks'

const DebounceEffectExample = () => {
  const [value, setValue] = useState('');

  useDebounceEffect(() => {
    someSlowFunction();
  }, 1000, [value]));

  return (
    <div>
      <input value={value} onChange={e => setValue(e.currentTarget.value)} />
    </div>
  )
}
```

## License

MIT © [bellawatt](https://github.com/bellawatt)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
