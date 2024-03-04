
const Products = require('../models/product');


const getAllProducts = async (req,res) => {
    const { name, company, feature, sort, select } = req.query;
    const queryObject = {};

    if(company){
        queryObject.company = company;
    }
    if(name){
        queryObject.name = {$regex: name,$options: "i"};
    }
    if(feature){
        queryObject.name = feature;
    }

    
    let apiData = Products.find(queryObject);


    if(sort){
        // let sortFix = sort.replace(","," ");
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix);
    }

    if(select){
        // let selectFix = select.replace(","," ");
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;


    let skip = Number(page - 1) * limit;

    apiData = apiData.skip(skip).limit(limit);


    console.log(req.query);

    // const myData = await Products.find({name: "clock"});
    const myData = await apiData;
    res.status(200).json({myData, nbHits: myData.length});
    // res.status(200).json({msg: 'I am getting all products'});
    
};
const getAllProductsTesting = async (req,res) => {

    const myData = await Products.find(req.query).select("name company");
    res.status(200).json({ myData });

};


module.exports = {getAllProducts,getAllProductsTesting};