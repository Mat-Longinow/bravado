import React from 'react';
import { Button } from 'antd'
import { useHistory } from 'react-router-dom'

const CallToAction = () => {
    let history = useHistory()

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
              <Button
                size="large"
                onClick={() => {
                  history.push('/guild-charter')
                }}
              >Guild Charter</Button>
              <Button
                size="large"
                onClick={() => {
                  window.location.href = "https://discord.gg/kJ4dsnQJBy"
                }}
              >Discord (Apply)</Button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default CallToAction;
