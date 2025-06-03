"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Mail, Phone, QrCode, Table, Upload, User, X } from "lucide-react";
import { Input } from "./ui/input";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "Arshad Khan",
    email: "arshaddinsu57@gmail.com",
    phone: "7509787667",
    company: "",
    country: "",
    city: "",
    comments: "",
  });

  const [uploadedImages, setUploadedImages] = useState({
    image1: null as File | null,
    image2: null as File | null,
  });

  const [imagePreviews, setImagePreviews] = useState({
    image1: null as string | null,
    image2: null as string | null,
  });

  const handleImageUpload = (field: "image1" | "image2", file: File | null) => {
    if (file) {
      setUploadedImages((prev) => ({ ...prev, [field]: file }));
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreviews((prev) => ({
          ...prev,
          [field]: e.target?.result as string,
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setUploadedImages((prev) => ({ ...prev, [field]: null }));
      setImagePreviews((prev) => ({ ...prev, [field]: null }));
    }
  };

  const removeImage = (field: "image1" | "image2") => {
    handleImageUpload(field, null);
  };
  return (
    <div className="xl:w-3/5  p-4 sm:p-6 lg:p-8 xl:p-12">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
          Library <span className="text-orange-400">Connect</span>
        </h2>
        <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
          Fill out the form below to begin your enrollment process.
        </p>

        <form className="space-y-4 sm:space-y-6">
          {/* Name and Inquiry Type */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs sm:text-sm text-gray-300 mb-2">
                Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-gray-800 border-gray-700 text-white pl-10 focus:border-orange-400 focus:ring-orange-400 h-10 sm:h-11"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs sm:text-sm text-gray-300 mb-2">
                Cabin Alloted
              </label>
              <div className="relative">
                <Table className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-gray-800 border-gray-700 text-white pl-10 focus:border-orange-400 focus:ring-orange-400 h-10 sm:h-11"
                  placeholder="Enter your name"
                />
              </div>
            </div>
          </div>

          {/* Email and Phone */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs sm:text-sm text-gray-300 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-gray-800 border-gray-700 text-white pl-10 focus:border-orange-400 focus:ring-orange-400 h-10 sm:h-11"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs sm:text-sm text-gray-300 mb-2">
                Phone number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="bg-gray-800 border-gray-700 text-white pl-10 focus:border-orange-400 focus:ring-orange-400 h-10 sm:h-11"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
          </div>

          {/* Company and Country */}

          {/* City */}

          {/* Image Upload Fields */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs sm:text-sm text-gray-300 mb-2">
                Aadhar Card
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleImageUpload("image1", e.target.files?.[0] || null)
                  }
                  className="hidden"
                  id="image1-upload"
                />
                <label
                  htmlFor="image1-upload"
                  className="flex items-center justify-center w-full h-24 sm:h-28 bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg cursor-pointer hover:border-orange-400 transition-colors"
                >
                  {imagePreviews.image1 ? (
                    <div className="relative w-full h-full">
                      <img
                        src={imagePreviews.image1 || "/placeholder.svg"}
                        alt="Preview 1"
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          removeImage("image1");
                        }}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                      <p className="text-xs text-gray-400">Click to upload</p>
                    </div>
                  )}
                </label>
              </div>
            </div>
            <div>
              <label className="block text-xs sm:text-sm text-gray-300 mb-2">
                Payment Proof
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleImageUpload("image2", e.target.files?.[0] || null)
                  }
                  className="hidden"
                  id="image2-upload"
                />
                <label
                  htmlFor="image2-upload"
                  className="flex items-center justify-center w-full h-24 sm:h-28 bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg cursor-pointer hover:border-orange-400 transition-colors"
                >
                  {imagePreviews.image2 ? (
                    <div className="relative w-full h-full">
                      <img
                        src={imagePreviews.image2 || "/placeholder.svg"}
                        alt="Preview 2"
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          removeImage("image2");
                        }}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                      <p className="text-xs text-gray-400">Click to upload</p>
                    </div>
                  )}
                </label>
              </div>
            </div>
          </div>

          {/* QR Code Display */}
          <div>
            <label className="block text-xs sm:text-sm text-gray-300 mb-2">
              Payment QR Code
            </label>
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center justify-center w-48 h-48 sm:w-28 sm:h-28 bg-white rounded-lg">
                <QrCode className="w-58 h-58 sm:w-20 sm:h-20 text-black" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-white font-medium text-sm sm:text-base">
                  Scan to Pay
                </p>
                <p className="text-gray-400 text-xs sm:text-sm mt-1">
                  Use this QR code to make a secure and instant payment using
                  any UPI app
                </p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-start sm:justify-end">
            <Button className="w-full sm:w-48 bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 sm:py-4 rounded-lg transition-colors text-sm sm:text-base cursor-pointer">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
