import React from 'react';

function FatherComponent({ children }){
    const newChildren = React.cloneElement(children, { age: 18})
    console.log(newChildren, 'newChildren');
    return <div> { newChildren } </div>
}

function SonComponent(props){
    return <div>hello,world</div>
}

class Page extends React.Component{    
    render(){      
        return (
            <FatherComponent>
                <SonComponent name="alien"  />
            </FatherComponent>
        )
    }
}

export default Page