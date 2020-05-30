import {Form, Input} from 'antd'
import React from 'react'
import {AdminFieldTypeProps} from './type.props'

export const LinkType: React.FC<AdminFieldTypeProps> = props => {
  return (
    <div>
      <Form.Item
        label={'Default Link'}
        name={[props.field.name, 'value']}
        rules={[
          { type: 'url', message: 'Must be a valid URL' }
        ]}
        labelCol={{ span: 6 }}
      >
        <Input type={'url'} />
      </Form.Item>
    </div>
  )
}
