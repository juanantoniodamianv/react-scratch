import React, { useEffect } from 'react'
import * as faceapi from 'face-api.js'

export const Home = () => {
  useEffect(() => {
    const video = document.getElementById('video')
    const MODEL_URL = 'http://localhost:8080/public/models'
    console.log(MODEL_URL)

    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
      faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
      faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
      faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL)
    ]).then(
      navigator.getUserMedia(
        { video: {} },
        // eslint-disable-next-line no-return-assign
        stream => video.srcObject = stream,
        err => console.error(err)
      )
    )

    video.addEventListener('play', () => {
      const canvas = faceapi.createCanvasFromMedia(video)
      document.getElementById('container').append(canvas)
      const displaySize = { width: video.width, height: video.height }
      faceapi.matchDimensions(canvas, displaySize)
      setInterval(async () => {
        const detections = await faceapi.detectAllFaces(
          video,
          new faceapi.TinyFaceDetectorOptions()
        ).withFaceLandmarks().withFaceExpressions()
        const resizedDetections = faceapi.resizeResults(detections, displaySize)
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
        faceapi.draw.drawDetections(canvas, resizedDetections)
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
        faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
      }, 100)
    })
  })

  return (
    <div id='container'>
      <video id='video' width='720' height='560' autoPlay muted />
    </div>
  )
}
