import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from '../utils';
import { HomeComponentProps as ContentProps } from "../types/types"

const Content = ({
  id,
  key,
  isMobile,
  dataSource
}: ContentProps) => {
  const {
    wrapper,
    titleWrapper,
    page,
    OverPack: overPackData,
    childWrapper,
  } = dataSource

  return (
    <div
      id={id}
      key={key}
      {...wrapper}>
      <div {...page}>
        <div {...titleWrapper}>
          {titleWrapper.children.map(getChildrenToRender)}
        </div>
        <OverPack {...overPackData}>
          <QueueAnim
            type="bottom"
            key="block"
            leaveReverse
            componentProps={childWrapper}
          >
            {childWrapper.children.map((block: any, i: number) => {
              const { children: item, ...blockProps } = block;
              return (
                <Col key={i.toString()} {...blockProps}>
                  <div {...item}>
                    {item.children.map(getChildrenToRender)}
                  </div>
                </Col>
              );
            })}
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  )
}

export default Content;
