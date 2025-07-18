import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { CreditCard, Lock, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Billing = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState("gold");
  const [formData, setFormData] = useState({
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    billingAddress: "",
    city: "",
    zipCode: "",
    country: "",
  });

  const plans = {
    standard: {
      name: "Standard",
      price: "$29",
      features: [
        "Up to 500 records per month",
        "Up to 5 users",
        "Email support",
      ],
    },
    gold: {
      name: "Gold",
      price: "$79",
      features: [
        "Up to 1,000 records per month",
        "Advanced API access",
        "Priority support",
      ],
    },
    premium: {
      name: "Premium",
      price: "$149",
      features: [
        "Unlimited records per month",
        "Full API access",
        "24/7 support",
      ],
    },
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Processing payment for plan:", selectedPlan, formData);
    alert("Payment processed successfully! (This is a demo)");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--background))] to-[hsl(var(--muted)/0.2)] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-4 text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="text-4xl font-bold text-[hsl(var(--foreground))] mb-2">
            Complete Your Purchase
          </h1>
          <p className="text-xl text-[hsl(var(--muted-foreground))]">
            Secure billing for your FlowLeanSolutions subscription
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Plan Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[hsl(var(--foreground))]">
                <CreditCard className="h-5 w-5" />
                Select Your Plan
              </CardTitle>
              <CardDescription className="text-[hsl(var(--muted-foreground))]">
                Choose the plan that best fits your needs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {Object.entries(plans).map(([key, plan]) => (
                  <div
                    key={key}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      selectedPlan === key
                        ? "border-[hsl(var(--primary))] bg-[hsl(var(--primary)/0.05)]"
                        : "border-[hsl(var(--border))] hover:border-[hsl(var(--primary)/0.5)]"
                    }`}
                    onClick={() => setSelectedPlan(key)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-[hsl(var(--foreground))]">
                          {plan.name}
                        </h3>
                        <p className="text-2xl font-bold text-[hsl(var(--primary))]">
                          {plan.price}
                          <span className="text-sm font-normal text-[hsl(var(--muted-foreground))]">
                            /month
                          </span>
                        </p>
                      </div>
                      <input
                        type="radio"
                        checked={selectedPlan === key}
                        onChange={() => setSelectedPlan(key)}
                        className="mt-1"
                      />
                    </div>
                    <ul className="mt-2 space-y-1">
                      {plan.features.map((feature, index) => (
                        <li
                          key={index}
                          className="text-sm text-[hsl(var(--muted-foreground))]"
                        >
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Payment Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[hsl(var(--foreground))]">
                <Lock className="h-5 w-5" />
                Payment Information
              </CardTitle>
              <CardDescription className="text-[hsl(var(--muted-foreground))]">
                Your payment details are secure and encrypted
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[hsl(var(--foreground))]">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="cardholderName"
                    className="text-[hsl(var(--foreground))]"
                  >
                    Cardholder Name
                  </Label>
                  <Input
                    id="cardholderName"
                    placeholder="John Doe"
                    value={formData.cardholderName}
                    onChange={(e) =>
                      handleInputChange("cardholderName", e.target.value)
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cardNumber" className="text-[hsl(var(--foreground))]">
                    Card Number
                  </Label>
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="expiryDate"
                      className="text-[hsl(var(--foreground))]"
                    >
                      Expiry Date
                    </Label>
                    <Input
                      id="expiryDate"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv" className="text-[hsl(var(--foreground))]">
                      CVV
                    </Label>
                    <Input
                      id="cvv"
                      placeholder="123"
                      value={formData.cvv}
                      onChange={(e) => handleInputChange("cvv", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="billingAddress"
                    className="text-[hsl(var(--foreground))]"
                  >
                    Billing Address
                  </Label>
                  <Input
                    id="billingAddress"
                    placeholder="123 Main Street"
                    value={formData.billingAddress}
                    onChange={(e) => handleInputChange("billingAddress", e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-[hsl(var(--foreground))]">
                      City
                    </Label>
                    <Input
                      id="city"
                      placeholder="New York"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode" className="text-[hsl(var(--foreground))]">
                      ZIP Code
                    </Label>
                    <Input
                      id="zipCode"
                      placeholder="10001"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange("zipCode", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country" className="text-[hsl(var(--foreground))]">
                    Country
                  </Label>
                  <Select
                    onValueChange={(value) => handleInputChange("country", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                      <SelectItem value="de">Germany</SelectItem>
                      <SelectItem value="fr">France</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="pt-4 border-t border-[hsl(var(--border))]">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-[hsl(var(--foreground))]">
                      Total
                    </span>
                    <span className="text-2xl font-bold text-[hsl(var(--primary))]">
                      {plans[selectedPlan as keyof typeof plans].price}/month
                    </span>
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Lock className="mr-2 h-4 w-4" />
                    Complete Purchase
                  </Button>
                  <p className="text-xs text-[hsl(var(--muted-foreground))] text-center mt-2">
                    Your payment is secured with 256-bit SSL encryption
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Billing;