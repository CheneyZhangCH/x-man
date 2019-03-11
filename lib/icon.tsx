import React from 'react';

// import './icons/wechat.svg';
// import './icons/alipay.svg';
// import './icons/dingtalk.svg';
// import './icons/qq.svg';
// 静态引入，有利于tree-shaking，去除不需要打包的模块，例如 import _filter from 'lodash/filter'
// vs
// 非静态引入，书写方便
// import './importAllIcons'


import './importAllIcons';

interface IconProps {
  name: string;
}

// 如何生命一个react函数组件接受一个类型
// 生命Icon为react函数组件，接受参数 类型IconProps
const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <span>
      <svg>
        <use xlinkHref={`#${props.name}`}/>
      </svg>
    </span>
  );
};

export default Icon;