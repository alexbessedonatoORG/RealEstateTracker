export interface TenantRow {
  id: string;
  property_id: string;
  full_name: string;
  email: string | null;
  phone: string | null;
  created_at: string | null;
  end_of_contract: string | null;
  property?: { name: string };
}

export interface Tenant {
  id: string;
  propertyId: string;
  property: string;
  fullName: string;
  email: string | null;
  phone: string | null;
  createdAt: string | null;
  endOfContract: string | null;
}

