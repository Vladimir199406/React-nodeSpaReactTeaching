
export async function getGoods(){
    let response = await fetch("http://nodespareact.tsallagov.beget.tech/getMobiles");
    let goods = await response.json();
    return goods;
}