import {
  Sofa,
  Refrigerator,
  Warehouse,
  House,
  Trees,
  HardHat,
  Building2,
  Briefcase,
  Archive,
  KeyRound,
  Landmark,
  Bath,
  Hammer,
  TriangleAlert,
  Truck,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/data/services";

const icons: Record<Service["icon"], LucideIcon> = {
  truck: Truck,
  sofa: Sofa,
  refrigerator: Refrigerator,
  warehouse: Warehouse,
  home: House,
  trees: Trees,
  hardHat: HardHat,
  building2: Building2,
  briefcase: Briefcase,
  archive: Archive,
  key: KeyRound,
  landmark: Landmark,
  bath: Bath,
  hammer: Hammer,
  alert: TriangleAlert,
};

export function serviceIcon(name: Service["icon"]) {
  return icons[name];
}
