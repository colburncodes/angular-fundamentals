
import { EntityStore, StoreConfig } from "@datorama/akita";
import { CustomerState } from "../store/customer-store/customer.store";


@Injectable({providedIn: 'root'});
@StoreConfig({ name: 'customers'})
export class CustomersStore extends EntityStore<CustomerState> {
  constructor() {
    super();
  }
}
