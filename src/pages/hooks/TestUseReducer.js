/** @format */

import {useReducer, useMemo} from 'react'
import {Form, Input, Button} from 'antd'

const Page = () => {
  const [query, dispatchQuery] = useReducer((state, action) => {
    const {payload, type} = action
    switch (type) {
      case 'update':
        return {
          ...state,
          ...payload,
        }
      default:
        break
    }
  }, {})
  const list = useMemo(() => {
    if (query.username && query.tel) return [1, 2, 3]
    else return []
  }, [query])

  const onFinish = values => {
    console.log('Success:', values)
    dispatchQuery({
      type: 'update',
      payload: values,
    })
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div>
      <Form layout="inline" name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item label="username" name="username">
          <Input />
        </Form.Item>

        <Form.Item label="tel" name="tel">
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            search
          </Button>
        </Form.Item>
      </Form>
      <ul>{list && list.length > 0 && list.map(item => <li key={item}>{item}</li>)}</ul>
    </div>
  )
}

export default Page
