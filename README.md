# PatientHospitalVerification

**Contract Address:** [Insert Contract Address Here]

## Project Title
Patient-Hospital Verification Smart Contract on Aptos Blockchain

## Project Description
The `PatientHospitalVerification` module is a decentralized application (dApp) built using the Move programming language and deployed on the Aptos blockchain. This smart contract facilitates the secure registration and verification of patients by hospitals. Hospitals can verify patients' identities, and the verification status is securely stored on the blockchain. The module ensures data integrity, security, and privacy for patient information while allowing hospitals to manage verified patients efficiently.

## Key Features

- **Patient Registration:** Patients can be registered by their details such as name, age, and medical condition.
- **Patient Verification:** Hospitals can verify the identity of registered patients. Verified patients are tracked within the hospital's record.
- **Data Security:** All patient and hospital data is stored securely on the blockchain, ensuring immutability and privacy.
- **Authorization Management:** Only hospitals are authorized to verify patients. Patients cannot self-verify.
- **Verification Status:** The verification status of a patient can be queried at any time.

## Project Vision
The vision behind the `PatientHospitalVerification` module is to create a reliable and secure system where hospitals can verify patient identities with confidence. By leveraging the capabilities of the Aptos blockchain and the Move programming language, this project aims to streamline the verification process, ensuring that only authorized hospitals can verify patients. This reduces the risk of identity fraud and enhances trust in the healthcare system.

## Usage

### 1. Registering a Patient
A patient can be registered by calling the `register_patient` function with the appropriate details (name, age, condition). The patient's data is stored under the signer's account.

### 2. Creating a Hospital
A hospital entity can be created by calling the `create_hospital` function. This initializes an empty list of verified patients associated with the hospital's account.

### 3. Verifying a Patient
Hospitals can verify a patient by calling the `verify_patient` function. The patient's verified status is updated, and their address is added to the hospital's list of verified patients.

### 4. Checking Verification Status
To check if a patient is verified, the `is_patient_verified` function can be called, returning a boolean value.

### 5. Retrieving Verified Patients
Hospitals can retrieve the list of verified patients by calling the `get_verified_patients` function.

## Error Codes

- **EALREADY_VERIFIED:** Error code `1` indicates that the patient has already been verified.
- **ENOT_FOUND:** Error code `2` indicates that the patient or hospital was not found (currently not implemented in this version).
- **ENOT_AUTHORIZED:** Error code `3` indicates an unauthorized action (currently not implemented in this version).

## Future Enhancements
- Implementing additional error handling for cases such as non-existent patients or unauthorized verification attempts.
- Adding support for multiple hospitals managing a shared patient database.
- Enhancing security features to prevent unauthorized data access.

---

Feel free to customize the contract address and other sections as needed.
