import "dotenv/config";
import { DeleteObjectCommand, S3 } from "@aws-sdk/client-s3";

// Create reusable S3 instance
const s3 = new S3({
  region: "ap-south-1",
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY!,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY!,
  },
});

export const uploadFileToS3 = async (file: File) => {
  const res = await fetch("/api/upload", {
    method: "POST",
    body: JSON.stringify({
      fileName: file.name,
      fileType: file.type,
    }),
  });

  const { url, key } = await res.json();

  // Upload file to S3 using signed URL
  await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": file.type,
    },
    body: file,
  });

  return {
    file_key: key,
    url: `https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.ap-south-1.amazonaws.com/${key}`,
  };
};

export function getS3Url(file_key: string): string {
  return `https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.ap-south-1.amazonaws.com/${file_key}`;
}

export async function deleteFromS3(file_key: string): Promise<boolean> {
  try {
    const params = {
      Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME!,
      Key: file_key,
    };

    await s3.send(new DeleteObjectCommand(params));
    return true;
  } catch (error) {
    console.error("S3 Delete Error:", error);
    return false;
  }
}
