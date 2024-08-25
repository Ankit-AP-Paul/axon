interface CostProps {
    cpu: string;
    ram: string;
}


export function calculateCost({ cpu, ram }: CostProps) {
    const cost = parseInt(cpu) * (-0.000250583) + parseInt(ram) * 0.0000327202 + 0.00214017

    return cost
}


// https://api.wolframalpha.com/v2/query?input=(4%20*%20-0.000250583)%20%2B%20(16%20*%200.0000327202)%20%2B%200.00214017&format=plaintext&output=JSON&appid=2EJ3L2-VKJY33KTHW
