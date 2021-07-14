import React, { useState, useEffect } from 'react';
import os from 'os';


// todo: 此方式获取IP有问题 有待改进
const Page = () => {
    const [ip, setIp] = useState('')
    useEffect(() => {
        const ip = os.networkInterfaces().en0[0].address
        const options = process.argv.slice(2)
        if (options[0] === '-v') {
            console.log('v1.0.0')
        } else {
            setIp(ip)
        }
    }, [])

    return (
        <span>你的IP: {ip}</span>
    )
} 

export default Page