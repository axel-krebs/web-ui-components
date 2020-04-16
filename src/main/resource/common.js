function EventBusParticipator (source) {
    return function() {
        source.apply(this,arguments);
        return source;
    }
}
export const generateContainerID = (size) => {
    if(size == null || typeof size == 'undefined') {
        size = 1000000;
    }
    let rand = Math.random() * size;
    let result = Math.floor(rand); // remove floating point
    return function() {
        return { value: result };
    };
}