import React from 'react';
import { Col, Row, List } from 'antd'
import dartAvatar from './../assets/footer/dartAvatar.png'

const Footer = () => {

  const footerLinks = [
    {
      title: 'Discord',
      link: 'https://discord.gg/kJ4dsnQJBy',
    },
    {
      title: 'Guild Charter',
      link: 'https://www.wearebravado.co/guild-charter',
    }
  ]



  return (
    <div
      id="footer"
    >
      <div>
        <Row className="footer-wrapper">
          <Col span={6}>
            <Row className="footer-wrapper">
              <Col>
                <p>Made with ❤️ by <span className="underline">D'Aartanian</span></p>
              </Col>

              <Col>
                <img id="dartAvatar" alt="D'Artanian Avatar" src={dartAvatar} />
              </Col>
            </Row>

          </Col>

          <Col span={6}> </Col>

          <Col span={6}> </Col>

          <Col span={6}>
            <List
            itemLayout="horizontal"
            dataSource={footerLinks}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                title={<a href={item.link}>{item.title}</a>}
                />
              </List.Item>
              )}
            >
            </List>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Footer;
