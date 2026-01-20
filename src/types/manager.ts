export interface Manager {
  id: string;
  owner_id: string;
  name: string;
  company?: string;
  email?: string;
  phone?: string;
}

export interface AddManagerFormValues {
  name: string;
  company?: string;
  email?: string;
  phone?: string;
}
