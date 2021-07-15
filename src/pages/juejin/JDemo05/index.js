import React, { useRef } from 'react'
import Form from './components/Form'
import FormItem from './components/FormItem'
import Input from './components/Input'

function Page(props) {
    const form = useRef()

    const handleSubmit = () => {
        form.current.submitForm((data) => {
            console.log(data, 'data')
        })
    }

    const handleReset = () => {
        form.current.resetForm()
    }

    return (
        <div>
            <h4>JDemo05</h4>
            <Form ref={form}>
                <FormItem label="username" name="username">
                    <Input name="username" />
                </FormItem>
                <FormItem label="password" name="password">
                    <Input name="password" />
                </FormItem>
            </Form>
            <button onClick={handleSubmit}>提交</button>
            <button onClick={handleReset}>重置</button>
        </div>
    )
}

export default Page