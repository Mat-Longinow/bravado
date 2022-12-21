import React from 'react'
import { Button } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'
import { HomeComponentProps as BannerProps } from "../types/types"
import videoBg from '../assets/video-bg.mp4'
import bannerLogo from '../assets/banner-logo.png'

const Banner = ({
	id,
	key,
	isMobile
}: BannerProps) => {
	return (
	  <div
			id={id}
			key={key}
		>

			<div className="banner0">
				<video className="bannerVideo" src={videoBg} autoPlay loop muted />
			</div>


			<QueueAnim
				key="QueueAnim"
				type={['bottom', 'top']}
				delay={200}
				className='banner0-text-wrapper'
			>
				<div key="title" className='banner0-title'>
						<img src={bannerLogo} alt="img" />
				</div>
			</QueueAnim>

			<TweenOne
				animation={{
				y: '-=20',
				yoyo: true,
				repeat: -1,
				duration: 1000,
				}}
				className="banner0-icon"
				key="icon"
			>
				<DownOutlined />
			</TweenOne>
		</div>
	)
}
export default Banner;
