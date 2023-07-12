import React, { Fragment,useState } from 'react';
import Upper from './components/upperpart';
import Lower from './components/lower';

const Arokiya = () => {
    
    const [dummyLists,setDummyLists] = useState([]);

    const addTextHandler = (someaddedtext) => {
        setDummyLists(preList => {
                const updatedList = [...preList];                
            updatedList.unshift({ text: someaddedtext, id:Math.random().toString()});
            return updatedList;                
            });
    };
// delete the items
    const deleteThisItem = (listId) => {
        setDummyLists(preList => {
            return preList.filter(f => f.id !== listId);
        });
    };

    return <Fragment>
        <Upper addText={addTextHandler}/>
        <Lower items={dummyLists} onDeleteTerm={deleteThisItem} />
    </Fragment>
}
export default Arokiya;