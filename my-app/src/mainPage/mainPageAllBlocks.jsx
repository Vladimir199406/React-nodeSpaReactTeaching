import React from 'react';
import mainPageHeader from "./mainPageHeader";
import mainPageMain from "./mainPageMain";
import mainPageFooter from "./mainPageFooter";

const mainPageAllBlocks=()=>{
    return (
        <div className="App">
            <header>
                {mainPageHeader()}
            </header>
            <main>
                {mainPageMain()}
            </main>
            <footer>
                {mainPageFooter()}
            </footer>
        </div>
    )
}

export default mainPageAllBlocks;