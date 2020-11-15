export default function getProductFromDatabase(){
    
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(product)},2000)
        })
    }
const product='[{"name":"Soup - Knorr, Ministrone","price":133,"stock":60},{"name":"Chicken - Whole Fryers","price":201,"stock":13},{"name":"Pepper - Paprika, Spanish","price":222,"stock":37},{"name":"Plasticforkblack","price":152,"stock":78},{"name":"Wine - White, Gewurtzraminer","price":224,"stock":68},{"name":"Wine - Barbera Alba Doc 2001","price":277,"stock":21},{"name":"Pasta - Ravioli","price":148,"stock":71},{"name":"Lettuce - Lolla Rosa","price":280,"stock":46},{"name":"Lamb Tenderloin Nz Fr","price":280,"stock":5},{"name":"Carbonated Water - Cherry","price":194,"stock":20},{"name":"Flower - Commercial Bronze","price":269,"stock":96},{"name":"Bread Roll Foccacia","price":148,"stock":56},{"name":"Tomato - Plum With Basil","price":240,"stock":52},{"name":"Pail - 15l White, With Handle","price":160,"stock":96},{"name":"Pears - Bosc","price":86,"stock":57},{"name":"Alize Gold Passion","price":296,"stock":91},{"name":"Eggplant Oriental","price":290,"stock":75},{"name":"Rice - Jasmine Sented","price":274,"stock":99},{"name":"Chambord Royal","price":132,"stock":51},{"name":"Wine - Masi Valpolocell","price":73,"stock":47}]'
