import React from 'react';
import { Button, Radio, Card } from 'antd';

export default class Buttons extends React.Component {
  render(){
    return (
      <div>
        <Card>
              <Button type="primary">Primary</Button>
              <Radio.Group value="small">
                <Radio.Button value="large">Large</Radio.Button>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
              </Radio.Group>
        </Card>
      </div>
    )
  }
}
