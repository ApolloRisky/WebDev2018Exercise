var mDOM = document.getElementById('nrow');
var nDOM = document.getElementById('ncol');

var GenerateResult = function(){
    if(nDOM && mDOM){
        var n = parseInt(nDOM.value);
        var m = parseInt(mDOM.value);
      //  console.log(n);console.log(m); For DEBUG
        var txt="";
        for(var i=1;i<=n;i++){
            txt+='<div class="table-item">'
            for (var j=1;j<=m;j++){
                txt+= i + ' x ' + j + ' = ' + i*j + '<br>';
            }
            txt+='</div>';
        }
        document.getElementById('result').innerHTML = txt;
    }
}