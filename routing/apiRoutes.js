var friendsData = require("../app/data/friends");
module.exports = function (app) {

    app.get("/api/table", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/table", function (req, res) {
        
        friendsData.push(req.body);
        res.json(true);

        // var array = [];
        // var kv = [];
        // for (i = 0; i < friendsData.length - 2; i++) {
        //     console.log(friendsData[i].name);
        //     console.log(friendsData[i].scores);
        //     var a = friendsData[friendsData.length - 1].scores;
        //     var b = friendsData[i].scores;
        //     var sum = 0;
            
        //     for (j = 0; j < 10; j++) {
        //         // console.log(friendsData[friendsData.length-1].scores[j]);
        //         // console.log(friendsData[i].scores[j]);
        //         var diff = Math.abs(friendsData[friendsData.length - 1].scores[j] - friendsData[i].scores[j]);
        //         sum = sum + diff;
        //     }
        //     console.log("Difference: " + sum);
        //    array.push(sum);
        //    kv.push({name:friendsData[i].name,Difference:sum});
        //     sum = 0;
            
        // }
        // console.log(kv);
        // console.log(array);
        // var min = Math.min.apply(Math, array)
        // console.log("Least Difference: "+min)
        // for(k=0;k<kv.length-1;k++)
        // {
            
        //     if(kv[k].Difference==min)
        //     {
        //         console.log("Matched: "+kv[k].name);
        //     }
        // }

    });


};
