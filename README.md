# react-slide-pic
react-slide-pic component

# Screenshot
![image](https://github.com/yongbingz/react-slide-pic/blob/master/demo/screenshot/1.png)

# Usage
Actual directory of tooltip components in the import project, You may use it like this:

```
import SlidePic from '../src/SlidePic'

const dataPic = [
			{src:'http://dimg04.c-ctrip.com/images/7005090000004885r817A_780_235_57.jpg',href:'#',title:'img1'},
			{src:'http://dimg04.c-ctrip.com/images/7002070000002qkq2D9A8_780_235_42.jpg',href:'#',title:'img2'},
			{src:'http://dimg04.c-ctrip.com/images/700k090000003q9nu2B80_780_235_57.jpg',title:'img3'}
		];
<SlidePic data={ dataPic } />
```


# API
react-slide-pic props
<table>
    <thead>
    <tr>
        <th>name</th>
        <th>type</th>
        <th>default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>style</td>
          <td>Object</td>
          <td></td>
          <td>slidePic's style, e.g. { width:780, height:235 }</td>
        </tr>
        <tr>
          <td>wrapClassName</td>
          <td>String</td>
          <td></td>
          <td>slidePic's wrap custom className</td>
        </tr>
        <tr>
          <td>onClickPicTarget</td>
          <td>String</td>
          <td>_blank</td>
          <td>Click the picture in the window to open the way</td>
        </tr>
        <tr>
          <td>autoPlay</td>
          <td>Boolean</td>
          <td>true</td>
          <td>Whether to play automatically</td>
        </tr>
        <tr>
          <td>delay</td>
          <td>Number</td>
          <td>3</td>
          <td>Every few seconds automatically play</td>
        </tr>
        <tr>
          <td>transition</td>
          <td>Boolean</td>
          <td>false</td>
          <td>Whether to turn on transition animation</td>
        </tr>
        <tr>
          <td>slide</td>
          <td>Boolean</td>
          <td>false</td>
          <td>Whether or not to rotate horizontally</td>
        </tr>
    </tbody>
</table>
#####Note: For web performance considerations, animation using ReactCSSTransitionGroup, open animation support, the browser supports CSS3 to normal experience

# Latest version
1.0.0

# License
MIT
