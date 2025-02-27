const data = {
    message:"hello",
    longMessage:"life is beautiful"

};

const handler = {
    set(target , key , value) {
        if( key === 'message'){
           target.longMessage = value + "amir";
        }
        target.message = value;
    },
};


const proxy = new Proxy( data , handler);
proxy.message = "yogi";
console.log(proxy.longMessage)