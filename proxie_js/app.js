const data = {
    message:"hello",
    longMessage:"life is beautiful"

};

const handler = {
    set(target , key , value) {
        if( key === 'message'){
           target.longMessage = value + "amir";
        }else if(key === 'longMessage'){
            target.message += value;
        }
        target.message = "yogi"+value;
    },
};


const proxy = new Proxy( data , handler);
proxy.message = "yogi";

console.log(proxy.longMessage)
console.log(proxy.message)