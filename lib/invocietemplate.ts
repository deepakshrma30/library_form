export const generateInvoiceHtml = ({
  startDate,
  endDate,
  amount,
  imageUrl,
}: {
  startDate: string;
  endDate: string;
  amount: string;
  imageUrl: string;
}) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Subscription Invoice</title>
  <style>
    body {
      margin: 0;
      background: #f4f7fc;
      font-family: 'Helvetica Neue', sans-serif;
      color: #333;
      line-height: 1.6;
      padding: 40px 20px;
    }

    .invoice-container {
      max-width: 800px;
      margin: auto;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
      overflow: hidden;
    }

    .header {
      background: linear-gradient(135deg, #4f46e5, #6366f1);
      color: white;
      padding: 30px 40px;
      text-align: center;
    }

    .header h1 {
      margin: 0;
      font-size: 28px;
    }

    .invoice-details {
      padding: 30px 40px;
    }

    .details-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      border-bottom: 1px solid #eee;
      padding-bottom: 12px;
    }

    .details-row:last-child {
      border-bottom: none;
    }

    .label {
      font-weight: 600;
      color: #555;
    }

    .value {
      color: #111;
    }

    .proof-section {
      padding: 0 40px 30px;
    }

    .proof-section h2 {
      margin-bottom: 12px;
      font-size: 20px;
      color: #4f46e5;
    }

    .proof-section img {
      width: 100%;
      max-height: 500px;
      object-fit: contain;
      border-radius: 8px;
      border: 1px solid #ddd;
    }

    .note {
      background: #f9fafb;
      padding: 20px 40px;
      border-top: 1px solid #eee;
      font-size: 14px;
      text-align: center;
      color: #666;
    }

    @media (max-width: 600px) {
      .details-row {
        flex-direction: column;
        gap: 4px;
      }

      .label, .value {
        text-align: left;
      }
    }
  </style>
</head>
<body>
  <div class="invoice-container">
    <div class="header">
      <h1>Subscription Invoice</h1>
    </div>

    <div class="invoice-details">
      <div class="details-row">
        <div class="label">Start Date:</div>
        <div class="value">${startDate}</div>
      </div>
      <div class="details-row">
        <div class="label">End Date:</div>
        <div class="value">${endDate}</div>
      </div>
      <div class="details-row">
        <div class="label">Amount Paid:</div>
        <div class="value">${amount}</div>
      </div>
    </div>

    <div class="proof-section">
      <h2>Payment Proof</h2>
      <img src="${imageUrl}" alt="Payment Proof" />
    </div>

    <div class="note">
      This is a system-generated invoice and does not require a signature.
    </div>
  </div>
</body>
</html>
`;
