import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from '../utils';
import { HomeComponentProps as ContentProps } from "../types/types";

const Content3 = ({
  id,
  key,
  isMobile,
  dataSource
}: ContentProps) => {
  const getDelay = (e: number, b: number) => (e % b) * 100 + Math.floor(e / b) * 100 + b * 100

  let clearFloatNum = 0

  const children = dataSource.block.children.map((item: any, i: number) => {
    const childObj = item.children

    const delay = isMobile ? i * 50 : getDelay(i, 24 / item.md)

    const liAnim = {
      opacity: 0,
      type: 'from',
      ease: 'easeOutQuad',
      delay,
    }

    const childrenAnim = { ...liAnim, x: '+=10', delay: delay + 100 }
    clearFloatNum += item.md
    clearFloatNum = clearFloatNum > 24 ? 0 : clearFloatNum;

    return (
      <TweenOne
        component={Col}
        animation={liAnim}
        key={item.name}
        {...item}
        componentProps={{ md: item.md, xs: item.xs }}
        className={
          !clearFloatNum
            ? `${item.className || ''} clear-both`.trim()
            : item.className
        }
      >
        <TweenOne
          animation={{
            x: '-=10',
            opacity: 0,
            type: 'from',
            ease: 'easeOutQuad',
          }}
          key="img"
          {...childObj.icon}
        >
          <img src={childObj.icon.children} width="100%" alt="img" />
        </TweenOne>
        <div {...childObj.textWrapper}>
          <TweenOne
            key="h2"
            animation={childrenAnim}
            component="h2"
            {...childObj.title}
          >
            {childObj.title.children}
          </TweenOne>
          <TweenOne
            key="p"
            animation={{ ...childrenAnim, delay: delay + 200 }}
            component="div"
            {...childObj.content}
          >
            {childObj.content.children}
          </TweenOne>
        </div>
      </TweenOne>
    );
  })

  return (
    <div
      id={id}
      key={key}
      {...dataSource.wrapper}>
      <div {...dataSource.page}>
        <div {...dataSource.titleWrapper}>
          {dataSource.titleWrapper.children.map(getChildrenToRender)}
        </div>
        <OverPack {...dataSource.OverPack}>
          <QueueAnim key="u" type="bottom">
            <Row key="row" {...dataSource.block}>
              {children}
            </Row>
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  )
}

export default Content3;
