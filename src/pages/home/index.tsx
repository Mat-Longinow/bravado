import React from 'react'

import Nav from './../../components/Nav'
import Banner0 from './components/Banner0';
import Summary from './components/Summary';
import Footer1 from './../../components/Footer1';
import Definition from "./components/Definition";
import Divider from "./components/Divider";
import CallToAction from "./components/CallToAction"

import {
  SummaryDataSource,
} from './data.source';

import './css/antMotionStyle.css';


export const generateIsMobile = () => (/Android|iPhone/i).test(navigator.userAgent)

const Home = () => {
    return (
      <div
        className="templates-wrapper"
      >
        <Nav />

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

        <Footer1 />
      </div>
    )
}

export default Home
