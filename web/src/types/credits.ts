export interface CreditPack {
  id: string;
  name: string;
  credits: number;
  price: number; // USD cents
  lemonSqueezyVariantId: string;
}

export const CREDIT_PACKS: CreditPack[] = [
  {
    id: "starter",
    name: "10 Credits",
    credits: 10,
    price: 500,
    lemonSqueezyVariantId: "",
  },
  {
    id: "pro",
    name: "50 Credits",
    credits: 50,
    price: 2000,
    lemonSqueezyVariantId: "",
  },
];
