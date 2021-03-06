/*
 * @authror : Leiyin.lin
 * @Date : 2020-10-05
 * @Project : my-app-r2
 * @CorpChn : 上海珺程网络科技有限公司
 * @CorpEng : JadeProgram.Shanghai,Ltd.Co
 * @CorpBu : R&D
 * @WebSite : http://shjson.top
 * @WeChat : llysonylin2012
 * @DescriptionMain : xxx,xxx
 * @Description : ...
 */


import React from 'react';

import css from '../css/App.scss'
import imgPlanet from './planet.png'

import {
  sum
} from 'utils/math'

import {
  AntButton
} from '@/coms/AntButton'

console.log('define ', JSON.stringify(process.env))

const App = () => <div className={css.gm}>
  <div className={css.title}>Hello World!&nbsp;🙂</div>
  {/* eslint-disable-next-line no-undef */}
  <div className={css.subTitle}>by Webpack-Evo {sum(Date.now(), 1)} / {process.env.ver}</div>
  <div className={css.imgBar}>
    <div className={css.imgBlock}>
      <img className={css.imgFix} src={imgPlanet}/>
    </div>
    <div className={css.imgBlock}>
      <img className={css.imgFix} src={require('./lion.svg')}/>
    </div>
    <div className={css.imgBlock}>
      <img className={css.imgFix} src={require('./beats.svg')}/>
    </div>
  </div>
  <div className={css.demoBar}>
    <div className={css.demoBlock}>
      <AntButton/>
    </div>
  </div>
</div>

export default App
