import React from 'react'

import Nav0 from './components/Nav0';
import Banner0 from './components/Banner0';
import Summary from './components/Summary';
import Footer1 from './components/Footer1';
import Definition from "./components/Definition";
import Divider from "./components/Divider";
import CallToAction from "./components/CallToAction"

import {
  Nav00DataSource,
  SummaryDataSource,
  Content30DataSource,
  Footer10DataSource,
} from './data.source';

import './css/antMotionStyle.css';


const generateIsMobile = () => (/Android|iPhone/i).test(navigator.userAgent)

export const Home = () => {
    return (
      <div
        className="templates-wrapper"
      >
        <Nav0
          id="Nav0_0"
          key="Nav0_0"
          dataSource={Nav00DataSource}
          isMobile={generateIsMobile()}
        />

        <Banner0
          id="Banner0_1"
          key="Banner0_1"
          isMobile={generateIsMobile()}
        />

        <Definition />

        <Divider dividerSize="small" />

        <Summary
          id="Content5_0"
          key="Content5_0"
          dataSource={SummaryDataSource}
          isMobile={generateIsMobile()}
          className=""
        />

        <Divider dividerSize="small" />

        <CallToAction />

        <Divider dividerSize="large"/>

        <Footer1
          id="Footer1_0"
          key="Footer1_0"
          dataSource={Footer10DataSource}
          isMobile={generateIsMobile()}
        />
      </div>
    )
}
