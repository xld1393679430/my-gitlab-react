import { useState, useMemo, memo} from 'react';

const Page =  () => {
    let [isChild, setChild] = useState(1);
    return (
        <div>
            <Child isChild={isChild} />
            <button onClick={() => setChild(isChild+1)}>改变Child</button>
        </div>
    );
}

let Child = memo((props) => {
    const dom = useMemo(() => {
        return (
            <div>
                child - {props.isChild}
            </div>
        );
    }, [])
    
    return dom
})

export default Page