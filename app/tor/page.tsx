import { Header } from '../../components/header'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function TermsOfReference() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Terms of Reference (ToR)</h1>
            <p className="text-xl">Company Trip to the Republic of Moldova</p>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>1. Purpose of the Trip</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>To conduct market assessments and establish partnerships for SULDAAN M. GENERAL TRADING in the Republic of Moldova.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>2. Team Composition</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Market Researcher:</strong> Responsible for gathering market data and insights.</li>
                    <li><strong>Business Analyst:</strong> Documenting findings and analyzing market conditions.</li>
                    <li><strong>Procurement Specialist:</strong> Engaging with suppliers and assessing logistics.</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>3. Budget Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Item</TableHead>
                        <TableHead>Cost</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Flights</TableCell>
                        <TableCell>$4,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Accommodation (21 nights at $200/night)</TableCell>
                        <TableCell>$4,200</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Meals (21 days at $70/day)</TableCell>
                        <TableCell>$1,470</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Transportation (local travel and transfers)</TableCell>
                        <TableCell>$2,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Meeting Expenses (venue rentals, materials)</TableCell>
                        <TableCell>$600</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-bold">Total Estimated Budget</TableCell>
                        <TableCell className="font-bold">$12,270</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>4. Potential Risks and Mitigation Strategies</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Risk</TableHead>
                        <TableHead>Mitigation</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Language Barriers</TableCell>
                        <TableCell>Hire a local translator for key meetings.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Cultural Misunderstandings</TableCell>
                        <TableCell>Conduct preliminary research on cultural norms and practices.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Health and Safety Concerns</TableCell>
                        <TableCell>Ensure all team members have appropriate health insurance and are briefed on local health facilities.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Travel Delays</TableCell>
                        <TableCell>Build extra time into the itinerary for travel between meetings.</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>5. Reporting and Follow-Up</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>A comprehensive report will be prepared at the end of the trip, summarizing findings, potential partnerships, and recommendations for future actions.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {currentYear} Sultan General Trading. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

