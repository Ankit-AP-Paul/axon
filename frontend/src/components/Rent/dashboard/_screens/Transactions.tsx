import React from 'react';

interface Transaction {
    duration: string;
    machineType: string;
    cost: string;
}

const trans: Transaction[] = [
    { "duration": "200mins", "machineType": "8GB RAM, 256GB SSD, 4 core CPU", "cost": "25tez" },
    { "duration": "400mins", "machineType": "16GB RAM, 256GB SSD, 4 core CPU", "cost": "48tez" }
];

export default function RentTransactions() {
    return (
        <div className="p-6 font-sans">
            <h2 className="text-center text-2xl font-semibold text-white mb-6">Rent Transactions</h2>

            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr className=" text-left text-white">
                            <th className="py-3 px-4 border-b">Duration</th>
                            <th className="py-3 px-4 border-b">Machine Type</th>
                            <th className="py-3 px-4 border-b">Cost (tez)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trans.map((ele, idx) => (
                            <tr key={idx} className={idx % 2 === 0 ? "text-white" : "text-white"}>
                                <td className="py-3 px-4 border-b">{ele.duration}</td>
                                <td className="py-3 px-4 border-b">{ele.machineType}</td>
                                <td className="py-3 px-4 border-b">{ele.cost}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
