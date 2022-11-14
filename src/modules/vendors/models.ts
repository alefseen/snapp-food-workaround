interface Vendor {
  id: number;
  title: string;
  description: string;
  backgroundImage: string;
  logo: string;
  rate: number;
  countReview: number;
  address: string;
  isOpen: boolean;
  minOrder: number;
  deliveryFee: number;
  deliver: boolean;
}

export type { Vendor };
