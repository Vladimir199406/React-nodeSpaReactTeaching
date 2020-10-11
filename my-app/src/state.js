{/* taking data of MOBILES from  server Below*/}
export async function getMobiles(){
    let response = await fetch("http://nodespareact.tsallagov.beget.tech/getMobiles");
    let mobiles = await response.json();
    return mobiles;
}
{/* taking data of MOBILES from  server Above*/}