const goods ={
    0: {
        image: "https://images.pexels.com/photos/1290515/pexels-photo-1290515.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        article: "G235",
        name: "Zootiz 8",
        price: 699.99,
        brand: "GoroBo",
        screen: "8inch",
        camera:"15mpx",
        memory:"164Gb",
        size:"16х15inch",
        otherChar: "OS: Skirtibits12, Ram: 8Gb, Bluetooth: 5.0, GPS: yes, USB: yes, Charge: up to 25h",
        color:"white",
        inStock: 12
    },
    1: {
        image: "https://images.pexels.com/photos/1260239/pexels-photo-1260239.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        article: "G335",
        name: "Bibjon z T K",
        price: 199.77,
        brand: "Tulka3",
        screen: "26inch",
        camera:"11mpx",
        memory:"256Gb",
        size:"12х22inch",
        otherChar: "OS: Skirtibits12, Ram: 8Gb, Bluetooth: 5.0, GPS: yes, USB: yes, Charge: up to 25h",
        color:"black",
        inStock: 11
    },
    2: {
        image: "https://images.pexels.com/photos/837268/pexels-photo-837268.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        article: "Z234",
        name: "Kira_13",
        price: 197.13,
        brand: "MiraPushhh",
        screen: "5inch",
        camera:"12mpx",
        memory:"1024Gb",
        size:"33х15inch",
        otherChar: "OS: Skirtibits12, Ram: 8Gb, Bluetooth: 5.0, GPS: yes, USB: yes, Charge: up to 25h",
        color:"black",
        inStock: 22
    },
    3: {
        image: "https://images.pexels.com/photos/1398339/pexels-photo-1398339.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        article: "K342",
        name: "Glen N7",
        price: 599.67,
        brand: "KORORO",
        screen: "11inch",
        camera:"33mpx",
        memory:"512Gb",
        size:"11х7inch",
        otherChar: "OS: Birko, Ram:26Gb, Bluetooth: 5.0, GPS: yes, USB: yes, Charge: up to 35h",
        color:"white",
        inStock: 32
    },
    4: {
        image: "https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        article: "N341",
        name: "Jonny_Ser",
        price: 233.33,
        brand: "ZZZ",
        screen: "43inch",
        camera:"22mpx",
        memory:"255Gb",
        size:"22х16inch",
        otherChar: "OS: Skirtibits12, Ram: 18Gb, Bluetooth: 3.0, GPS: yes, USB: no, Charge: up to 15h",
        color:"black",
        inStock: 6
    },
    5: {
        image: "https://images.pexels.com/photos/786009/pexels-photo-786009.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        article: "V3213",
        name: "Noble1",
        price: 245.98,
        brand: "YuEX",
        screen: "12inch",
        camera:"19mpx",
        memory:"500Gb",
        size:"26х12inch",
        otherChar: "OS: Bulkin, Ram: 82Gb, Bluetooth: 3.0, GPS: no, USB: no, Charge: up to 9h",
        color:"white",
        inStock: 13
    }
}
//need to write sql in this way: SELECT * FROM goods WHERE "instock" > 0;
export function getGoods(){
    return goods;
}