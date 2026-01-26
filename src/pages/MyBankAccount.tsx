import { Link } from "react-router-dom";
import { Header } from "@/components/intranet/Header";
import { Navigation } from "@/components/intranet/Navigation";
import { ArrowLeft, Eye, CreditCard, PiggyBank, Wallet, FileText, Plus, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const deposits = [
  { name: "MTB BRICK BY BRICK", account: "0460380034744", status: "Active", balance: 1158838.85 },
  { name: "MTB INSPIRE", account: "0460430013448", status: "Active", balance: 8247.09 },
  { name: "MTB MILLIONAIRE PLAN", account: "0462400006591", status: "Active", balance: 523971.34 },
  { name: "MTB REGULARSAVINGSSTAFF", account: "0570310025025", status: "Active", balance: 173119.08 },
  { name: "MTB Extreme Savings Account", account: "0570445000654", status: "Active", balance: 16772.16 },
  { name: "MTB KOTIPATI", account: "0572410003312", status: "Active", balance: 1792839.34 },
  { name: "MTB REGULAR SAVINGS", account: "1311001200230", status: "Active", balance: 13720.00 },
  { name: "FDR(WITH COMPOUNDING)", account: "1307000066562", status: "Active", balance: 21432.02 },
  { name: "MTB BRICK BY BRICK", account: "1308001748797", status: "Active", balance: 10000.00 },
];

const loans = [
  { name: "MTB Cash Line Overdraft", account: "2410000076965", status: "Active", balance: 934881.96 },
  { name: "Staff Loan Against Prov.", account: "2402000018320", status: "Active", balance: 766769.00 },
  { name: "Car Loan (Employee)", account: "2402000020120", status: "Active", balance: 2658557.00 },
  { name: "Torit Rin", account: "2401000331410", status: "Active", balance: 50000.00 },
];

const payrollCard = { number: "489702******3406" };

const endServiceBenefits = [
  { name: "Provident Fund (PF)", value: 2009284.00, link: "View Statement" },
  { name: "Gratuity admissible", value: 2210000.00 },
];

const otherAssets = [
  { type: "Investments (Share/Bonds)", items: [
    { name: "91 DAYS T-BILL RONISHIKD 21.04.25/867615", value: 0.00 },
    { name: "Debit 91 DAYS T-BILL RONISHIKD 28.04.25/1041365", value: 0.00 },
    { name: "Debit 91 DAYS T-BILL RONISHIKD 30.06.25/754189", value: 0.00 },
  ]},
  { type: "Investments (Others)", items: [
    { name: "DEPTOBGL TSP issue fvg-RONI SHIKDER/1300426, Dated: 12/06/24", value: 300000.00 },
    { name: "DEPTOBGL TSP ISSUE, FVG-RONI SHIKDER/792777; Dated: 23/10/2022", value: 0.00 },
    { name: "FVG-RONI SHIKDER/341890; Dated: 11/05/2022 - Matured", value: 0.00 },
  ]},
  { type: "Personal Loans", items: [
    { name: "Belayet 1311010036795-2lac @ 19/11/25+ NPSB 1lac", value: 300000.00 },
    { name: "Belayet- CCOD 25/12/2025", value: 200000.00 },
    { name: "Newaz Bhai - CCOD", value: 513567.00 },
  ]},
];

const otherLiabilities = [
  { type: "Credit Cards (manual balance)", items: [
    { name: "5127780200041900", value: 0.00 },
  ]},
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
};

const MyBankAccount = () => {
  const totalDeposits = deposits.reduce((sum, d) => sum + d.balance, 0);
  const totalLoans = loans.reduce((sum, l) => sum + l.balance, 0);
  const totalEndService = endServiceBenefits.reduce((sum, e) => sum + e.value, 0);
  const totalOtherAssets = otherAssets.flatMap(a => a.items).reduce((sum, i) => sum + i.value, 0);
  const totalOtherLiabilities = otherLiabilities.flatMap(l => l.items).reduce((sum, i) => sum + i.value, 0);
  
  const totalAssets = totalDeposits + totalEndService + totalOtherAssets;
  const totalLiabilities = totalLoans + totalOtherLiabilities;
  const netWorth = totalAssets - totalLiabilities;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <div className="container px-4 lg:px-6 py-6">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="outline" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-foreground">My Personal Balance Sheet</h1>
          </div>
          <a href="#" className="text-sm text-[hsl(var(--mtb-teal))] hover:underline">Manage A/C Visibility</a>
        </div>

        <p className="text-sm text-muted-foreground mb-6">
          MTBians can now have a better financial wealth management by adding his or her A/Cs to this Personal Balance Sheet Page. Balances of MTB A/Cs to be updated automatically while balances with other asset and liability heads have to be created and managed manually.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* My Assets Column */}
          <div className="space-y-4">
            <div className="bg-[hsl(var(--mtb-green))] text-white px-4 py-2 rounded-t font-bold text-center">
              My Assets
            </div>

            {/* Deposit with MTB */}
            <div className="mtb-card overflow-hidden">
              <div className="bg-[hsl(var(--mtb-green))]/10 px-4 py-2 border-b border-border flex items-center gap-2">
                <PiggyBank className="w-4 h-4 text-[hsl(var(--mtb-green))]" />
                <span className="font-semibold text-foreground">Deposit with MTB</span>
              </div>
              <table className="w-full text-sm">
                <thead className="bg-muted/30">
                  <tr>
                    <th className="text-left px-3 py-2">Sl#</th>
                    <th className="text-left px-3 py-2">Account No.</th>
                    <th className="text-center px-2 py-2">Docs</th>
                    <th className="text-center px-2 py-2">Check Statement</th>
                    <th className="text-right px-3 py-2">Current Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {deposits.map((deposit, idx) => (
                    <tr key={idx} className="border-b border-border/30">
                      <td className="px-3 py-2">{idx + 1}.</td>
                      <td className="px-3 py-2">
                        <div className="font-medium">{deposit.name}</div>
                        <div className="text-xs text-muted-foreground">{deposit.account} - {deposit.status}</div>
                      </td>
                      <td className="text-center px-2 py-2">
                        <FileText className="w-4 h-4 text-muted-foreground mx-auto" />
                      </td>
                      <td className="text-center px-2 py-2">
                        <Button variant="outline" size="sm" className="h-6 text-xs">View</Button>
                      </td>
                      <td className="text-right px-3 py-2 font-medium">{formatCurrency(deposit.balance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-between items-center px-4 py-2 bg-muted/20 border-t">
                <span className="font-semibold">Sub total of deposit with MTB</span>
                <span className="font-bold text-[hsl(var(--mtb-green))]">{formatCurrency(totalDeposits)}</span>
              </div>
              <div className="px-4 py-2 text-right">
                <a href="#" className="text-xs text-[hsl(var(--mtb-teal))] hover:underline flex items-center justify-end gap-1">
                  <Plus className="w-3 h-3" /> Add New MTB Account
                </a>
              </div>
            </div>

            {/* Payroll Card */}
            <div className="mtb-card p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-[hsl(var(--mtb-blue))]" />
                  <span className="font-semibold">Payroll Card</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm">{payrollCard.number}</span>
                  <Button size="sm" className="h-7 bg-[hsl(var(--mtb-teal))] text-white">Show Balance</Button>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                <a href="#" className="text-[hsl(var(--mtb-teal))] hover:underline">Update Card Number</a> (in case your payroll card is renewed upon expiry)
              </p>
            </div>

            {/* End Service Benefits */}
            <div className="mtb-card overflow-hidden">
              <div className="bg-[hsl(var(--mtb-green))]/10 px-4 py-2 border-b border-border flex items-center gap-2">
                <Wallet className="w-4 h-4 text-[hsl(var(--mtb-green))]" />
                <span className="font-semibold text-foreground">End Service Benefits</span>
              </div>
              <div className="p-4 space-y-2">
                {endServiceBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm">
                    <span>
                      {benefit.name} {benefit.link && <a href="#" className="text-[hsl(var(--mtb-teal))] hover:underline">({benefit.link})</a>}
                    </span>
                    <span className="font-medium">{formatCurrency(benefit.value)}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center px-4 py-2 bg-muted/20 border-t">
                <span className="font-semibold">Sub Total of End Service Benefits</span>
                <span className="font-bold">{formatCurrency(totalEndService)}</span>
              </div>
            </div>

            {/* Other Assets */}
            <div className="mtb-card overflow-hidden">
              <div className="bg-[hsl(var(--mtb-orange))]/10 px-4 py-2 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[hsl(var(--mtb-orange))]" />
                  <span className="font-semibold text-foreground">Other Assets (manually managed)</span>
                </div>
                <a href="#" className="text-xs text-[hsl(var(--mtb-teal))] hover:underline">Add New Asset ■ Manage</a>
              </div>
              <div className="p-4 space-y-4">
                {otherAssets.map((category, idx) => (
                  <div key={idx}>
                    <div className="font-medium text-sm text-foreground mb-2">{category.type}</div>
                    {category.items.map((item, iIdx) => (
                      <div key={iIdx} className="flex justify-between items-center text-sm py-1 border-b border-border/30">
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground">{iIdx + 1}.</span>
                          <span>{item.name}</span>
                          <FileText className="w-3 h-3 text-muted-foreground" />
                        </div>
                        <span>{formatCurrency(item.value)}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center px-4 py-2 bg-muted/20 border-t">
                <span className="font-semibold">Sub total of other assets</span>
                <span className="font-bold">{formatCurrency(totalOtherAssets)}</span>
              </div>
            </div>
          </div>

          {/* My Liabilities Column */}
          <div className="space-y-4">
            <div className="bg-[hsl(var(--mtb-red))] text-white px-4 py-2 rounded-t font-bold text-center">
              My Liabilities
            </div>

            {/* Loan with MTB */}
            <div className="mtb-card overflow-hidden">
              <div className="bg-[hsl(var(--mtb-red))]/10 px-4 py-2 border-b border-border flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-[hsl(var(--mtb-red))]" />
                <span className="font-semibold text-foreground">Loan with MTB</span>
              </div>
              <table className="w-full text-sm">
                <thead className="bg-muted/30">
                  <tr>
                    <th className="text-left px-3 py-2">Sl#</th>
                    <th className="text-left px-3 py-2">Account No.</th>
                    <th className="text-center px-2 py-2">Check Statement</th>
                    <th className="text-right px-3 py-2">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {loans.map((loan, idx) => (
                    <tr key={idx} className="border-b border-border/30">
                      <td className="px-3 py-2">{idx + 1}.</td>
                      <td className="px-3 py-2">
                        <div className="font-medium">{loan.name}</div>
                        <div className="text-xs text-muted-foreground">{loan.account} - {loan.status}</div>
                      </td>
                      <td className="text-center px-2 py-2">
                        <Button variant="outline" size="sm" className="h-6 text-xs">View</Button>
                      </td>
                      <td className="text-right px-3 py-2 font-medium">{formatCurrency(loan.balance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-between items-center px-4 py-2 bg-muted/20 border-t">
                <span className="font-semibold">Sub total of loans with MTB</span>
                <span className="font-bold text-[hsl(var(--mtb-red))]">{formatCurrency(totalLoans)}</span>
              </div>
              <div className="px-4 py-2 text-right">
                <a href="#" className="text-xs text-[hsl(var(--mtb-teal))] hover:underline flex items-center justify-end gap-1">
                  <Plus className="w-3 h-3" /> Add New MTB Account
                </a>
              </div>
            </div>

            {/* Other Liabilities */}
            <div className="mtb-card overflow-hidden">
              <div className="bg-[hsl(var(--mtb-orange))]/10 px-4 py-2 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-[hsl(var(--mtb-orange))]" />
                  <span className="font-semibold text-foreground">Other Liabilities (manually managed)</span>
                </div>
                <a href="#" className="text-xs text-[hsl(var(--mtb-teal))] hover:underline">Add New Liability ■ Manage</a>
              </div>
              <div className="p-4 space-y-4">
                {otherLiabilities.map((category, idx) => (
                  <div key={idx}>
                    <div className="font-medium text-sm text-foreground mb-2">{category.type}</div>
                    {category.items.map((item, iIdx) => (
                      <div key={iIdx} className="flex justify-between items-center text-sm py-1 border-b border-border/30">
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground">{iIdx + 1}.</span>
                          <span>{item.name}</span>
                        </div>
                        <span>{formatCurrency(item.value)}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center px-4 py-2 bg-muted/20 border-t">
                <span className="font-semibold">Sub total of other liabilities</span>
                <span className="font-bold">{formatCurrency(totalOtherLiabilities)}</span>
              </div>
            </div>

            {/* Full Summary */}
            <div className="mtb-card overflow-hidden">
              <div className="bg-[hsl(var(--mtb-teal))] text-white px-4 py-2 font-bold">
                Full Summary
              </div>
              <div className="p-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Total Deposit with MTB</span>
                  <span className="font-medium">{formatCurrency(totalDeposits)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total End Service Benefits</span>
                  <span className="font-medium">{formatCurrency(totalEndService)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total of Other Assets</span>
                  <span className="font-medium">{formatCurrency(totalOtherAssets)}</span>
                </div>
                <div className="flex justify-between border-t pt-2 font-bold">
                  <span>Total Asset Balance</span>
                  <span className="text-[hsl(var(--mtb-green))]">{formatCurrency(totalAssets)}</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total Liability Balance</span>
                  <span className="text-[hsl(var(--mtb-red))]">{formatCurrency(totalLiabilities)}</span>
                </div>
                <div className="flex justify-between border-t pt-2 font-bold text-lg">
                  <span>My Net worth</span>
                  <span className="text-[hsl(var(--mtb-teal))]">{formatCurrency(netWorth)}</span>
                </div>
              </div>
              <div className="px-4 py-2 text-right border-t">
                <a href="#" className="text-xs text-[hsl(var(--mtb-teal))] hover:underline">📄 Printable View</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-6">
        <div className="container px-4 lg:px-6 py-4">
          <p className="text-xs text-muted-foreground text-center">
            <strong>Disclosure:</strong> MTB GHR will have the right to access to these information through the 'Employees Liability Management System' only upon tendering of resignation by an employee.
          </p>
          <p className="text-center mt-2">
            <Link to="/" className="text-sm text-[hsl(var(--mtb-teal))] hover:underline">Home Page</Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MyBankAccount;
