/**
 * demo 如何使用 react-slide-pic
 * @author  yongbing
 * @email   yongbingz@qq.com
 */
import React from 'react'
import ReactDOM from 'react-dom'
import './demo.scss'
import SlidePic from '../src/SlidePic'


class Demo extends React.Component{
	render(){
		const dataPic = [
			{src:'http://dimg04.c-ctrip.com/images/7005090000004885r817A_780_235_57.jpg',href:'#',title:'img1'},
			{src:'http://dimg04.c-ctrip.com/images/7002070000002qkq2D9A8_780_235_42.jpg',title:'img2'},
			{src:'http://dimg04.c-ctrip.com/images/700k090000003q9nu2B80_780_235_57.jpg',title:'img3'}
		];
		return(
				<div>
					<div className="demo">
						<h1>图片幻灯片 react-slide-pic</h1>
						<SlidePic data={ dataPic } />
					</div>
				</div>
			)
	}
}

ReactDOM.render(
		<Demo />,
		document.getElementById('J_rc')
	);
