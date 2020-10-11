{/* taking data of MOBILES from  server Below*/}

export async function getMobiles(){
    let response = await fetch("http://nodespareact.tsallagov.beget.tech/getMobiles");
    let mobiles = await response.json();
    return mobiles;
}
{/* taking data of MOBILES from  server Above*/}


{/* taking data of of ONE mobile item  from  server Below*/}
export async function getOneMobileItem(vendor_code){
    let formData = new FormData();
    formData.append("vendor_code", vendor_code)
    let response = await fetch("http://nodespareact.tsallagov.beget.tech/getOneMobileItem", {
        method: "POST",
        body: formData
    })
    let oneMobileItem = await response.json();
    return oneMobileItem;
}
{/* taking data of ONE mobile item from  server Above*/}