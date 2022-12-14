export type InteractionMethod = 'phone' | 'email';
export type CustomerType = 'none' | 'personal' | 'business';
export type Status = 'customer' | 'prospect' | 'purchased';
export interface Customer {
  customerId: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  type: CustomerType;
  preferredContactMethod: InteractionMethod;
  statusCode: string;
  lastContactDate: string; // I
}
