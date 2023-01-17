export function empty(element){
    if (!element || element.trim().length === 0) return true;
}

export function notFound(element) {
    if (element === undefined) return true
}

export function notString(element){
    if (typeof(element) !== "string") return true 
}

export function notNumber(element){
    if (typeof(element) !== "number") return true 
}