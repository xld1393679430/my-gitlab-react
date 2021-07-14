import React, { useRef, forwardRef } from 'react';
import Form from './components/Form'
import FormItem from './components/FormItem'
import Input from './components/Input'

const Page = (props, ref) => {
    const form = useRef(null)

    const submit = () => {
        console.log(ref, 'ref');
        // form.current.submitForm((data) => {
        //     console.log(data, 'data');
        // })
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
            <button onClick={submit}>提交</button>
        </div>
    )
}

export default forwardRef(Page)