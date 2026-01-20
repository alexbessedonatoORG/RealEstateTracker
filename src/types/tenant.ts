export interface Tenant {
  id: string;
  property: string;
  property_id: string;
  name: string;
  email: string;
  phone: string;
  endOfContract: string;
}

export interface AddTenantFormValues {
  property: string;
  property_id: string;
  name: string;
  email: string;
  phone: string;
  endOfContract: string;
}

