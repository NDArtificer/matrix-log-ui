
import { ClientSummary } from './delivery-list/clientSummary';
import { Recipient } from './recipient';
export class DeliverySummary{
    id:number;
    client: ClientSummary;
    recipient: Recipient;
    tax:number;
    status:string; 
    recordDate: Date;
    endDate: Date;   
}