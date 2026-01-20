export type FileContractType = "PropertyContracts" | "InsuranceContracts";

export interface DocumentUploadProps {
  propertyId: string;
  property: string;
  type?: FileContractType;
}

export interface FileUploadSupaServiceProps {
  property: string;
  file: File;
  type?: FileContractType;
}

export interface SignedUrlLinkProps {
  propertyURL: string;
  type?: FileContractType;
}

