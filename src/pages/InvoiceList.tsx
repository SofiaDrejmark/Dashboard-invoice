import React from "react";
import { useAppContext } from "../context/AppContext";

/*- Fakturor: Kundnamn, status, förfallodatum, summa */
function InvoiceList() {
  const { invoices, deleteInvoice } = useAppContext();
  return (
    <div>
      <h2>Invoices</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th>Customer </th>
              <th>Days left</th>
              <th>Total Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice: any) => (
              <tr key={invoice.id}>
                <td>{invoice.customer}</td>
                <td>{invoice.daysLeft}</td>
                <td>{invoice.totalPrice}</td>
                <td>
                  {invoice.status}{" "}
                  <button onClick={() => deleteInvoice(invoice.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InvoiceList;
