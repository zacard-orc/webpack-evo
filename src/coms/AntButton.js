/*
 * @authror : Leiyin.lin
 * @Date : 2020-10-07
 * @Project : webpack-evo
 * @CorpChn : 上海珺程网络科技有限公司
 * @CorpEng : JadeProgram.Shanghai,Ltd.Co
 * @CorpBu : R&D
 * @WebSite : http://shjson.top
 * @WeChat : llysonylin2012
 * @DescriptionMain : xxx,xxx
 * @Description : ...
 */

import React from 'react';



import {
  Alert,
  Button,
  DatePicker,
} from 'antd';

const AntButton = () =>  {
  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  return (
    <div>
      <h4>Ant Design</h4>
      <p>
        <Button type="primary">Button</Button>
      </p>
      <p>
        <DatePicker onChange={onChange} />
      </p>
      <p>
        <Alert message="Warning Text" type="warning" />
      </p>
    </div>
  )
}

export {
  AntButton
}
