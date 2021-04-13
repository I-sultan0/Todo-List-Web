import React, { useState } from 'react';
import SaveAltIcon from '@material-ui/icons/SaveAlt';




const App = () => {


    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);

    };

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList('');
    }

    // function printDiv(printableArea) {
    //     var printContents = document.getElementById('printableArea').innerHTML;
    //     var originalContents = document.body.innerHTML;

    //     document.body.innerHTML = printContents;

    //     window.print();

    //     document.body.innerHTML = originalContents;
    // }

    return (

        <>
            <div className='main_div'>
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" placeholder='Add Items' required value={inputList} onChange={itemEvent} />
                    <button
                        onClick={listOfItems}>
                        <SaveAltIcon />
                    </button>
                    {/* <button onclick={printDiv('printableArea')} value="print a div!"><PrintIcon /></button> */}
                    <ol>

                        {
                            items.map((itemVal) => {
                                return (
                                    <>

                                        <li >{itemVal}</li>
                                        {/* <li id="printableArea">{itemVal}</li> */}
                                    </>
                                )
                            })
                        }
                    </ol>
                </div>

            </div>
        </>
    )
}

export default App
