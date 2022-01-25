type DateErrorType = {
    type: string;
    thrownOn: string;
    reason: string;
}

type CredentialProofType = {
    type: string,
    created?: undefined | null | string | number | Date;
    verificationMethod: string;
    proofPurpose: string;
    jws: string;
}

type CredentialType = {
    '@context': string[];
    id: string;
    type: string[];
    issuer: string;
    credentialSubject: any;
    issuanceDate?: undefined | null | string | number | Date;
    proof?: CredentialProofType;
}