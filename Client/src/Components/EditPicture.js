import React, { useState, useRef, useEffect } from 'react'
import { Link } from "react-router-dom" ; 
import { IoMdArrowBack } from 'react-icons/io' ;


import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
} from 'react-image-crop'
import { canvasPreview } from './canvasPreview'
import { useDebounceEffect } from './useDebounceEffect'

import 'react-image-crop/dist/ReactCrop.css'

// This is to demonstate how to make and center a % aspect crop
// which is a bit trickier so we use some helper functions.
function centerAspectCrop(
  mediaWidth,
  mediaHeight,
  aspect,
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight,
    ),
    mediaWidth,
    mediaHeight,
  )
}

export default function EditPicture({back}) {
  const [imgSrc, setImgSrc] = useState('')
  const previewCanvasRef = useRef(null)
  const imgRef = useRef(null)
  const [crop, setCrop] = useState()
  const [completedCrop, setCompletedCrop] = useState()
  const [scale, setScale] = useState(1)
  const [rotate, setRotate] = useState(0)
  const [aspect, setAspect] = useState(3 / 1)

  // function onSelectFile(e) {
  //   if (e.target.files && e.target.files.length > 0) {
  //     setCrop(undefined) // Makes crop preview update between images.
  //     const reader = new FileReader()
  //     reader.addEventListener('load', () =>
  //       setImgSrc(reader.result.toString() || ''),
  //     )
  //     reader.readAsDataURL(e.target.files[0])
  //   }
  // }

  function onImageLoad(e) {
    if (aspect) {
      const { width, height } = e.currentTarget
      setCrop(centerAspectCrop(width, height, aspect))
    }
  }

  useEffect(() => {
      setCrop(undefined) // Makes crop preview update between images.
      const reader = new FileReader()
      reader.addEventListener('load', () =>
        setImgSrc(back),
      )
      // reader.readAsDataURL(e.target.files[0])
    
  }, [])

  // useEffect(() => {
  //    if (aspect) {
  //     setAspect(undefined)
  //   } else if (imgRef.current) {
  //     const { width, height } = imgRef.current
  //     setAspect(3 / 1)
  //     setCrop(centerAspectCrop(width, height, 3 / 1))
  //   }
  // } , [])


  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        // We use canvasPreview as it's much faster than imgPreview.
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          scale,
          rotate,
        )
      }
    },
    100,
    [completedCrop, scale, rotate],
  )



  return (
    <div className="Apps">
      <div className='top'>
            <p><Link to='/Home'><IoMdArrowBack/></Link></p>
          </div>
          

      <div className="Crop-Controls">
        <input type="file" accept="image/*" />
        <button onClick={e => {
            const dataURL = previewCanvasRef.current.toDataURL()
            console.log(dataURL) ;
        }}>Save</button>
        {/* <div>
          <label htmlFor="scale-input">Scale: </label>
          <input
            id="scale-input"
            type="number"
            step="0.1"
            value={scale}
            disabled={!imgSrc}
            onChange={(e) => setScale(Number(e.target.value))}
          />
        </div> */}
        {/* <div>
          <label htmlFor="rotate-input">Rotate: </label>
          <input
            id="rotate-input"
            type="number"
            value={rotate}
            disabled={!imgSrc}
            onChange={(e) =>
              setRotate(Math.min(180, Math.max(-180, Number(e.target.value))))
            }
          />
        </div> */}
        <div>
          {/* <button onClick={handleToggleAspectClick}>
            Toggle aspect {aspect ? 'off' : 'on'}
          </button> */}
        </div>
      </div>
        <ReactCrop
          crop={crop}
          onChange={(_, percentCrop) => setCrop(percentCrop)}
          onComplete={(c) => setCompletedCrop(c)}
          aspect={aspect}
        >
          <img
            ref={imgRef}
            alt="Crop me"
            src={back}
            style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
            onLoad={onImageLoad}
          />
        </ReactCrop>
     
          <div className='saveSelectBox'>
            <button className='saveSelect'>Save</button>
          </div>
      <div className='hide'>
        {Boolean(completedCrop) && (
          <canvas
            ref={previewCanvasRef}
            style={{
              border: '1px solid black',
              objectFit: 'contain',
              width: completedCrop.width,
              height: completedCrop.height,
            }}
          />
        )}
      </div>
    </div>
  )
}
