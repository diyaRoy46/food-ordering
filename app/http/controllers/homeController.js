const Menu = require('../../models/menu')
function homeController(){
    return{
        index(req, res){
            Menu.find().then(function(food){
                console.log(food)
                return res.render('home', {food:food})
            })
        }
        
    }
}

module.exports = homeController