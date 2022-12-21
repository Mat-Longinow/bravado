import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import { getChildrenToRender } from '../utils';
import { isImg } from '../utils';
import { HomeComponentProps as FooterProps } from "../types/types";

const Footer = ({
  id,
  key,
  isMobile,
  dataSource
}: FooterProps) => {
  const getListChildren = (data: any) =>
    data.map((item: any, i: number) => {
      const { title, childWrapper, ...itemProps } = item;
      return (
        <Col key={i.toString()} {...itemProps} title={null} content={null}>
          <h2 {...title}>
            {typeof title.children === 'string' &&
            title.children.match(isImg) ? (
              <img src={title.children} width="100%" alt="img" />
            ) : (
              title.children
            )}
          </h2>
          <div {...childWrapper}>
            {childWrapper.children.map(getChildrenToRender)}
          </div>
        </Col>
      );
    });

  const childrenToRender = getListChildren(dataSource.block.children)

  return (
    <div
      id={id}
      key={key}
      {...dataSource.wrapper}
    >
      <OverPack {...dataSource.OverPack}>
        <QueueAnim
          type="bottom"
          key="ul"
          leaveReverse
          component={Row}
          {...dataSource.block}
        >
          {childrenToRender}
        </QueueAnim>
        <TweenOne
          animation={{ y: '+=30', opacity: 0, type: 'from' }}
          key="copyright"
          {...dataSource.copyrightWrapper}
        >
          <div {...dataSource.copyrightPage}>
            <div {...dataSource.copyright}>
              {dataSource.copyright.children}
            </div>
          </div>
        </TweenOne>
      </OverPack>
    </div>
  )
}

export default Footer;
