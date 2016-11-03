/**
 * SlidePic.js
 * @author  yongbing
 * @email   yongbingz@qq.com
 */
import './slide-pic.scss'
import React, { PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class SlidePic extends React.Component{
	constructor(props){
		super(props);
		this.state={
			index: 0
		}
		this.data = this.props.data;
		this.ctrMouseEnter = this.ctrMouseEnter.bind(this);
		this.ctrMouseLeave = this.ctrMouseLeave.bind(this);
	}

	componentDidMount(){
		if (this.props.autoPlay) {
			this.autoPlayFn();
		}
	}

	ctrMouseEnter(e,i){
		this.stopEvent(e);
		this.timer&&clearInterval(this.timer);
		this.setState({index:i});
	}

	ctrMouseLeave(e,i){
		this.stopEvent(e);
		if (this.props.autoPlay) {
			this.autoPlayFn();
		}
	}

	autoPlayFn(){
		let that = this;
		const len = that.data.length;
		that.timer = setInterval(function(){
			let index = that.state.index;
			index++;
			if (index >= len) {
				index = 0;
			}
			that.setState({ index:index });
		}, that.props.delay*1000);
	}

	stopEvent(e){
	    e.stopPropagation();
	    e.preventDefault();
	}

	renderPic(){
		const { onClickPicTarget, style, slide, transition } = this.props,
			  index = this.state.index,
			  data = this.data;
		if (slide) {
			const _data = data.slice()[index];
			return (	
				<li key={ index+typeof(index) } className="slide" 
						style={{ width:style.width, height:style.height}}
						onMouseEnter={ (e)=> this.ctrMouseEnter(e,index) }
						onMouseLeave={ (e)=> this.ctrMouseLeave(e,index) }
					>
		         	<a href={ _data.href||'javascript:;' } target={ onClickPicTarget }>
		         		<img alt={_data.title} title={_data.title} src={_data.src} />
		         	</a>
			    </li>
			)
		}else{
			
			if ( transition ) {
				const _data = data.slice()[index];
				return (	
					<li key={ index+typeof(index) } className="slide" 
							style={{ width:style.width, height:style.height}}
							onMouseEnter={ (e)=> this.ctrMouseEnter(e,index) }
							onMouseLeave={ (e)=> this.ctrMouseLeave(e,index) }
						>
			         	<a href={ _data.href||'javascript:;' } target={ onClickPicTarget }>
			         		<img alt={_data.title} title={_data.title} src={_data.src} />
			         	</a>
				    </li>
				)
			}else{
				return (
					data.map((v,i)=>(
						<li key={ i+typeof(i) } className="slide" 
							style={{ width:style.width, height:style.height, display:index===i ?'block':'none' }}
							onMouseEnter={ (e)=> this.ctrMouseEnter(e,i) }
							onMouseLeave={ (e)=> this.ctrMouseLeave(e,i) }
						>
				         	<a href={ v.href||'javascript:;' } target={ onClickPicTarget }>
				         		<img alt={v.title} title={v.title} src={v.src} />
				         	</a>
				        </li>
	        		))
	        	)
			}
		}
	}

	slideCtr(){
		let Ctr = [];
		const index = this.state.index, 
			  len = this.data.length;
		for(let i=0; i<len; i++){
    		if ( i===index ) {
    			Ctr.push(	
    				<li key={ i+typeof(i) } className='active' 
	    				onMouseEnter={ (e)=> this.ctrMouseEnter(e,i) }
	    				onMouseLeave={ (e)=> this.ctrMouseLeave(e,i) }
    				/>
    				);
    			continue;
    		}
        	Ctr.push(	
	        	<li key={ i+typeof(i) }
	        		onMouseEnter={ (e)=> this.ctrMouseEnter(e,i) }
	    			onMouseLeave={ (e)=> this.ctrMouseLeave(e,i) }
	        	/>
        	);
		}

		return Ctr;
	}
	
	render(){
		const { wrapClassName, slide, transition } = this.props;
		const pics = this.renderPic();
		const ctrs = this.slideCtr();
		
		let ret = null;

		if ( slide ) {
			return(
				<div className={ wrapClassName }>
					<ReactCSSTransitionGroup
					  component="ul"
					  className="rc-slide"
			          transitionName="slideLeftRight"
			          transitionEnterTimeout={500}
			          transitionLeaveTimeout={300}
			         >
			          { pics }
			        </ReactCSSTransitionGroup>
			        <ul className="rc-slide-ctr">
			        	{ ctrs }
			        </ul>
			    </div>
			)
		}else{
			if (transition) {
				ret =   <ReactCSSTransitionGroup
						  component="ul"
						  className="rc-slide"
				          transitionName="slideTransition"
				          transitionEnterTimeout={500}
				          transitionLeaveTimeout={300}
				         >
				          { pics }
				        </ReactCSSTransitionGroup>
				     
			}else{
				ret = <ul className="rc-slide" > { pics } </ul>
			}
			return(
				<div className={ wrapClassName }>
					{ret}
			        <ul className="rc-slide-ctr">
			        	{ ctrs }
			        </ul>
			    </div>
			)
		}
	}
}

SlidePic.propTypes = {
	style: PropTypes.object,
	wrapClassName: PropTypes.string,
	data: PropTypes.array.isRequired
}

SlidePic.defaultProps = {
	wrapClassName:'rc-slide-pic-wrap',
	onClickPicTarget:'_blank',
	autoPlay: true,
	delay: 3,	  //每隔多少秒自动播放
	transition: false,  //是否开启过渡动画
	slide: false,       //是否水平滑动轮播
	style:{
		width:780,
		height:235
	}
}

export default SlidePic;