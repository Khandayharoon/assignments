// with nonce find hash starts with 5 zeros

const crypto =  require('crypto');

function FindHashWthNonceAndPerFix(perfix){
    let nonce = 0;
    let default_String = "HaroonKhanday";

    while(true){
        let nonce_String = default_String +  nonce.toString();
        let hash = crypto.createHash('sha256').update(nonce_String).digest('hex');

        if(hash.startsWith(perfix)){
            return {input_Nonce : nonce_String , Hash : hash};
        }
        nonce++;
    }
}

const result = FindHashWthNonceAndPerFix('00000');
console.log(`Input_Nonce : ${result.input_Nonce}`);

console.log(`Hash : ${result.Hash}`);
