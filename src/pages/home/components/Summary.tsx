import React from 'react';
import { Row, Col } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { HomeComponentProps as ContentProps } from "../types/types";

const overPackProps = {
  playScale: 0.3,
}

const Summary = ({
  id,
  key,
  isMobile,
  dataSource,
  className
}: ContentProps) => {
  const getContentChildrenToRender = (data: any) =>
    data.map((item: any) => {
      return (
        <Col key={item.name} {...item}>
          <a {...item.children.wrapper}>
            <span {...item.children.img}>
              <img src={item.children.img.children} height="100%" alt="img" />
            </span>
            <p {...item.children.content}>{item.children.content.children}</p>
          </a>
        </Col>
      );
    })

    const childrenToRender = getContentChildrenToRender(
      dataSource.block.children
    )

    return (
      <div
        id="summary"
        key={key}
        className='home-page-wrapper content5-wrapper'
      >
        <div className='home-page content5'>
          <div key="title" className="title-wrapper">
            <h1 className="title-h1">What We Are About</h1>
          </div>

          <OverPack
            className={`content-template ${className}`}
            {...overPackProps}
          >
            <TweenOneGroup
              component={Row}
              key="ul"
              enter={{
                y: '+=30',
                opacity: 100,
                type: 'from',
                ease: 'easeInOutQuad',
              }}
              leave={{ y: '+=30', opacity: 100, ease: 'easeInOutQuad' }}
              {...dataSource.block}
            >
              {childrenToRender}
            </TweenOneGroup>
          </OverPack>

          <div className="summaryBlurbWrapper">
            <div className="summaryBlurb margin-left margin-right">
              <p>
                I like to think of Bravado as <span className="underline">audacious courage</span>, and that is exactly who we aspire to be as a guild.
              </p>
            </div>

            <div className="summaryBlurb margin-left margin-right">
              <p>
                We are a <span className="underline">Black Zone focused</span> guild who loves to be <span className="gold">scrappy</span>, <span className="gold">take fights</span> at every turn, <span className="gold">gank</span> often, and generally show others our <span className="gold">prowess</span> in battle.
              </p>
            </div>

            <div className="summaryBlurb margin-left margin-right">
              <p>
                We are absolutely down to gather, take out some world bosses, play the market, and even push for good rankings as a guild.

                However, our focus is on <span className="gold">PVP activities</span> that make the name Bravado <span className="underline">command respect</span> from the players who engage with us on our home turf and on the battlefield.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Summary;
