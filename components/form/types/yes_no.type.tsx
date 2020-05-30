import {Form, Input} from 'antd'
import React from 'react'
import {FieldTypeProps} from './type.props'

export const YesNoType: React.FC<FieldTypeProps> = ({field}) => {
  // TODO add switch
  return (
    <div>
      <Form.Item
        label={'Default Value'}
        name={[field.id, 'value']}
        rules={[
          { required: field.required, message: 'Please provide Information' },
        ]}
        labelCol={{ span: 6 }}
      >
        <Input />
      </Form.Item>
    </div>
  )
}
