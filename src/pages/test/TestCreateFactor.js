/** @format */

import React from 'react'

const Text = React.createFactory(() => <div>hello,world</div>)

function Page() {
    return (
        <div style={{marginTop: '50px'}}>
            <Text />
        </div>
    )
}

export default Page
