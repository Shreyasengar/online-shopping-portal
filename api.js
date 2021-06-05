

var config = require('./dbconfig');
const sql = require('mssql');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);


app.set("view engine", "ejs");

var email,pass,name,adrs,phn,er,curuser,itemid,current;
var item_id=[];
var item_name=[];
var quantity=[];
var cost=[];


app.get("/", function(req, res){
    res.render("signup");
});

app.use(express.static(__dirname + '/public'));

app.post("/", function(req,res){
    email=req.body.email;
    pass=req.body.password;
    name=req.body.name;
    phn=req.body.tele;
    adrs=req.body.Address;

    addUsers().then(result => {
        console.log(result);
    })
    res.redirect("/login");
    
});

app.get("/login", function(req, res){
    res.render("login", {errormessage: er});
});

app.post("/login", function(req,res){
    email=req.body.email;
    pass=req.body.password;
    
    getUsers().then(result => {
        if (result[0]!=""){
            console.log(result)
            er=""
            curuser=email;
            res.redirect('/index')
        }
        else
            console.log('error')
            er="Incorrect username or password"
            res.redirect("/login")
            
            
    })
    

});


app.get("/index", function(req,res){
    res.render("index");
})
app.get("/electronics", function(req,res){
    res.render("electronics");
})

app.post("/electronics", function(req,res){
    itemid=req.body.itemid;
    console.log(itemid);
    console.log(curuser);

    addtocart().then(result => {
    })
    res.status(204).send();
})

app.get("/clothing", function(req,res){
    res.render("clothing");
})

app.post("/clothing", function(req,res){
    itemid=req.body.itemid;
    console.log(itemid);
    console.log(curuser);

    addtocart().then(result => {
    })
    res.status(204).send();
})

app.get("/ebooks", function(req,res){
    res.render("ebooks");
})

app.post("/ebooks", function(req,res){
    itemid=req.body.itemid;
    console.log(itemid);
    console.log(curuser);

    addtocart().then(result => {
    })
    res.status(204).send();
})

app.get("/cart", function(req,res){
    calctotal().then(result =>{
    showcart().then(result1 =>{
        console.log(result);
        console.log(item_id);
    res.render("cart", {item_id : item_id, item_name : item_name, quantity : quantity, cost : cost, subtotal : result });
})})})

app.get("/checkout", function(req,res){
    calctotal().then(result =>{
        var delivery=result+130;
        var card=result+30;
        res.render("checkout", {subtotal : result, cod : delivery, card : card, email : curuser });
    })
})

app.post("/checkout", function(req,res){
    current=req.body.clear;
    emptycart().then(result =>{
        console.log(current)
    })
    item_id=[];
    item_name=[];
    quantity=[];
    cost=[];
    res.status(204).send();
})


async function addUsers(){
    try{
        let pool = await sql.connect(config);
        let users = await pool.request().query("exec sp_add_user @email_id='"+email+"', @passwd='"+pass+"', @name='"+name+"', @address='"+adrs+"', @phone_number='"+phn+"';" );
        return users.recordsets;
    }
    catch (error){
        console.log(error);
    }
}

async function getUsers(){
    try{
        let pool = await sql.connect(config);
        let users = await pool.request().query("exec sp_user_login @email_id='"+email+"', @passwd='"+pass+"';" );
        return users.recordsets;
    }
    catch (error){
        console.log(error);
    }
}

async function addtocart(){
    try{
        let pool = await sql.connect(config);
        let data = await pool.request().query("exec sp_add_to_cart @email_id='"+curuser+"', @item_id='"+itemid+"';" );
        return data.recordsets;
    }
    catch (error){
        console.log(error);
    }
}

async function calctotal(){
    var sum=0;
    try{
        let pool = await sql.connect(config);
        let data = await pool.request().query("exec display_cart @email_id='"+curuser+"';" );
        for(let i=0;i<data.recordset.length;i++){
         sum+= data.recordset[i].subtotal;
        }
        return sum;
    }
    catch (error){
        console.log(error);
    }
}

async function showcart(){
    try{
        let pool = await sql.connect(config);
        let data = await pool.request().query("exec display_cart @email_id='"+curuser+"';" );
        for(let i=0;i<data.recordset.length;i++){
            item_id[i]= data.recordset[i].item_id;
            item_name[i]= data.recordset[i].item_name;
            quantity[i]=data.recordset[i].item_quantity;
            cost[i]=data.recordset[i].subtotal;
        }
    }
    catch (error){
        console.log(error);
    }
}

async function emptycart(){
    try{
        let pool = await sql.connect(config);
        let data = await pool.request().query("exec sp_checkout @email_id='"+current+"';" );
        return data.recordsets;
    }
    catch (error){
        console.log(error);
    }
}






var port = process.env.PORT || 9090;
app.listen(port);
console.log('Order API is runnning at ' + port);

