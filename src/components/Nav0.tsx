import React, { useState } from 'react';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';
import { getChildrenToRender } from '../pages/home/utils';
import { HomeComponentProps as HeaderProps } from "../pages/home/types/types";

const { Item, SubMenu } = Menu

const Header = ({
  id,
  key,
  isMobile,
  dataSource,
  phoneOpen = undefined
}: HeaderProps) => {

  const [isPhoneOpen, setIsPhoneOpen] = useState(phoneOpen)

  const phoneClick = () => {
    setIsPhoneOpen(!isPhoneOpen)
  }

  const navData = dataSource.Menu.children

  const navChildren = navData.map((item: any) => {
    const { children: a, subItem, ...itemProps } = item

    if (subItem) {
      return (
        <SubMenu
          key={item.name}
          {...itemProps}
          title={
            <div
              {...a}
              className={`header0-item-block ${a.className}`.trim()}
              id='submenuTitle'
            >
              {a.children.map(getChildrenToRender)}
            </div>
          }
          popupClassName="header0-item-child"
        >
          {subItem.map(($item: any, ii: number) => {
            const { children: childItem } = $item

            const child = childItem.href ? (
              <a {...childItem}>
                {childItem.children.map(getChildrenToRender)}
              </a>
            ) : (
              <div {...childItem}>
                {childItem.children.map(getChildrenToRender)}
              </div>
            )

            return (
              <Item key={$item.name || ii.toString()} {...$item}>
                {child}
              </Item>
            );
          })}
        </SubMenu>
      );
    }

    return (
      <Item key={item.name} {...itemProps}>
        <a {...a} className={`header0-item-block ${a.className}`.trim()}>
          {a.children.map(getChildrenToRender)}
        </a>
      </Item>
    )
  })

  const moment = phoneOpen === undefined ? 300 : null;

  return (
    <TweenOne
      component="header"
      id={id}
      key={key}
      {...dataSource.wrapper}
    >
      <div
        {...dataSource.page}
        className={`${dataSource.page.className}${isPhoneOpen ? ' open' : ''}`}
      >
        <TweenOne
          animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
          {...dataSource.logo}
        >
          <img width="100%" src={dataSource.logo.children} alt="img" />
        </TweenOne>
        {isMobile && (
          <div
            {...dataSource.mobileMenu}
            onClick={() => {
              phoneClick();
            }}
          >
            <em />
            <em />
            <em />
          </div>
        )}
        <TweenOne
          {...dataSource.Menu}
          animation={
            isMobile
              ? {
                  height: 0,
                  duration: 300,
                  onComplete: (e: any) => {
                    if (isPhoneOpen) {
                      e.target.style.height = 'auto';
                    }
                  },
                  ease: 'easeInOutQuad',
                }
              : null
          }
          moment={moment}
          reverse={!!isPhoneOpen}
        >
          <Menu
            mode={isMobile ? 'inline' : 'horizontal'}
            defaultSelectedKeys={['sub0']}
            theme="dark"
          >
            {navChildren}
          </Menu>
        </TweenOne>
      </div>
    </TweenOne>
  )
}

export default Header;
