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


// import React from 'react';
import React from 'react';
import css from '../css/App.scss'

import {
  sum
} from 'utils/math'

const App = () => <div className={css.gm}>
  <div className={css.title}>Hello World!&nbsp;🙂</div>
  <div className={css.subTitle}>by Webpack-Evo {sum(Date.now(), 1)}</div>
</div>

export default App
