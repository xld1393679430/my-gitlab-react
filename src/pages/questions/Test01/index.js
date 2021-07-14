import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import list from './data.js';

const Page = () => {
    const [data, setData] = useState(list)
    const columns = [
        {
            label: "日期",
            dataIndex: "date",
            width: 180
        },
        {
            label: "姓名",
            dataIndex: "name",
            width: 180
        },
        {
            label: "地址",
            dataIndex: "address"
        }
    ]

    const addData = () => {
        let obj = {
            id: 10,
            date: '2018-05-07',
            name: '小明',
            address: ''
        };
        // data.push(obj);
        setData((prev) => prev.concat(obj))
    }

    return (
        <>
            <Table
                style={{ width: '100%' }}
                columns={columns}
                dataSource={data}
                rowKey='id'
            />
            <button onClick={addData}>添加</button>
            <div>1234</div>
        </>
    )
}

export default Page