import axios from "axios";
import { Coffee } from "../models/Coffee";
import { axiosClient } from "./axios.config";
import { Address } from "./dtos/Address.dto";
import { OrderDto } from "./dtos/Order.dto";

export class Http {
  static async getCoffees() {
    const response = await axiosClient.get<Coffee[]>("/coffee");
    return response.data;
  }

  static async createOrder(orderDto: OrderDto) {
    const response = await axiosClient.post("/order", orderDto);
    const shouldResolve = response.status === 201;
    if (shouldResolve) return Promise.resolve();
    return Promise.reject(response.status);
  }

  static async getAddress(cep: string) {
    const response = await axios.get<Address>(
      `https://viacep.com.br/ws/${cep}/json/`
    );
    const address = response.data;
    return address;
  }
}

export const coffeeData: Coffee[] = [
  {
    id: "851466c4-4fdb-4181-afda-7657a9c9a074",
    price: 9.9,
    title: "Expresso Americano",
    tags: ["Tradicional"],
    subtitle: "Expresso diluído, menos intenso que o tradicional",
    src: "Americano",
  },
  {
    id: "2c932a9e-7d4d-49d3-b85a-3e55515c9ab1",
    price: 4.9,
    title: "Expresso Tradicional",
    tags: ["Tradicional"],
    subtitle: "O tradicional café feito com água quente e grãos moídos",
    src: "Expresso",
  },
  {
    id: "cd12de70-fcd5-4e7a-a2a6-90311ead16e9",
    price: 5.9,
    title: "Expresso Cremoso",
    tags: ["Tradicional"],
    subtitle: "Café expresso tradicional com espuma cremosa",
    src: "ExpressoCremoso",
  },
  {
    id: "ccc08853-6566-4147-a6e8-7d43fd742f63",
    price: 9.9,
    title: "Expresso Gelado",
    tags: ["Tradicional", "Gelado"],
    subtitle: "Bebida preparada com café expresso e cubos de gelo",
    src: "CafeGelado",
  },
  {
    id: "e905c4f0-744f-4e7a-af43-3f03449c6469",
    price: 3.9,
    title: "Capuccino",
    tags: ["Tradicional", "Gelado"],
    subtitle: "Bebida com canela feita de doses iguais de café, leite e espuma",
    src: "Capuccino",
  },
  {
    id: "0c955d71-12c1-4e72-94b3-bc4dce8a29a2",
    price: 9.9,
    title: "Chocolate Quente",
    tags: ["Especial", "Com Leite"],
    subtitle: "Bebida feita com chocolate dissolvido no leite quente e café",
    src: "ChocolateQuente",
  },
  {
    id: "1eed9076-1cf1-4800-b964-243fa0fd058c",
    price: 9.9,
    title: "Cubano",
    tags: ["Especial", "Alcoólico", "Gelado"],
    subtitle: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    src: "Cubano",
  },
  {
    id: "efcc9834-168a-405c-882d-cd2309738552",
    price: 9.9,
    title: "Café com Leite",
    tags: ["Tradicional", "Com Leite"],
    subtitle: "Meio a meio de expresso tradicional com leite vaporizado",
    src: "CafeComLeite",
  },
  {
    id: "98551667-9e8d-422b-a226-2e1dc0d1d8bb",
    price: 9.9,
    title: "Árabe",
    tags: ["Especial"],
    subtitle: "Bebida preparada com grãos de café árabe e especiarias",
    src: "Arabe",
  },
  {
    id: "27b505a8-53bd-408e-9da8-18eeb305e0fb",
    price: 9.9,
    title: "Havaiano",
    tags: ["Especial"],
    subtitle: "Bebida adocicada preparada com café e leite de coco",
    src: "Havaiano",
  },
  {
    id: "66694db6-6307-43cd-8647-fb564786eec3",
    price: 10.9,
    title: "Irlandês",
    tags: ["Especial", "Alcoólico"],
    subtitle: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    src: "Irlandes",
  },
  {
    id: "660a3e76-ae4b-4392-adc2-0228bf729e51",
    price: 9.9,
    title: "Latte",
    tags: ["Tradicional", "Com Leite"],
    subtitle: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    src: "Latte",
  },
  {
    id: "737c6f05-369e-491c-9175-70571673da4c",
    price: 5.9,
    title: "Macchiato",
    tags: ["Tradicional", "Gelado"],
    subtitle: "Café expresso misturado com um pouco de leite quente e espuma",
    src: "Macchiato",
  },
  {
    id: "78324f60-34f4-4b09-bf8a-f4feb3256dc7",
    price: 7.9,
    title: "Mochaccino",
    tags: ["Tradicional", "Com Leite"],
    subtitle: "Café expresso com calda de chocolate, pouco leite e espuma",
    src: "Mochaccino",
  },
];
