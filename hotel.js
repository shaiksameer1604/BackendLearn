const EventEmitter=require('node:events')
class Hotel extends EventEmitter{
    constructor(){
        super()
        this.orderCount=0
    }
    order(type,size){
        this.orderCount++
        this.emit('order',type,size)
    }
    displayOrderCount(){
        console.log(`count of orders:${this.orderCount}`)
    }
}
module.exports=Hotel;