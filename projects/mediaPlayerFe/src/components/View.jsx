import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideos } from '../services/allApi'
function View({uploadVideoStatus}) {
  const [allVideos, setAllVideos] = useState([])
  const getVideos = async () => {
    const response = await getAllVideos()
    const { data } = response
    setAllVideos(data)
  }
  useEffect(() => {
    getVideos()
  }, [uploadVideoStatus])
  console.log(allVideos)
  return (
    <>
      <Row>
        {
          allVideos?.map((item => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <VideoCard displayVideo={item} />
            </Col>
          )))
        }
      </Row>
    </>
  )
}

export default View