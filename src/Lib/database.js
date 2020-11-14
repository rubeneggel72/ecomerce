export default function getProductFromDatabase(){
    
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(product)},2000)
        })
        

    }

const product=
[{"id":1,"product":"Sugar - Crumb","price":194,"stock":5},
{"id":2,"product":"Beer - Upper Canada Lager","price":102,"stock":5},
{"id":3,"product":"Scallops 60/80 Iqf","price":52,"stock":2},
{"id":4,"product":"Lentils - Green, Dry","price":122,"stock":11},
{"id":5,"product":"Wine - Zinfandel California 2002","price":116,"stock":10},
{"id":6,"product":"Flavouring Vanilla Artificial","price":196,"stock":19},
{"id":7,"product":"Bread - Hot Dog Buns","price":267,"stock":19},
{"id":8,"product":"Duck - Whole","price":100,"stock":17},
{"id":9,"product":"Peas - Frozen","price":263,"stock":18},
{"id":10,"product":"Oil - Sunflower","price":266,"stock":18},
{"id":11,"product":"Ocean Spray - Ruby Red","price":202,"stock":12},
{"id":12,"product":"Carrots - Purple, Organic","price":194,"stock":12},
{"id":13,"product":"Blouse / Shirt / Sweater","price":64,"stock":1},
{"id":14,"product":"Dehydrated Kelp Kombo","price":80,"stock":5},
{"id":15,"product":"Cheese - Taleggio D.o.p.","price":242,"stock":2},
{"id":16,"product":"Apples - Spartan","price":264,"stock":1},
{"id":17,"product":"Stock - Fish","price":158,"stock":0},
{"id":18,"product":"Raspberries - Frozen","price":229,"stock":8},
{"id":19,"product":"Bread - Pumpernickle, Rounds","price":92,"stock":14},
{"id":20,"product":"Veal - Liver","price":96,"stock":19}]
