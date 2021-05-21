import React from 'react';

class Text extends React.Component{
    render(){
        return <div>hello,world</div>
    }
}
// function WarpComponent(props){
//     console.log(props.children)
//     return props.children
// }
// function Page(){
//     return <div style={{ marginTop:'50px' }} >
//         <WarpComponent>
//             {/* <Text/>
//             <Text/>
//             <Text/> */}

//             { new Array(3).fill(0).map((_, index)=><Text key={index}/>) }
//             <span>hello,world</span>

//         </WarpComponent>
//     </div>
// }

function WarpComponent(props) {
    const newChildrenArray = React.Children.toArray(props.children)
    console.log(newChildrenArray, 'newChildrenArray')
    return newChildrenArray
}
function Page() {
    return <div style={{ marginTop: '50px' }} >
        <WarpComponent>
        { 
            new Array(3).fill(0).map((item,index)=> new Array(2).fill(1).map((item,index1)=> {
                return <Text key={index+index1} />
            })) }

            <span>hello,world</span>
        </WarpComponent>
    </div>
}

export default Page