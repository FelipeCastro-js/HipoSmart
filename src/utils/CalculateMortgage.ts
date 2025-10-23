export type MortgageType = "Repayment" | "Interest Only";

interface MortgageResult {
  monthlyPayment: number;
  totalRepay: number;
}

export function calculateMortgage(
  amount: number, // Loan amount
  years: number, // Term in years
  interestRate: number, // Annual interest rate (%)
  type: MortgageType
): MortgageResult {
  const monthlyRate = interestRate / 100 / 12;
  const totalPayments = years * 12;

  if (type === "Repayment") {
    // Amortization formula
    const monthlyPayment =
      (amount * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
      (Math.pow(1 + monthlyRate, totalPayments) - 1);

    const totalRepay = monthlyPayment * totalPayments;

    return {
      monthlyPayment,
      totalRepay,
    };
  }

  if (type === "Interest Only") {
    const monthlyPayment = amount * monthlyRate;
    const totalRepay = monthlyPayment * totalPayments + amount;

    return {
      monthlyPayment,
      totalRepay,
    };
  }

  throw new Error("Invalid mortgage type");
}
