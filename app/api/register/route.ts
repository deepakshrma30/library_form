import { sendInvoiceEmail } from "@/lib/emailService";
import { generateInvoiceHtml } from "@/lib/invocietemplate";
import { generateInvoicePdf } from "@/lib/pdfGenerator";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (body) {
      const paymentProof = body.paymentProof;
      console.log(paymentProof, "paymentproffs");
      const htmltemplate = generateInvoiceHtml({
        amount: "455",
        endDate: "sdsds",
        imageUrl: paymentProof,
        startDate: "sdsds",
      });

      const pdfBuffer = Buffer.from(await generateInvoicePdf(htmltemplate));

      const mailOptions = {
        from: process.env.NEXT_EMAIL_ID,
        to: body.email,
        subject: "Your Library Invoice",
        text: "Please find your subscription invoice attached.",
        attachments: [
          {
            filename: "invoice.pdf",
            content: pdfBuffer,
            contentType: "application/pdf",
          },
        ],
      };

      await sendInvoiceEmail(mailOptions);
      return NextResponse.json(
        { message: "Mail Sent Successfully" },
        { status: 200 }
      );
    }
  } catch (error) {
    console.log(error, "error");
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
