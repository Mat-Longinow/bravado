import React from 'react';
import { Button } from 'antd'

const CallToAction = () => {
    return (
      <div
        id="callToAction"
        className='home-page-wrapper content5-wrapper'
      >
        <div className='home-page content5'>
          <div key="title" className="title-wrapper">
            <h1 className="title-h1">
              <span className="title">Come Check Us Out</span>
            </h1>

            <div className="title-content">
              <Button size="large">Guild Charter</Button>
              <Button size="large">Discord (Apply)</Button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default CallToAction;
