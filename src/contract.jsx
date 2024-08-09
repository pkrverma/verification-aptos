import React, { useState, useEffect } from 'react';
import { AptosClient, AptosAccount, HexString, TxnBuilderTypes, BCS } from 'aptos';

const client = new AptosClient('https://fullnode.devnet.aptoslabs.com');

const contractAddress = "0xde131afd30917653e406718a7d5b936b2cded8ef1cafc100f6d647077260a18c";

const App = () => {
    const [account, setAccount] = useState(null);

    useEffect(() => {
        const initAccount = async () => {
            if (window.aptos) {
                try {
                    const response = await window.aptos.connect();
                    const address = response.address;
                    const publicKey = response.publicKey;
                    setAccount({ address, publicKey });
                } catch (error) {
                    console.error("Error initializing account:", error);
                }
            } else {
                console.log("Aptos object not found. Please install a suitable wallet.");
            }
        };

        initAccount();
    }, []);

    const createInsurance = async (insuredBy, reason, amount) => {
        try {
            const payload = {
                type: "script_function_payload",
                function: `${contractAddress}::Insurance::create_insurance`,
                type_arguments: [],
                arguments: [insuredBy, reason, amount],
            };

            const transaction = await window.aptos.signTransaction(payload);
            const response = await client.submitTransaction(transaction);
            await client.waitForTransaction(response.hash);
            alert('Insurance created successfully');
        } catch (error) {
            console.error('Error creating insurance:', error);
            alert(error.message);
        }
    };

    const approveInsurance = async (id) => {
        try {
            const payload = {
                type: "script_function_payload",
                function: `${contractAddress}::Insurance::approve_insurance`,
                type_arguments: [],
                arguments: [id],
            };

            const transaction = await window.aptos.signTransaction(payload);
            const response = await client.submitTransaction(transaction);
            await client.waitForTransaction(response.hash);
            alert('Insurance approved successfully');
        } catch (error) {
            console.error('Error approving insurance:', error);
            alert(error.message);
        }
    };

    const disapproveInsurance = async (id) => {
        try {
            const payload = {
                type: "script_function_payload",
                function: `${contractAddress}::Insurance::disapprove_insurance`,
                type_arguments: [],
                arguments: [id],
            };

            const transaction = await window.aptos.signTransaction(payload);
            const response = await client.submitTransaction(transaction);
            await client.waitForTransaction(response.hash);
            alert('Insurance disapproved successfully');
        } catch (error) {
            console.error('Error disapproving insurance:', error);
            alert(error.message);
        }
    };

    const registerUser = async (address, isDoctor) => {
        try {
            const payload = {
                type: "script_function_payload",
                function: `${contractAddress}::User::register`,
                type_arguments: [],
                arguments: [address, "defaultName", "defaultPassword", isDoctor],
            };

            const transaction = await window.aptos.signTransaction(payload);
            const response = await client.submitTransaction(transaction);
            await client.waitForTransaction(response.hash);
            alert('User registered successfully');
        } catch (error) {
            console.error('Error registering user:', error);
            alert(error.message);
        }
    };

    if (!account) return <div>Loading...</div>;

    return (
        <div className="App">
            <InsuranceForm title="Create Insurance" onSubmit={createInsurance} />
            <InsuranceForm title="Approve Insurance" onSubmit={approveInsurance} />
            <InsuranceForm title="Disapprove Insurance" onSubmit={disapproveInsurance} />
            <RegistrationForm onSubmit={registerUser} />
        </div>
    );
};

const InsuranceForm = ({ title, onSubmit }) => {
    const [id, setId] = useState('');
    const [insuredBy, setInsuredBy] = useState('');
    const [reason, setReason] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title === "Create Insurance") {
            onSubmit(insuredBy, reason, amount);
        } else {
            onSubmit(id);
        }
    };

    return (
        <div>
            <h2>{title}</h2>
            <form onSubmit={handleSubmit}>
                {title === "Create Insurance" ? (
                    <>
                        <input type="text" value={insuredBy} onChange={(e) => setInsuredBy(e.target.value)} placeholder="Insured By Address" required />
                        <input type="text" value={reason} onChange={(e) => setReason(e.target.value)} placeholder="Reason" required />
                        <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
                    </>
                ) : (
                    <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="Insurance ID" required />
                )}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

const RegistrationForm = ({ onSubmit }) => {
    const [address, setAddress] = useState('');
    const [isDoctor, setIsDoctor] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(address, isDoctor);
    };

    return (
        <div>
        </div>
    );
};

export default App;
