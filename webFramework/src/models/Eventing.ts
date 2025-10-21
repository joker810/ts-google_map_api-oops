
export type Callback = () => void;

export class Eventing{
    events: { [key: string]: Callback[] } = {}

    // i have used arrow function here and there becos to bind this keyword in class...if used outside without arrow or bind throws undefined..
    on=(eventName: string, callback: Callback):void=> {
            const handlers = this.events[eventName] || [];
            handlers.push(callback);
            this.events[eventName] = handlers;
    
        }
    
        trigger=(eventName: string): void =>{
            const handlers = this.events[eventName];
    
            if (!handlers || handlers.length === 0) return;
    
            for(let callback of handlers)callback()
            // handlers.forEach(callback => callback());
        }

        // get(key){
            
        // }
} 