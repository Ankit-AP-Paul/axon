interface CostProps {
    cpu: string;
    ram: string;
}


export function calculateCost({ cpu, ram }: CostProps) {
    const cost = parseInt(cpu) * (-0.000250583) + parseInt(ram) * 0.0000327202 + 0.00214017

    return cost
}
