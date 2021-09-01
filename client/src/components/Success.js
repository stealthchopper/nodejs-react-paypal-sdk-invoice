import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Invoice from './Invoice/Invoice';

function ConvertJsonToInvoice(
  test,
  MyCompany,
  EmailCompany,
  PhoneCompany,
  AddressCompany
) {
  let MyBalance =
    test.payment.purchase_units[0].amount.value +
    ' ' +
    test.payment.purchase_units[0].amount.currency_code;
  let invoice = {
    id: test.payment.id,
    invoice_no: test.payment.purchase_units[0].payments.captures[0].id,
    balance: MyBalance,
    company: MyCompany,
    email: EmailCompany,
    phone: PhoneCompany,
    address: AddressCompany,
    date: test.payment.create_time,
    due_date: test.payment.update_time,
    items: test.payment.purchase_units[0].items,
  };
  return invoice;
}

const Success = () => {
  const [session, setSession] = useState({});
  const [session2, setSession2] = useState({});
  const location = useLocation();
  const queryLocation = location.search;
  useEffect(() => {
    async function fetchSession() {
      const products = await fetch(
        process.env.REACT_APP_URL1 + '/api/paypalv2/success' + queryLocation
      ).then((res) => res.json());
      setSession(products);
      const detail = await fetch(
        process.env.REACT_APP_URL1 + '/api/paypalv2/getorder' + queryLocation
      ).then((res) => res.json());
      setSession2(detail);
    }
    fetchSession();
  }, [queryLocation]);

  return (
    <div className="sr-root">
      <div className="sr-main">
        <header className="sr-header">
          <div className="sr-header__logo"></div>
        </header>
        {session.status === 'success' ? (
          <div className="sr-payment-summary completed-view">
            <h1>Your payment succeeded</h1>
            <h4>View CheckoutSession response:</h4>
          </div>
        ) : session.message === 'Session already create ' ? (
          <div className="sr-payment-summary completed-view">
            <h1>Your payment Already Validate </h1>
            <h4>View CheckoutSession response:</h4>
          </div>
        ) : (
          <div className="sr-payment-summary completed-view">
            <h1>Your payment Failed</h1>
            <h4>View CheckoutSession response:</h4>
          </div>
        )}

        <div className="sr-section completed-view">
          <div className="sr-callout">
            {Object.keys(session2).length === 0 ? (
              <div></div>
            ) : (
              <PDFDownloadLink
                document={
                  <Invoice
                    invoice={ConvertJsonToInvoice(
                      session2,
                      'TestCompany',
                      'test@company.com',
                      '+0136666666',
                      '444 rue du balcon france'
                    )}
                    Mytitle={'Recus'}
                    MsgThanks={'Merci Pour votre Confiance'}
                  />
                }
                fileName="somename.pdf"
              >
                {({ blob, url, loading, error }) =>
                  loading ? 'Loading document...' : 'Download now!'
                }
              </PDFDownloadLink>
            )}
          </div>
          <Link to="/">Return to DashBoard</Link>
        </div>
      </div>
      <div className="sr-content">
        <div className="pasha-image-stack">
          <img
            alt=""
            src="https://picsum.photos/280/320?random=1"
            width="140"
            height="160"
          />
          <img
            alt=""
            src="https://picsum.photos/280/320?random=2"
            width="140"
            height="160"
          />
          <img
            alt=""
            src="https://picsum.photos/280/320?random=3"
            width="140"
            height="160"
          />
          <img
            alt=""
            src="https://picsum.photos/280/320?random=4"
            width="140"
            height="160"
          />
        </div>
      </div>
    </div>
  );
};

export default Success;
