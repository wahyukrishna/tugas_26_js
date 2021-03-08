const tugas26 = () =>{
    var deret = [2,39,76,50,9,7,41,2,24,1,16];
    deret.forEach(function(item){
        deret = isFinite(deret);
        if(isFinite(deret)!=false){
             console.log('Angka',item,'NOT Infinity');
        }else{
            console.log('Angka',item,'Infinity');
        }
    })

}

tugas26();